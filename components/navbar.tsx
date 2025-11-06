"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import logoHorizontalPurple from "@/assets/logo-horizontal-purple.svg";
import logoHorizontalYellow from "@/assets/logo-horizontal-yellow.svg";
import { Button } from "./ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { openWhatsApp } from "@/utils/openWhatsApp";

type SectionId = "section-header" | "section-modalities" | "section-feedbacks" | "section-faq" | "section-final";

const sectionColors: Record<SectionId, "purple" | "yellow"> = {
  "section-header": "purple",
  "section-modalities": "yellow",
  "section-feedbacks": "purple",
  "section-faq": "yellow",
  "section-final": "purple",
};

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<SectionId>("section-header");
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const sections = Object.keys(sectionColors) as SectionId[];
    
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight * 0.3; // 30% da viewport a partir do topo
      
      let activeSection: SectionId = "section-header";
      let maxIntersection = 0;

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;
        
        // Verifica se a seção está na área de trigger (30% da viewport)
        if (sectionTop <= triggerPoint && sectionBottom >= triggerPoint) {
          // Calcula a interseção da seção com a área de trigger
          const intersectionTop = Math.max(sectionTop, 0);
          const intersectionBottom = Math.min(sectionBottom, triggerPoint);
          const intersection = intersectionBottom - intersectionTop;
          
          if (intersection > maxIntersection) {
            maxIntersection = intersection;
            activeSection = sectionId;
          }
        }
      });

      // Se nenhuma seção está na área de trigger, encontra a mais próxima
      if (maxIntersection === 0) {
        let closestDistance = Infinity;
        
        sections.forEach((sectionId) => {
          const section = document.getElementById(sectionId);
          if (!section) return;

          const rect = section.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(triggerPoint - sectionCenter);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            activeSection = sectionId;
          }
        });
      }

      setActiveSection(activeSection);
      setShowWhatsApp(activeSection !== "section-header");
    };

    // Usa requestAnimationFrame para melhor performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll(); // Chama uma vez para definir o estado inicial

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const currentLogo =
    sectionColors[activeSection] === "purple"
      ? logoHorizontalPurple
      : logoHorizontalYellow;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative"
        >
          <Image
            src={currentLogo}
            alt="Logo Horizontal"
            width={200}
            height={60}
            className="h-auto w-40"
            priority
          />
        </motion.div>

        <AnimatePresence mode="wait">
          {showWhatsApp && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed md:static bottom-6"
            >
              <Button
                onClick={() => openWhatsApp()}
                className="fixed md:static bottom-6 bg-[#50B820] text-white text-[16px] gap-2 px-6 md:max-w-fit py-2 h-fit w-[90dvw] hover:bg-[#45a01c] transition-colors"
              >
                <FaWhatsapp className="size-5" />
                <p className="font-bold uppercase inline">
                  quero saber mais
                </p>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
