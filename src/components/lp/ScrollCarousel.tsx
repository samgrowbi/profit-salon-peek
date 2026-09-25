import { useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ScrollCarouselProps {
  children: ReactNode;
  trackClassName: string;
  ariaLabel: string;
}

/**
 * Wraps a horizontally-scrolling track with visible prev/next arrow buttons,
 * so visitors aren't relying on drag-to-scroll alone to see more cards.
 * The track itself keeps its own scroll-snap/scrollbar styling; this just
 * adds a ref and two buttons that call scrollBy on it.
 */
export function ScrollCarousel({ children, trackClassName, ariaLabel }: ScrollCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: track.clientWidth * 0.85 * direction, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div ref={trackRef} role="group" aria-label={ariaLabel} className={trackClassName}>
        {children}
      </div>
      <button
        type="button"
        onClick={() => scroll(-1)}
        aria-label="Scroll left"
        className="absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-card p-2.5 text-foreground shadow-md transition-colors hover:bg-secondary sm:flex"
      >
        <ChevronLeft aria-hidden="true" className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => scroll(1)}
        aria-label="Scroll right"
        className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 rounded-full border border-border bg-card p-2.5 text-foreground shadow-md transition-colors hover:bg-secondary sm:flex"
      >
        <ChevronRight aria-hidden="true" className="h-5 w-5" />
      </button>
    </div>
  );
}
