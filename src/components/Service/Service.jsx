import React from "react";
import CountUp from "react-countup";
import { STATISTICS } from "../../data/constants";

const Service = () => {
  return (
    <section className="container h-12 md:h-32">
      <div className="mx-auto my-4 grid w-full -translate-y-10 grid-cols-2 divide-x divide-slate-700 bg-white p-2 shadow-lg dark:bg-gray-800 dark:text-white/70 md:max-w-[900px] md:-translate-y-16 md:grid-cols-4 md:p-8">
        {STATISTICS.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center justify-center ">
            <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
              <CountUp end={stat.number} suffix={stat.suffix} duration={2.75} />
            </h1>
            <h1 className="sm:text-md text-xs  md:text-lg">{stat.label}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
