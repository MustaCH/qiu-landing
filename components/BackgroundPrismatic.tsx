"use client";

import PrismaticBurst from "./PrismaticBurst";

export default function BackgroundPrismatic() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <PrismaticBurst
        intensity={2}
        speed={0.5}
        animationType="rotate3d"
        mixBlendMode="none"
        colors={[]}
        rayCount={0}
      />
    </div>
  );
}
