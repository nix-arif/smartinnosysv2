"use client";

import { Building2, Mail } from "lucide-react";
import React from "react";

interface ContactProps {
  ref: React.RefObject<HTMLDivElement>;
}

const Contact = ({ ref }: ContactProps) => {
  return (
    <div
      ref={ref}
      className="mt-10 pt-20 p-8 pb-20 gap-16 sm:p-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#19305C] to-[#03122F]"
    >
      <div className="relative w-fit flex items-center justify-center px-5 py-1 mb-10">
        <div className="absolute inset-0 bg-white opacity-20 rounded-full" />
        <span className="text-sm font-semibold text-white">Contact Us</span>
      </div>
      <div className="flex flex-col gap-4 text-white font-semibold">
        <div className="flex justify-center items-center">
          <h1>SMART INNOSYS SDN BHD</h1>
        </div>
        <div className="flex items-center justify-between px-20">
          <Building2 />
          <div>
            <p>41-1 JALAN NEUTRON U16/Q</p>
            <p>SEKSYEN U16, DENAI ALAM</p>
            <p>40150 SHAH ALAM</p>
            <p>SELANGOR, MALAYSIA</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-20">
          <Mail />
          <p>smartinnosys@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
