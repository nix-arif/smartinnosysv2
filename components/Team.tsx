import React from "react";
import FlipCard from "./FlipCard";
interface TeamProps {
  ref: React.RefObject<HTMLDivElement>;
}

const ourTeam = [
  {
    image: "/1.png",
    alt: "Nik Fikry",
    text: "Our CEO, Nik Fikry, is a visionary leader with a strong track record of driving innovation and growth. With extensive experience in medical industry, he are committed to steering the company towards continued success, fostering a culture of excellence, and delivering value to our clients, partners, and stakeholders. Under [his/her/their] leadership, we are focused on achieving our strategic goals while maintaining our core values of integrity, collaboration, and customer-centricity.",
    name: "Nik Fikry",
    position: "CEO",
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
