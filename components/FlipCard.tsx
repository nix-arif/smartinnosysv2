import Image from "next/image";
import React from "react";

type FlipCardProps = {
  image: string;
  alt: string;
  text: string;
  name: string;
  position: string;
};

const FlipCard = ({ image, alt, text, name, position }: FlipCardProps) => {
  return (
    <div className="flip-card rounded-lg overflow-hidden m-4">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Image src={image} alt={alt} width={500} height={500} />
        </div>
        <div className="flip-card-back">
          <div className="p-10">
            <p>{text}</p>
          </div>
          <div className="p-10">
            <h1>{name}</h1>
            <p>{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
