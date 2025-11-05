"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

//images
import iconMoonLight from "@/assets/icon-moon-white.svg";
import iconMoonPurple from "@/assets/icon-moon-purple.svg";
import iconSparklesLight from "@/assets/icon-sparkles-white.svg";
import iconSparklesPurple from "@/assets/icon-sparkles-purple.svg";

// Função wrap para embrulhar valores
function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

export default function Separator({
  color = "primary",
  words = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"],
  baseVelocity = 5,
}: {
  color?: "primary" | "secondary";
  words?: string[];
  baseVelocity?: number;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 60,
    stiffness: 300,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const directionFactor = useRef<number>(1);
  const lastVelocity = useRef<number>(0);

  useAnimationFrame((t, delta) => {
    const currentVelocity = velocityFactor.get();
    
    // Suaviza a mudança de direção usando um threshold
    if (currentVelocity < -0.1 && lastVelocity.current >= -0.1) {
      directionFactor.current = -1;
    } else if (currentVelocity > 0.1 && lastVelocity.current <= 0.1) {
      directionFactor.current = 1;
    }
    
    lastVelocity.current = currentVelocity;

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    moveBy += directionFactor.current * moveBy * currentVelocity;
    
    baseX.set(baseX.get() + moveBy);
  });

  // Wrap para criar o efeito de loop infinito no parallax
  // Com 3 repetições, cada uma é ~33.33% da largura total
  const x = useTransform(baseX, (v) => `${wrap(-33.33, -66.66, v)}%`);

  const colorClass = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
  }[color];

  return (
    <div className={`w-full h-fit ${colorClass} py-2 overflow-hidden`}>
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        style={{ x }}
      >
        {words.map((word, index) => (
          <div key={`0-${index}`} className="flex items-center gap-8">
            <p className="text-6xl font-black uppercase tracking-tight">
              {word}
            </p>
            {index % 2 === 0 ? (
              <Image
                src={color === "primary" ? iconMoonLight : iconMoonPurple}
                alt="Moon"
                width={100}
                height={100}
                className="w-10 h-10 shrink-0"
              />
            ) : (
              <Image
                src={color === "primary" ? iconSparklesLight : iconSparklesPurple}
                alt="Sparkles"
                width={100}
                height={100}
                className="w-10 h-10 shrink-0"
              />
            )}
          </div>
        ))}
        {words.map((word, index) => (
          <div key={`1-${index}`} className="flex items-center gap-8">
            <p className="text-6xl font-black uppercase tracking-tight">
              {word}
            </p>
            {index % 2 === 0 ? (
              <Image
                src={color === "primary" ? iconMoonLight : iconMoonPurple}
                alt="Moon"
                width={100}
                height={100}
                className="w-10 h-10 shrink-0"
              />
            ) : (
              <Image
                src={color === "primary" ? iconSparklesLight : iconSparklesPurple}
                alt="Sparkles"
                width={100}
                height={100}
                className="w-10 h-10 shrink-0"
              />
            )}
          </div>
        ))}
        {words.map((word, index) => (
          <div key={`2-${index}`} className="flex items-center gap-8">
            <p className="text-6xl font-black uppercase tracking-tight">
              {word}
            </p>
            {index % 2 === 0 ? (
              <Image
                src={color === "primary" ? iconMoonLight : iconMoonPurple}
                alt="Moon"
                width={100}
                height={100}
                className="w-10 h-10 shrink-0"
              />
            ) : (
              <Image
                src={color === "primary" ? iconSparklesLight : iconSparklesPurple}
                alt="Sparkles"
                width={100}
                height={100}
                className="w-10 h-10 shrink-0"
              />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
