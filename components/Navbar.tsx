"use client";

import Image from "next/image";
import { MenuIcon } from "lucide-react";

interface NavbarProps {
  home: React.RefObject<HTMLElement>;
  product: React.RefObject<HTMLElement>;
  team: React.RefObject<HTMLElement>;
  timeline: React.RefObject<HTMLElement>;
  contact: React.RefObject<HTMLElement>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
}

const Navbar = ({
  home,
  product,
  team,
  timeline,
  contact,
  isOpen,
  setIsOpen,
  scrollToSection,
}: NavbarProps) => {
  return (
    <div className="flex justify-between items-center z-10">
      <div className="flex items-center gap-2">
        <Image
          src={"/LogoNoWhite.png"}
          width={32}
          height={32}
          alt="logo"
          className="bg-white rounded-md bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white to-white/50 bg-clip-text"
        />
        <span className="text-sm font-semibold text-white">
          Smart Innosys Sdn Bhd
        </span>
      </div>
      <nav className="">
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon color="white" size={24} />
        </button>

        <div
          className={`fixed inset-0 w-full h-full ${
            isOpen ? "visible" : "invisible"
          }`}
        >
          <div
            className={`absolute transition-all duration-500 ease-out inset-0 w-full h-full bg-gray-900 ${
              isOpen ? "opacity-50" : "opacity-0"
            } `}
            onClick={() => setIsOpen(false)}
          ></div>
          <ul
            className={`absolute transition-all duration-500 ease-out bg-white h-screen top-0 left-0 w-3/4 ${
              isOpen ? "" : "-translate-x-full"
            } `}
          >
            <div
              className="text-6xl absolute top-4 right-4 mr-3 mt-2 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </div>
            <li className="flex items-center gap-2 mt-10 px-5">
              <Image src="/LogoNoWhite.png" width={32} height={32} alt="logo" />
              Smart Innosys Sdn Bhd
            </li>
            <li
              className="text-black mt-20 px-10 cursor-pointer"
              onClick={() => scrollToSection(home)}
            >
              Home
            </li>
            <li
              className="text-black mt-5 px-10 cursor-pointer"
              onClick={() => scrollToSection(product)}
            >
              Product & Services
            </li>
            <li
              className="text-black mt-5 px-10 cursor-pointer"
              onClick={() => scrollToSection(team)}
            >
              Our Team
            </li>
            <li
              className="text-black mt-5 px-10 cursor-pointer"
              onClick={() => scrollToSection(timeline)}
            >
              Our Journey
            </li>
            <li
              className="text-black mt-5 px-10 cursor-pointer"
              onClick={() => scrollToSection(contact)}
            >
              Contact
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
