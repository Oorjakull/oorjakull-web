"use client";

import { useEffect, useState } from "react";

export default function ViewportBlur() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Check if at the top
      setIsAtTop(window.scrollY <= 10);

      // 2. Check if at the bottom
      // Allow a 10px threshold for mobile browser address bar quirks
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
      setIsAtBottom(scrolledToBottom);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden sm:block hidden transition-opacity duration-300">
      {/* Top Edge Vignette Blur */}
      <div 
        className={`absolute top-0 left-0 right-0 h-[10vh] backdrop-blur-md transition-opacity duration-500 ${isAtTop ? "opacity-0" : "opacity-100"} [mask-image:linear-gradient(to_bottom,black,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]`}
      />
      
      {/* Bottom Edge Vignette Blur */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-[20vh] backdrop-blur-xl transition-opacity duration-500 ${isAtBottom ? "opacity-0" : "opacity-100"} [mask-image:linear-gradient(to_top,black,transparent)] [-webkit-mask-image:linear-gradient(to_top,black,transparent)]`}
      />
    </div>
  );
}
