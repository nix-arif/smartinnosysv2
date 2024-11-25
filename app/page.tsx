"use client";

import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Team from "@/components/Team";
import TimeLine from "@/components/TimeLine";
import { useRef, useState } from "react";

export default function Home() {
  const home = useRef(null);
  const product = useRef(null);
  const team = useRef(null);
  const timeline = useRef(null);
  const contact = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    setIsOpen(false);
    window.scrollTo({
      top: ref.current?.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="">
      <div className="p-8 pb-20 gap-16 sm:p-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#19305C] to-[#03122F]">
        <div className="absolute top-72 left-40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="224"
            height="224"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-dna text-white opacity-10"
          >
            <path d="m10 16 1.5 1.5" />
            <path d="m14 8-1.5-1.5" />
            <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
            <path d="m16.5 10.5 1 1" />
            <path d="m17 6-2.891-2.891" />
            <path d="M2 15c6.667-6 13.333 0 20-6" />
            <path d="m20 9 .891.891" />
            <path d="M3.109 14.109 4 15" />
            <path d="m6.5 12.5 1 1" />
            <path d="m7 18 2.891 2.891" />
            <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
          </svg>
        </div>
        <main className="">
          <Navbar
            home={home}
            product={product}
            team={team}
            timeline={timeline}
            contact={contact}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            scrollToSection={scrollToSection}
          />
          <HeroSection ref={contact} scrollToSection={scrollToSection} />
        </main>
      </div>
      <Product ref={product} />
      <Team ref={team} />
      <TimeLine ref={timeline} />
      <Contact ref={contact} />
    </div>
  );
}
