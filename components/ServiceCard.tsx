"use client";

import SpotlightCard from "./SpotlightCard";
import type { ReactNode } from "react";

export type ServiceCardProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
  spotlightColor?: string;
  children?: ReactNode;
};

/**
 * ServiceCard
 * Igual que BenefitCard por el momento.
 */
export default function ServiceCard({
  title,
  description,
  icon,
  className = "",
  spotlightColor = "#7dd3fc",
  children,
}: ServiceCardProps) {
  const mergedClass = `border-2 border-[#7dd3fc]/40 bg-black/20 ${className}`.trim();

  return (
    <SpotlightCard className={mergedClass} spotlightColor={spotlightColor}>
      {/* Glow del borde (debajo del contenido) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl z-[1]"
        style={{
          boxShadow:
            "0 0 24px 4px rgba(125, 211, 252, 0.22), inset 0 0 16px 2px rgba(125, 211, 252, 0.30)",
          border: "1px solid rgba(125, 211, 252, 0.35)",
        }}
      />
      <div className="relative z-10 flex items-start gap-4">
        {icon ? <div className="shrink-0 text-white/90">{icon}</div> : null}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {description ? <p className="text-white/70 leading-relaxed">{description}</p> : null}
          {children}
        </div>
      </div>
    </SpotlightCard>
  );
}
