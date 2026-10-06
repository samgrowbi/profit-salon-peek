import { useEffect, useState } from "react";

// Follow-along CTA: full-width bar on mobile, floating card on desktop.
export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      const claim = document.getElementById("claim");
      const pastHero = hero ? hero.getBoundingClientRect().bottom <= 0 : false;
      // Hide once the form section is on screen; the bar would just point at itself.
      const atForm = claim ? claim.getBoundingClientRect().top < window.innerHeight : false;
      setVisible(pastHero && !atForm);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 p-3 backdrop-blur transition-all duration-300 md:inset-x-auto md:bottom-6 md:right-6 md:w-[22rem] md:rounded-2xl md:border-0 md:bg-navy md:p-5 md:text-white md:shadow-[0_24px_60px_-20px_rgb(0_0_0/0.55)] ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0 md:translate-y-8"
      }`}
    >
      <div className="mb-2 flex items-baseline justify-center gap-2 text-xs text-muted-foreground md:mb-3 md:justify-start md:text-sm md:text-white/75">
        <span className="hidden font-semibold text-white md:inline">
          60-min Profit Clarity Analysis
        </span>
        <span className="line-through">$500</span>
        <span className="font-semibold text-navy md:text-pink">$250</span>
        <span className="md:hidden">· No payment required today</span>
      </div>
      <a href="#claim" tabIndex={visible ? 0 : -1} className="btn-cta w-full px-6 py-3.5 text-sm">
        <span className="md:hidden">Claim My 50% Off Comprehensive Analysis</span>
        <span className="hidden md:inline">Claim My 50% Off Analysis</span>
      </a>
    </div>
  );
}
