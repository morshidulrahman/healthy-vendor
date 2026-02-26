import React from "react";

type OptionCardProps = {
  title: string;
  description: string;
  icon: string;
};

const options: OptionCardProps[] = [
  {
    title: "Revenue Share",
    description: "Earn from sales, best for high-traffic areas.",
    icon: "💰",
  },
  {
    title: "Fixed Rent",
    description: "Predictable monthly income for your space.",
    icon: "📄",
  },
  {
    title: "Sponsored / Branded",
    description: "For gyms, wellness brands and events.",
    icon: "📢",
  },
];

const PartnershipOptions = () => {
  return (
    <section className="bg-[#020617] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="text-center">
          <h2
            className="text-2xl font-semibold sm:text-3xl md:text-[32px]"
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            Partnership Options
          </h2>
          <p
            className="mt-2 text-sm text-[#E5E7EB] sm:text-base"
            style={{ fontFamily: "var(--font-instrument-sans)" }}
          >
            We&apos;ll recommend the model that best suits your Hong Kong
            location and traffic.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {options.map((option) => (
            <article
              key={option.title}
              className="flex flex-col gap-3 rounded-3xl bg-[#111827] px-6 py-6 shadow-[0_18px_45px_rgba(15,23,42,0.6)]"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F172A]">
                <span className="text-xl">{option.icon}</span>
              </div>
              <h3
                className="text-base font-semibold"
                style={{ fontFamily: "var(--font-instrument-sans)" }}
              >
                {option.title}
              </h3>
              <p
                className="text-sm text-[#E5E7EB]"
                style={{ fontFamily: "var(--font-instrument-sans)" }}
              >
                {option.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipOptions;
