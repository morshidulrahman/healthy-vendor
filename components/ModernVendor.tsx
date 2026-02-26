import React from "react";
import Image from "next/image";
import { GradientButton } from "@/components/button/GradientButton";

type FeatureCardProps = {
  title: string;
  description: string;
  className?: string;
};

const FeatureCard = ({ title, description, className }: FeatureCardProps) => {
  return (
    <div
      className={`flex items-start gap-3 rounded-2xl bg-white px-5 py-4 shadow-[0_12px_35px_rgba(31,75,126,0.12)] ${className ?? ""}`}
    >
      <div className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#E5F3FF]">
        <span className="text-xs text-[#1890F2]">✓</span>
      </div>
      <div>
        <h3
          className="text-sm font-semibold text-[#111827]"
          style={{ fontFamily: "var(--font-instrument-sans)" }}
        >
          {title}
        </h3>
        <p
          className="mt-1 text-xs leading-relaxed text-[#4B5563]"
          style={{ fontFamily: "var(--font-instrument-sans)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Cashless Ready",
    description: "Octopus, credit card and QR code support.",
  },
  {
    title: "Smart Monitoring",
    description: "Real-time inventory tracking and refill alerts.",
  },
  {
    title: "Cooling & Ambient",
    description: "Flexible temperature zones for beverages and snacks.",
  },
  {
    title: "Energy Efficient",
    description: "Low power consumption and secure build.",
  },
  {
    title: "HK Compliance",
    description: "Meets local safety and hygiene standards.",
  },
];

const ModernVendor = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:flex lg:items-center lg:gap-12 lg:px-10 lg:py-20">
        <div className="w-full space-y-6 lg:w-1/2">
          <div className="space-y-3">
            <h2
              className="text-2xl font-semibold text-[#111827] sm:text-3xl md:text-[32px]"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              Modern Vending Machines Built for Hong Kong
            </h2>
            <p
              className="text-sm leading-relaxed text-[#4B5563] sm:text-base"
              style={{ fontFamily: "var(--font-instrument-sans)" }}
            >
              Modern vending machines built for Hong Kong are designed to match
              the city&apos;s fast pace, compact spaces and tech-savvy
              lifestyle. They feature sleek designs, cashless payments and smart
              inventory systems to keep products fresh and available around the
              clock.
            </p>
          </div>

          <div className="rounded-3xl bg-[#F5FAFF] p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  className={
                    index === features.length - 1 ? "sm:col-span-2" : ""
                  }
                />
              ))}
            </div>
          </div>

          <div className="pt-2">
            <GradientButton variant="primary">Get a Proposal</GradientButton>
          </div>
        </div>

        <div className="mt-10 w-full lg:mt-0 lg:w-1/2">
          <div className="relative overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(15,23,42,0.35)]">
            <div className="relative aspect-[4/5] sm:aspect-[4/3]">
              <Image
                src="/hero_banner.jpg"
                alt="Modern vending machine in Hong Kong"
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

export default ModernVendor;
