import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

interface HlsVideoProps {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
}

/**
 * Plays an HLS (.m3u8) stream. Safari supports HLS natively via <video src>;
 * every other browser needs hls.js attached to a MediaSource.
 *
 * Renders poster-first with a large centered play button; native controls
 * only appear once the visitor has started playback, so the poster frame
 * reads as a clean thumbnail rather than a video player before it's used.
 */
export function HlsVideo({ src, poster, className, ariaLabel }: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const canPlayNativeHls = video.canPlayType("application/vnd.apple.mpegurl") !== "";
    if (canPlayNativeHls) {
      video.src = src;
      return;
    }

    let hls: import("hls.js").default | undefined;
    let destroyed = false;

    import("hls.js").then(({ default: Hls }) => {
      if (destroyed) return;
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
      }
    });

    return () => {
      destroyed = true;
      hls?.destroy();
    };
  }, [src]);

  const startPlayback = () => {
    setStarted(true);
    videoRef.current?.play();
  };

  return (
    <div className="relative h-full w-full">
      <video
        ref={videoRef}
        aria-label={ariaLabel}
        className={className}
        controls={started}
        playsInline
        preload="none"
        poster={poster}
        onPlay={() => setStarted(true)}
      >
        Your browser does not support embedded video.
      </video>
      {!started && (
        <button
          type="button"
          onClick={startPlayback}
          aria-label="Play video"
          className="absolute inset-0 grid place-items-center bg-ink/10 transition-colors hover:bg-ink/25"
        >
          <span className="grid h-16 w-16 place-items-center rounded-full bg-white text-primary shadow-xl transition-transform hover:scale-105 sm:h-20 sm:w-20">
            <Play aria-hidden="true" className="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8" />
          </span>
        </button>
      )}
    </div>
  );
}
