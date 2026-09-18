import { useEffect, useState } from "react";

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      setVisible(hero ? hero.getBoundingClientRect().bottom <= 0 : false);
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
      <a
        href="#claim"
        className="flex w-full items-center justify-center rounded-full bg-primary px-5 py-3.5 text-base font-semibold text-primary-foreground"
      >
        Claim My 50% Off Comprehensive Analysis
      </a>
    </div>
  );
}
