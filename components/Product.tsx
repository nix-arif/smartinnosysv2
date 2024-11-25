import Image from "next/image";
import React from "react";

interface ProductProps {
  ref: React.RefObject<HTMLDivElement>;
}

const Product = ({ ref }: ProductProps) => {
  return (
    <div ref={ref} className="bg-white mt-10 p-8 pb-20 gap-16 sm:p-20">
      <div className="relative w-fit flex items-center justify-center px-5 py-1 mb-10">
        <div className="absolute inset-0 bg-slate-400 opacity-20 rounded-full"></div>
        <span className="text-sm font-semibold text-[#03122F]">
          Products & Services
        </span>
      </div>
      <div className="flex flex-col gap-8">
        <div className="">
          <div>
            <Image
              src="/laser-EVLT.jpg"
              width={800}
              height={600}
              alt="evlt"
              className="rounded-lg mb-5"
            />
            <h1 className="text-center">ENDOVENOUS LASER ABLATION</h1>
          </div>
        </div>
        <div className="">
          <div>
            <Image
              src="/laser-Proctology.jpg"
              width={800}
              height={600}
              alt="lht"
              className="rounded-lg mb-5"
            />
            <h1 className="text-center">LASER HEMORRHOID TREATMENT</h1>
          </div>
        </div>
        <div className="">
          <div>
            <Image
              src="/laser-PLDD.jpg"
              width={800}
              height={600}
              alt="pldd"
              className="rounded-lg mb-5"
            />
            <h1 className="text-center">
              PERCUTANEOUS LASER DISC DECOMPRESSION
            </h1>
          </div>
        </div>
        <div className="">
          <div>
            <Image
              src="/laser-FILAC.jpg"
              width={800}
              height={600}
              alt="filac"
              className="rounded-lg mb-5"
            />
            <h1 className="text-center">FISTULA-TRACT LASER CLOSURE</h1>
          </div>
        </div>
        <div className="">
          <div>
            <Image
              src="/surgicalInstruments.jpg"
              width={800}
              height={600}
              alt="surgicalinstruments"
              className="rounded-lg mb-5"
            />
            <h1 className="text-center">SURGICAL INSTRUMENTS</h1>
          </div>
        </div>
        <div className="">
          <div>
            <Image
              src="/swing15.jpg"
              width={800}
              height={600}
              alt="surgicalinstruments"
              className="rounded-lg mb-5"
            />
            <h1 className="text-center">LASER MACHINE (SWING 15)</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
