"use client";
/**
 * ScrollReveal — lightweight IntersectionObserver wrapper.
 * Add className="reveal [reveal-delay-N]" to any element, then
 * wrap the section in <ScrollReveal> to activate fade-in/slide-up
 * when that element enters the viewport.
 */
import { useEffect, useRef } from "react";

export default function ScrollReveal({ children, className = "", as: Tag = "div", ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const container = ref.current;
    if (!container) return;

    const targets = container.querySelectorAll(".reveal");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  );
}
