import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  ref: React.RefObject<HTMLDivElement>;
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
}

const HeroSection = ({ ref, scrollToSection }: HeroSectionProps) => {
  return (
    <div className="mt-16">
      <div className="relative w-fit flex items-center justify-center px-5 py-1 mb-10">
        <div className="absolute inset-0 bg-white opacity-20 rounded-full" />
        <span className="text-sm font-semibold text-white">
          Welcome to Smart Innosys Sdn Bhd
        </span>
      </div>

      <div>
        <h1 className="text-4xl font-medium text-white tracking-wide leading-tight">
          Driven Solutions Shaping The Medical Industries
        </h1>
        <p className="text-sm text-slate-400 tracking-wide leading-6 mt-10">
          As a medical devices company, we are dedicated to providing innovative
          solutions that improve patient care and enhance healthcare outcomes.
        </p>
        <button
          className="mt-10 relative px-5 py-2"
          onClick={() => scrollToSection(ref)}
        >
          <div className="absolute inset-0 bg-white opacity-20 rounded-md hover:opacity-80 hover:text-black" />
          <span className="text-white opacity-100 text-sm font-semibold hover:text-[#03122F]">
            Contact Us
          </span>
        </button>
      </div>

      <div className="mt-10 rounded-xl overflow-hidden">
        <Image src="/hero.jpg" alt="hero-image" width={500} height={500} />
      </div>
    </div>
  );
};

export default HeroSection;
