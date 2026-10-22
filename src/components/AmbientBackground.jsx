import { useEffect, useState } from "react";
import { sparkles } from "../data/homeData";

export default function AmbientBackground() {
  const [blend, setBlend] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const collectionEl = document.getElementById("coleccion");
      if (!collectionEl) return;

      const rect = collectionEl.getBoundingClientRect();
      const vh = window.innerHeight || 800;

      // Inicia la transición cuando la sección de colección entra en pantalla al bajar con el mouse
      const start = vh * 0.85;
      const end = vh * 0.15;
      const rawProgress = (start - rect.top) / (start - end);
      const clamped = Math.max(0, Math.min(1, rawProgress));
      setBlend(clamped);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="luxury-ambient-bg" aria-hidden="true">
      {/* FONDO 1 (INICIO): Pinceles vertiendo esmalte plateado tornasol */}
      <video
        className="ambient-video-bg video-layer-hero"
        src="/pinceles-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          opacity: 1 - blend,
          transform: `scale(${1.02 + blend * 0.08}) translateY(${-blend * 24}px)`,
          filter: `blur(${blend * 6}px) contrast(1.05) brightness(1.02)`,
        }}
      />

      {/* FONDO 2 (AL BAJAR A LA COLECCIÓN): Mano con cristales y frasco Lumière Spa */}
      <video
        className="ambient-video-bg video-layer-collection"
        src="/lumiere-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          opacity: blend,
          transform: `scale(${1.24 - blend * 0.06})`,
          filter: `blur(${(1 - blend) * 6}px) contrast(1.04) brightness(1.02) saturate(1.08)`,
        }}
      />

      {/* Velo iridiscente muy ligero para armonizar ambos videos */}
      <div className="video-iridescent-veil" />

      {/* Destellos de cristal plateado */}
      {sparkles.map((sp) => (
        <span
          key={sp.id}
          className="floating-sparkle"
          style={{
            top: sp.top,
            left: sp.left,
            width: sp.size,
            height: sp.size,
            animationDelay: sp.delay,
            animationDuration: sp.duration,
          }}
        />
      ))}
    </div>
  );
}
