import React from "react";
import FlipCard from "./FlipCard";
interface TeamProps {
  ref: React.RefObject<HTMLDivElement>;
}

const ourTeam = [
  {
    image: "/1.jpeg",
    alt: "Dr. A.K.M. Ashraf",
    text: "Dr. A.K.M. Ashraf is the CEO of Smart Innosys Sdn Bhd, leading the company with a vision to deliver innovative, customer-focused solutions in the medical industry. With over 15 years of experience in medical product development and business strategy, he has driven Smart Innosys through significant growth,",
    name: "Dr. A.K.M. Ashraf",
    position: "CEO",
  },
  {
    image: "/2.jpg",
    alt: "Dr. A.K.M. Safwan",
    text: "Dr. A.K.M. Ashraf is the CEO of Smart Innosys Sdn Bhd, leading the company with a vision to deliver innovative, customer-focused solutions in the medical industry. With over 15 years of experience in medical product development and business strategy, he has driven Smart Innosys through significant growth,",
    name: "Dr. A.K.M. Safwan",
    position: "COO",
  },
];

const Team = ({ ref }: TeamProps) => {
  return (
    <div
      ref={ref}
      className="p-8 pt-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#19305C] to-[#03122F]"
    >
      <div className="relative w-fit flex items-center justify-center px-5 py-1 mb-10">
        <div className="absolute inset-0 bg-white opacity-20 rounded-full" />
        <span className="text-sm font-semibold text-white">Our Team</span>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {ourTeam.map((team) => (
          <FlipCard key={team.name} {...team} />
        ))}
      </div>
    </div>
  );
};

export default Team;
