import { useEffect, useRef, useState, type ReactNode } from "react";
import { Play } from "lucide-react";

interface HlsVideoProps {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
  /** Optional designed cover shown until the visitor presses play. */
  cover?: ReactNode;
}

/**
 * Plays an HLS (.m3u8) stream. Safari supports HLS natively via <video src>;
 * every other browser needs hls.js attached to a MediaSource.
 *
 * With a `cover`, the video shows that cover plus a big play button first;
 * clicking it starts playback (with sound) and reveals the normal controls.
 */
export function HlsVideo({ src, poster, className, ariaLabel, cover }: HlsVideoProps) {
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
    <div className="relative">
      <video
        ref={videoRef}
        aria-label={ariaLabel}
        className={className}
        controls={!cover || started}
        muted={!cover}
        playsInline
        preload="none"
        poster={poster}
        onPlay={() => setStarted(true)}
      >
        Your browser does not support embedded video.
      </video>
      {cover && !started && (
        <button
          type="button"
          onClick={startPlayback}
          aria-label="Play video"
          className="group absolute inset-0 block overflow-hidden text-left"
        >
          {cover}
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white text-primary shadow-xl transition-transform group-hover:scale-105 sm:h-20 sm:w-20">
              <Play aria-hidden="true" className="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
