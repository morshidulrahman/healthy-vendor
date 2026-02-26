import React from "react";
import Image from "next/image";

type ChoiceCardProps = {
  title: string;
  imageSrc: string;
};

const ChoiceCard = ({ title, imageSrc }: ChoiceCardProps) => {
  return (
    <article className="relative overflow-hidden rounded-3xl bg-black/80 shadow-[0_24px_60px_rgba(15,23,42,0.4)]">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-end">
        <div className="w-full px-6 pb-5">
          <h3
            className="text-lg font-semibold text-white"
            style={{ fontFamily: "var(--font-instrument-sans)" }}
          >
            {title}
          </h3>
        </div>
      </div>
    </article>
  );
};

const choices: ChoiceCardProps[] = [
  {
    title: "Protein & Energy",
    imageSrc: "/about.png",
  },
  {
    title: "Nuts & Granola",
    imageSrc: "/about.png",
  },
  {
    title: "Low-Sugar Drinks",
    imageSrc: "/about.png",
  },
  {
    title: "Hydration",
    imageSrc: "/about.png",
  },
];

const HealthyChoice = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="space-y-3 text-center">
          <h2
            className="text-2xl font-semibold text-[#111827] sm:text-3xl md:text-[32px]"
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            Healthy Choices People Actually Buy
          </h2>
          <p
            className="mx-auto max-w-2xl text-sm leading-relaxed text-[#4B5563] sm:text-base"
            style={{ fontFamily: "var(--font-instrument-sans)" }}
          >
            We curate products for HK customers—balanced, convenient and
            workplace-friendly.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {choices.map((choice) => (
            <ChoiceCard
              key={choice.title}
              title={choice.title}
              imageSrc={choice.imageSrc}
            />
          ))}
        </div>

        <p
          className="mt-6 text-center text-xs text-[#2563EB]"
          style={{ fontFamily: "var(--font-instrument-sans)" }}
        >
          * Product list varies by location and partner request.
        </p>
      </div>
    </section>
  );
};

export default HealthyChoice;
