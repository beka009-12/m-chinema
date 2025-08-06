"use client";

import { useEffect, useRef } from "react";
import "./GlowCursor.css";

const GlowCursor = () => {
  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveAura = (e: MouseEvent) => {
      if (auraRef.current) {
        auraRef.current.style.top = `${e.clientY}px`;
        auraRef.current.style.left = `${e.clientX}px`;
      }
    };

    document.addEventListener("mousemove", moveAura);
    return () => document.removeEventListener("mousemove", moveAura);
  }, []);

  return <div className="cursor-aura" ref={auraRef} />;
};

export default GlowCursor;
