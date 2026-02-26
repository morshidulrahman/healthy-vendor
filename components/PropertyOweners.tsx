import React from "react";
import Image from "next/image";

type StepCardProps = {
  title: string;
  description: string;
};

const StepCard = ({ title, description }: StepCardProps) => {
  return (
    <div className="flex min-w-[180px] flex-col gap-1 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 shadow-[0_10px_25px_rgba(15,23,42,0.06)] sm:min-w-[200px] sm:px-5 sm:py-4">
      <h3
        className="text-sm font-semibold text-[#111827]"
        style={{ fontFamily: "var(--font-instrument-sans)" }}
      >
        {title}
      </h3>
      <p
        className="text-xs leading-relaxed text-[#4B5563]"
        style={{ fontFamily: "var(--font-instrument-sans)" }}
      >
        {description}
      </p>
    </div>
  );
};

const steps: StepCardProps[] = [
  {
    title: "Site Visit (HK)",
    description: "We check footfall, power and best placement.",
  },
  {
    title: "Proposal",
    description: "Machine type, product mix and revenue model.",
  },
  {
    title: "Install & Launch",
    description: "Setup, cashless configuration and branding.",
  },
  {
    title: "Ongoing Operations",
    description: "Refill, maintenance and hygiene checks.",
  },
  {
    title: "Reporting",
    description: "Sales and inventory insights (optional).",
  },
];

const PropertyOweners = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div>
            <h2
              className="text-2xl font-semibold text-[#111827] sm:text-3xl md:text-[32px]"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              Zero Hassle for
              <br />
              Property Owners in Hong Kong
            </h2>
          </div>
          <div className="text-sm leading-relaxed text-[#4B5563] sm:text-base">
            <p style={{ fontFamily: "var(--font-instrument-sans)" }}>
              We curate products for HK customers—balanced, convenient and
              workplace-friendly.
            </p>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto pb-3">
          <div className="flex gap-3 sm:gap-4">
            {steps.map((step) => (
              <StepCard
                key={step.title}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <div className="relative overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(15,23,42,0.3)]">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/hero_banner.jpg"
                alt="Vending machine installed for property owners"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyOweners;
