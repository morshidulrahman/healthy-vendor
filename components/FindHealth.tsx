import React from "react";
import Image from "next/image";

type LocationCardProps = {
  title: string;
  description: string;
  className?: string;
};

const LocationCard = ({ title, description, className }: LocationCardProps) => {
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_18px_45px_rgba(31,75,126,0.15)] ${className ?? ""}`}
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src="/about.png"
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="px-5 py-4">
        <h3
          className="text-sm font-semibold text-[#111827] sm:text-base"
          style={{ fontFamily: "var(--font-instrument-sans)" }}
        >
          {title}
        </h3>
        <p
          className="mt-1 text-xs leading-relaxed text-[#4B5563] sm:text-sm"
          style={{ fontFamily: "var(--font-instrument-sans)" }}
        >
          {description}
        </p>
      </div>
    </article>
  );
};

const locations = [
  {
    title: "MTR & Transport Hubs",
    description: "Near exits and concourse areas for commuters.",
  },
  {
    title: "Office Buildings",
    description: "Central, Quarry Bay, Kwun Tong business hubs.",
  },
  {
    title: "Universities & Schools",
    description: "Fueling students on campuses across Hong Kong.",
  },
  {
    title: "Hospitals & Clinics",
    description: "24/7 access for staff and visitors.",
  },
  {
    title: "Residential Estates",
    description: "Clubhouses and lobbies for residents.",
  },
];

const FindHealth = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div>
            <h2
              className="text-2xl font-semibold text-[#111827] sm:text-3xl md:text-[32px]"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              Find Healthy
              <br />
              Vend Near You in Hong Kong
            </h2>
          </div>
          <div className="mt-3 text-sm leading-relaxed text-[#4B5563] sm:text-base">
            <p style={{ fontFamily: "var(--font-instrument-sans)" }}>
              We place machines in high-footfall HK areas for maximum
              convenience—commuter hubs, business districts, campuses and
              community facilities.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {locations.map((location, index) => {
            const spanClass = index < 3 ? "lg:col-span-2" : "lg:col-span-3";

            return (
              <LocationCard
                key={location.title}
                title={location.title}
                description={location.description}
                className={spanClass}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FindHealth;
