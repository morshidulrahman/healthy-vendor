import React from "react";
import Image from "next/image";

type BenefitItem = {
  text: string;
};

const benefits: BenefitItem[] = [
  { text: "Better tenant/employee amenities." },
  { text: "No staff workload for your side." },
  { text: "Reliable restock and service within HK." },
  { text: "Regular maintenance and cleaning." },
  { text: "Data-driven product selection." },
];

const PartnerBenefits = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="relative overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(15,23,42,0.3)]">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/about.png"
                  alt="People using vending machines in Hong Kong"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-3xl bg-white px-6 py-6 shadow-[0_18px_45px_rgba(31,75,126,0.18)]">
              <h2
                className="text-lg font-semibold text-[#111827] sm:text-xl"
                style={{ fontFamily: "var(--font-fredoka)" }}
              >
                Partner Benefits
              </h2>
              <ul className="mt-4 space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit.text} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E5F3FF]">
                      <span className="text-xs text-[#1890F2]">✓</span>
                    </span>
                    <p
                      className="text-sm leading-relaxed text-[#111827]"
                      style={{ fontFamily: "var(--font-instrument-sans)" }}
                    >
                      {benefit.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBenefits;
