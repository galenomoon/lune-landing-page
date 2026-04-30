"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import logoHorizontalPurple from "@/assets/logo-horizontal-purple.svg";
import logoHorizontalYellow from "@/assets/logo-horizontal-yellow.svg";
import { Button } from "./ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { openWhatsApp } from "@/utils/openWhatsApp";

type SectionId =
  | "section-header"
  | "section-modalities"
  | "section-feedbacks"
  | "section-faq"
  | "section-location"
  | "section-final";

const sectionColors: Record<SectionId, "purple" | "yellow"> = {
  "section-header": "purple",
  "section-modalities": "yellow",
  "section-feedbacks": "purple",
  "section-faq": "yellow",
  "section-location": "yellow",
  "section-final": "purple",
};

const navLinks: { label: string; id: SectionId }[] = [
  { label: "Início", id: "section-header" },
  { label: "Modalidades", id: "section-modalities" },
  { label: "Depoimentos", id: "section-feedbacks" },
  { label: "Dúvidas", id: "section-faq" },
  { label: "Localização", id: "section-location" },
  { label: "Contato", id: "section-final" },
];

function scrollToSection(id: SectionId) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<SectionId>("section-header");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = Object.keys(sectionColors) as SectionId[];

    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight * 0.3;

      let current: SectionId = "section-header";
      let maxIntersection = 0;

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
          const intersection = Math.min(rect.bottom, triggerPoint) - Math.max(rect.top, 0);
          if (intersection > maxIntersection) {
            maxIntersection = intersection;
            current = sectionId;
          }
        }
      });

      if (maxIntersection === 0) {
        let closestDistance = Infinity;
        sections.forEach((sectionId) => {
          const section = document.getElementById(sectionId);
          if (!section) return;
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(triggerPoint - (rect.top + rect.height / 2));
          if (distance < closestDistance) {
            closestDistance = distance;
            current = sectionId;
          }
        });
      }

      setActiveSection(current);
    };

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
    handleScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const colorScheme = sectionColors[activeSection];
  const isPurpleText = colorScheme === "purple";
  const currentLogo = isPurpleText ? logoHorizontalPurple : logoHorizontalYellow;

  const linkColorClass = isPurpleText
    ? "text-primary hover:text-primary/70"
    : "text-secondary hover:text-secondary/70";

  const activeLinkClass = isPurpleText
    ? "text-primary font-bold underline underline-offset-4 decoration-2"
    : "text-secondary font-bold underline underline-offset-4 decoration-2";

  const mobileBgClass = isPurpleText ? "bg-secondary/95" : "bg-primary/95";
  const mobileLinkClass = isPurpleText ? "text-primary" : "text-secondary";

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Image
              src={currentLogo}
              alt="Lune Escola de Dança"
              width={200}
              height={60}
              className="h-auto w-36 md:w-40 cursor-pointer"
              priority
              onClick={() => scrollToSection("section-header")}
            />
          </motion.div>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-sm uppercase tracking-widest transition-all duration-200 cursor-pointer ${
                  activeSection === id ? activeLinkClass : linkColorClass
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 ${linkColorClass} transition-colors`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen
              ? <RiCloseLine className="size-7" />
              : <RiMenu3Line className="size-7" />
            }
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-0 top-[68px] z-40 ${mobileBgClass} backdrop-blur-sm flex flex-col items-center py-8 gap-6`}
          >
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => {
                  scrollToSection(id);
                  setMenuOpen(false);
                }}
                className={`text-lg uppercase tracking-widest font-bold transition-opacity ${mobileLinkClass} ${
                  activeSection === id ? "opacity-100 underline underline-offset-4" : "opacity-70 hover:opacity-100"
                }`}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp button */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed bottom-6 right-4 md:right-8 z-50"
      >
        <Button
          onClick={() => openWhatsApp()}
          className="bg-[#50B820] text-white gap-2 rounded-full w-[60px] h-[60px] hover:bg-[#45a01c] transition-colors"
        >
          <FaWhatsapp className="size-10" />
        </Button>
      </motion.div>
    </>
  );
}
