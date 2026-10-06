import { useEffect, useState } from "react";

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
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 p-3 backdrop-blur transition-transform duration-200 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a href="#claim" className="btn-cta w-full px-6 py-3.5 text-sm">
        Claim My 50% Off Comprehensive Analysis
      </a>
    </div>
  );
}
