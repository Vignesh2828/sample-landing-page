"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useTheme } from "next-themes";
import { statsData } from "@/components/data/siteData";

export const StatsSection = () => {
  const { theme } = useTheme();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      id="stats"
      ref={ref}
      className="max-w-[75%] mx-auto pb-24 sm:pb-32 text-center"
    >
      <h2 className="text-2xl md:text-4xl font-extrabold text-primary tracking-tight mb-10">
        {statsData.heading}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
        {statsData.stats.map(({ count, label }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center"
          >
            <span className="text-5xl font-bold text-primary">
              {inView ? <CountUp end={count} duration={2} /> : 0}+
            </span>
            <span
              className={`mt-3 text-lg md:text-xl ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
