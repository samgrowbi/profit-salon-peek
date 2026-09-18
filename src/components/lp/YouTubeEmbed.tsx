import { useState } from "react";
import { Play } from "lucide-react";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

/**
 * Shows the YouTube thumbnail with a play button; only loads the actual
 * iframe (and starts pulling YouTube's scripts/tracking) after the visitor
 * clicks, so five embeds on one page don't all load eagerly.
 */
export function YouTubeEmbed({ videoId, title, className }: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className={`relative aspect-video overflow-hidden rounded-2xl bg-ink ${className ?? ""}`}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className={`group relative grid aspect-video w-full place-items-center overflow-hidden rounded-2xl bg-ink text-ink-foreground shadow-sm ${className ?? ""}`}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-ink/20" />
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-card text-primary shadow-lg transition-transform group-hover:scale-105">
        <Play aria-hidden="true" className="ml-1 h-6 w-6 fill-current" />
      </span>
    </button>
  );
}
