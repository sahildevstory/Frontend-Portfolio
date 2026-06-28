"use client";

import { useEffect } from "react";
import CursorDot from "./CursorDot";
import CursorRing from "./CursorRing";

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");

    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot follows instantly
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      // Smooth follow
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;

      requestAnimationFrame(animate);
    };

    animate();

    // Hover effect
    const hoverables = document.querySelectorAll(
      "a, button, input, textarea, [role='button']"
    );

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        ring.style.width = "80px";
        ring.style.height = "80px";
      });

      el.addEventListener("mouseleave", () => {
        ring.style.width = "56px";
        ring.style.height = "56px";
      });
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <CursorRing />
      <CursorDot />
    </>
  );
}