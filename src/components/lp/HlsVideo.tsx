import { useEffect, useRef } from "react";

interface HlsVideoProps {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
}

/**
 * Plays an HLS (.m3u8) stream. Safari supports HLS natively via <video src>;
 * every other browser needs hls.js attached to a MediaSource.
 */
export function HlsVideo({ src, poster, className, ariaLabel }: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

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

  return (
    <video
      ref={videoRef}
      aria-label={ariaLabel}
      className={className}
      controls
      muted
      playsInline
      preload="none"
      poster={poster}
    >
      Your browser does not support embedded video.
    </video>
  );
}
