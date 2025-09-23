"use client";

import Aurora from "./Aurora.jsx";
import type { CSSProperties } from "react";

type AuroraBackdropProps = {
  position?: "top" | "bottom"; // where to anchor inside the parent container
  height?: number | string; // e.g. 160 or "h-40" equivalent in px
  className?: string;
  style?: CSSProperties;
  // Props forwarded to Aurora
  colorStops?: string[];
  amplitude?: number;
  blend?: number;
  speed?: number;
};

/**
 * AuroraBackdrop
 * Utility overlay to place an Aurora slice at the top or bottom of a container.
 * Renders an absolute layer with an optional fade gradient into transparency.
 */
export default function AuroraBackdrop({
  position = "bottom",
  height = 160, // ~ h-40
  className = "",
  style,
  colorStops = ["#0ea5e9", "#38bdf8", "#7dd3fc"],
  amplitude = 1.0,
  blend = 0.6,
  speed = 1.0,
}: AuroraBackdropProps) {
  const anchorClass = position === "top" ? "top-0" : "bottom-0";
  const fadeClass = position === "top"
    ? "bg-gradient-to-b from-black via-black/40 to-transparent"
    : "bg-gradient-to-t from-black via-black/40 to-transparent";

  const pxHeight = typeof height === "number" ? `${height}px` : height;

  return (
    <div
      className={`pointer-events-none absolute left-0 right-0 ${anchorClass} z-0 ${className}`}
      style={{ height: pxHeight as any, ...style }}
      aria-hidden
    >
      <Aurora colorStops={colorStops} amplitude={amplitude} blend={blend} speed={speed} />
      <div className={`absolute inset-0 ${fadeClass}`} />
    </div>
  );
}
