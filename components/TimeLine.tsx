"use client";

interface TimeLineProps {
  ref: React.RefObject<HTMLDivElement>;
}

const TimeLine = ({ ref }: TimeLineProps) => {
  return (
    <div ref={ref} className="p-8 pt-20 bg-white">
      <div className="relative w-fit flex items-center justify-center px-5 py-1 mb-10">
        <div className="absolute inset-0 bg-slate-400 opacity-20 rounded-full"></div>
        <span className="text-sm font-semibold text-[#03122F]">
          Our Journey
        </span>
      </div>

      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            February 2014
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Establishment of Smart Innosys Enterprise
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Participating with the local market in Malaysia
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            March 2014 - December 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Participating with the local market in Malaysia
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Enter all hospitals in Malaysia
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            August 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Establishment of Smart Innosys Sdn Bhd
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Participating with the local market in Malaysia
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            August 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Medical Device Certification with Malaysian Medical Device Authority
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Become a certified medical device company in Malaysia
          </p>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            October 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Bring in Laser Surgical Diode Laser System
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Collaboration with METRUM Cyroflex, Poland
          </p>
        </li>
      </ol>
    </div>
  );
};

export default TimeLine;
