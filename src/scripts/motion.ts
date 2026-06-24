import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

function shouldAnimate(): boolean {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isMobile(): boolean {
  return window.matchMedia("(max-width: 767px)").matches;
}

function initAnchorScroll(): void {
  const nav = document.querySelector<HTMLElement>(".nav");

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;

      if (!isMobile()) return;

      e.preventDefault();
      const navHeight = nav?.offsetHeight ?? 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;

      window.scrollTo({
        top: Math.max(0, top),
        behavior: shouldAnimate() ? "smooth" : "auto",
      });
    });
  });
}
function initInteractiveCards(): void {
  if (isMobile()) return;

  gsap.utils.toArray<HTMLElement>("[data-interactive-card]").forEach((card) => {
    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
      card.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);

      gsap.to(card, {
        rotateX,
        rotateY,
        y: -4,
        duration: 0.45,
        ease: "power2.out",
        transformPerspective: 900,
      });
    };

    const onLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
      });
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
  });
}

export function initMotion(): void {
  initAnchorScroll();

  if (!shouldAnimate()) return;

  gsap.registerPlugin(ScrollTrigger);

  // Nav shrink on scroll
  const nav = document.querySelector<HTMLElement>(".nav");
  if (nav) {
    ScrollTrigger.create({
      start: "top -80",
      onUpdate: (self) => {
        nav.classList.toggle("nav--scrolled", self.scroll() > 60);
      },
    });
  }

  // Hero entrance
  const heroItems = gsap.utils.toArray<HTMLElement>("[data-reveal='hero'] [data-reveal-item]");
  if (heroItems.length) {
    gsap.fromTo(
      heroItems,
      { opacity: 0, y: 48, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.1,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.1,
      },
    );
  }

  // Section headers — line draw
  gsap.utils.toArray<HTMLElement>(".section-line").forEach((line) => {
    gsap.fromTo(
      line,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: line,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    );
  });

  // Section headers and non-card items
  gsap.utils.toArray<HTMLElement>("[data-reveal='section']").forEach((section) => {
    const items = section.querySelectorAll<HTMLElement>("[data-reveal-item]");
    if (items.length) {
      gsap.fromTo(
        items,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        },
      );
    }

    const cards = section.querySelectorAll<HTMLElement>("[data-reveal-card]");
    if (cards.length) {
      const mobile = isMobile();
      gsap.fromTo(
        cards,
        mobile
          ? { opacity: 0, y: 20 }
          : { opacity: 0, y: 48, rotateX: 10, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          ...(mobile ? {} : { rotateX: 0, scale: 1 }),
          duration: mobile ? 0.55 : 0.75,
          stagger: mobile ? 0.06 : 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: mobile ? "top 88%" : "top 72%",
            toggleActions: "play none none none",
          },
        },
      );
    }
  });

  // Marquee fade in
  const marquee = document.querySelector<HTMLElement>("[data-reveal='marquee']");
  if (marquee) {
    gsap.fromTo(
      marquee,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: marquee,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      },
    );
  }

  initInteractiveCards();

  // Smooth scroll — desktop only
  if (!isMobile()) {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const id = anchor.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target, { offset: -72 });
      });
    });
  }
}

try {
  initMotion();
} catch (error) {
  console.error("Motion init failed:", error);
}
