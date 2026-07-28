"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Counter from "@/components/ui/Counter";

/*
 * Reels del sistema (spec §4.6 / §6) — el sistema "un video por vehículo" de
 * SoluRepuestos, reproducidos en la web.
 * Comportamiento:
 *  - Autoplay SILENCIADO y en loop cuando el reel entra en viewport; pausa al
 *    salir (IntersectionObserver). Con preload="none" el video no se descarga
 *    hasta que se reproduce → no penaliza la carga inicial (spec §2).
 *  - Botón de sonido por reel: solo UNO suena a la vez (activar uno silencia
 *    los demás). Toca un gesto del usuario → cumple las políticas de autoplay.
 *  - prefers-reduced-motion: no autoreproduce; queda el póster + botón de play.
 *  - Link al reel real en Instagram como caption.
 */

const REELS = [
  {
    id: "onix",
    n: "01",
    vehiculo: "Onix",
    v: 270,
    src: "/reels/onix.mp4",
    poster: "/reels/onix.jpg",
    href: "https://www.instagram.com/p/DYAY9boOWTy/",
  },
  {
    id: "strada",
    n: "02",
    vehiculo: "Fiat Strada",
    v: 250,
    src: "/reels/strada.mp4",
    poster: "/reels/strada.jpg",
    href: "https://www.instagram.com/reel/DYzfg6uOJQX/",
  },
  {
    id: "uno",
    n: "03",
    vehiculo: "Fiat Uno",
    v: 125,
    src: "/reels/uno.mp4",
    poster: "/reels/uno.jpg",
    href: "https://www.instagram.com/reel/DY7wytQRVuS/",
  },
];

function PlayGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 4.5L19 12L7 19.5V4.5Z" fill="currentColor" />
    </svg>
  );
}

function SoundOnGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 9v6h4l5 4V5L8 9H4Z"
        fill="currentColor"
      />
      <path
        d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SoundOffGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 9v6h4l5 4V5L8 9H4Z" fill="currentColor" />
      <path
        d="M16 9.5l5 5M21 9.5l-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ReelCard({ reel, soundOn, onRequestSound }) {
  const videoRef = useRef(null);
  const reduce = useReducedMotion();
  const [playing, setPlaying] = useState(false);

  // Play/pause automático según visibilidad (salvo reduced-motion).
  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduce) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [reduce]);

  // El estado de sonido lo maneja el padre (solo uno activo).
  useEffect(() => {
    const v = videoRef.current;
    if (v) v.muted = !soundOn;
  }, [soundOn]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <div className="group relative aspect-[9/16] overflow-hidden rounded-card-lg border border-chip-border bg-ink">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        preload="none"
        poster={reel.poster}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src={reel.src} type="video/mp4" />
      </video>

      {/* Capa de click para play/pausa manual */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={playing ? `Pausar reel ${reel.vehiculo}` : `Reproducir reel ${reel.vehiculo}`}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Botón de play grande, visible solo con el video pausado */}
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-full bg-accent pl-1 text-on-dark shadow-card-hover transition-opacity duration-ui ${
            playing ? "opacity-0" : "opacity-100"
          }`}
        >
          <PlayGlyph />
        </span>
      </button>

      {/* Badge de reel (arriba izq.) */}
      <span className="pointer-events-none absolute left-3 top-3 rounded-pill bg-chip-bg px-2.5 py-1 text-eyebrow font-bold uppercase tracking-eyebrow text-on-dark backdrop-blur-sm">
        Reel {reel.n}
      </span>

      {/* Botón de sonido (arriba der.) */}
      <button
        type="button"
        onClick={onRequestSound}
        aria-pressed={soundOn}
        aria-label={soundOn ? `Silenciar reel ${reel.vehiculo}` : `Activar sonido del reel ${reel.vehiculo}`}
        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-chip-bg text-on-dark backdrop-blur-sm transition-colors duration-ui hover:bg-accent"
      >
        {soundOn ? <SoundOnGlyph /> : <SoundOffGlyph />}
      </button>

      {/* Info abajo, sobre degradado para legibilidad */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-4 pt-10">
        <div className="font-display text-[clamp(22px,4vw,30px)] font-black tracking-num text-on-dark">
          <Counter value={reel.v} suffix="k" />
        </div>
        <p className="text-card-body text-on-dark-soft">
          {reel.vehiculo} · reproducciones
        </p>
        <a
          href={reel.href}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto mt-1 inline-block text-card-body font-semibold text-accent"
        >
          Ver en Instagram →
        </a>
      </div>
    </div>
  );
}

export default function Reels() {
  // Solo un reel con sonido a la vez (null = todos silenciados).
  const [activeSound, setActiveSound] = useState(null);

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
      {REELS.map((reel) => (
        <ReelCard
          key={reel.id}
          reel={reel}
          soundOn={activeSound === reel.id}
          onRequestSound={() =>
            setActiveSound((cur) => (cur === reel.id ? null : reel.id))
          }
        />
      ))}
    </div>
  );
}
