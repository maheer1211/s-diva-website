"use client";

import { useEffect } from "react";

/** Native-scroll animation system. No scroll hijacking, minimal JS and compositor-only movement. */
export default function ScrollExperience() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const reveal = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    }, { rootMargin: "0px 0px -7% 0px", threshold: 0.07 });
    reveal.forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight * .87) {
        element.classList.add("will-reveal");
        observer.observe(element);
      }
    });

    const layers = [...document.querySelectorAll<HTMLElement>("[data-parallax]")];
    const progress = document.querySelector<HTMLElement>(".reading-progress");
    let frame = 0;
    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      for (const element of layers) {
        const rect = element.parentElement?.getBoundingClientRect();
        if (!rect || rect.bottom < -100 || rect.top > viewport + 100) continue;
        const depth = Number(element.dataset.parallax) || .12;
        const centered = (rect.top + rect.height / 2 - viewport / 2) / viewport;
        element.style.setProperty("--parallax-y", `${Math.max(-100, Math.min(100, -centered * depth * 140)).toFixed(1)}px`);
      }
      if (progress) {
        const max = document.documentElement.scrollHeight - viewport;
        progress.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
      }
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
