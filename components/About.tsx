import React from "react";
import Image from "next/image";

const aboutCards = [
  {
    icon: "🧭",
    title: "Convenience For HK Lifestyle",
    description: "Strategic placements in high-traffic hubs across Hong Kong.",
  },
  {
    icon: "✨",
    title: "Clean, Consistent Service",
    description: "Hygiene and maintenance are our priority.",
  },
  {
    icon: "⚙️",
    title: "Smart Operations & Accountability",
    description: "Data-driven refilling ensures fully stocked machines.",
  },
];

const About = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:gap-12 lg:py-20">
        <div className="w-full lg:w-1/2">
          <div className="relative overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(15,23,42,0.25)]">
            <div className="relative aspect-square sm:aspect-[4/3]">
              <Image
                src="/about.png"
                alt="Healthy vending machine with snacks"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full space-y-6 lg:w-1/2">
          <div className="space-y-3">
            <h2
              className="text-2xl font-semibold text-[#111827] sm:text-3xl md:text-[32px]"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              About Healthy Vend HK Limited
            </h2>
            <p
              className="text-sm leading-relaxed text-[#4B5563] sm:text-base"
              style={{ fontFamily: "var(--font-instrument-sans)" }}
            >
              Healthy Vend HK Limited is a Hong Kong–focused vending operator.
              We help communities access better snack and drink options through
              reliable, well-maintained machines placed in the right locations.
              Our team handles installation, product planning, replenishment and
              servicing so partners enjoy a smooth, professional experience.
            </p>
          </div>

          <div className="space-y-3">
            {aboutCards.map((card) => (
              <div
                key={card.title}
                className="flex items-start gap-4 rounded-2xl bg-[#F5FAFF] px-5 py-4"
              >
                <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#E5F3FF] text-xl text-[#1890F2]">
                  <span>{card.icon}</span>
                </div>
                <div>
                  <h3
                    className="text-sm font-semibold text-[#111827] sm:text-base"
                    style={{ fontFamily: "var(--font-instrument-sans)" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="mt-1 text-xs leading-relaxed text-[#4B5563] sm:text-sm"
                    style={{ fontFamily: "var(--font-instrument-sans)" }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
