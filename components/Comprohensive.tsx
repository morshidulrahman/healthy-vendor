import React from "react";

const items = [
  {
    icon: "📋",
    text: "Comprehensive HK-wide placement and management, covering installation, refills, and regular maintenance. Routine maintenance included.",
  },
  {
    icon: "🌡️",
    text: "Hygienic, temperature-controlled machines ensure safe, consistent, high-quality production every time.",
  },
  {
    icon: "💳",
    text: "Cashless payments make transactions faster and more convenient for both customers and businesses, with options like Octopus, debit and credit cards.",
  },
];

const Comprohensive = () => {
  return (
    <section className="bg-[#E5F3FF]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.text}
              className="flex flex-col gap-4 rounded-3xl bg-white px-6 py-8 shadow-[0_18px_45px_rgba(31,75,126,0.15)]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5F3FF] text-2xl">
                <span>{item.icon}</span>
              </div>
              <p
                className="text-sm leading-relaxed text-[#111827]"
                style={{ fontFamily: "var(--font-instrument-sans)" }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comprohensive;
