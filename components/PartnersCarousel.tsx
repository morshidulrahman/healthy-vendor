"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { GradientButton } from "@/components/button/GradientButton";

import "swiper/css";
import "swiper/css/pagination";

type Testimonial = {
  name: string;
  role: string;
  location: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Property Manager",
    role: "Property Manager",
    location: "HK Island",
    quote:
      "Healthy Vend HK keeps our tenants happy with reliable machines and healthy choices. Service is responsive and hassle-free for our team.",
  },
  {
    name: "Office Admin",
    role: "Office Admin",
    location: "Kowloon",
    quote:
      "Refills are always on time and support is easy to reach. Our staff love the mix of snacks and drinks available in the office.",
  },
  {
    name: "Building Owner",
    role: "Building Owner",
    location: "New Territories",
    quote:
      "The machines fit perfectly into our lobby design and generate additional revenue without adding workload to our team.",
  },
];

const PartnersCarousel = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="text-center">
          <h2
            className="text-2xl font-semibold text-[#111827] sm:text-3xl md:text-[32px]"
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            What Partners Say
          </h2>
        </div>

        <div className="mt-8">
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-10"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name}>
                <article className="h-full rounded-3xl bg-white px-6 py-6 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5F3FF] text-sm font-semibold text-[#111827]">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p
                        className="text-sm font-semibold text-[#111827]"
                        style={{ fontFamily: "var(--font-instrument-sans)" }}
                      >
                        {testimonial.role}
                      </p>
                      <p
                        className="text-xs text-[#6B7280]"
                        style={{ fontFamily: "var(--font-instrument-sans)" }}
                      >
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-1 text-[#FACC15]">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>

                  <p
                    className="mt-3 text-sm leading-relaxed text-[#4B5563]"
                    style={{ fontFamily: "var(--font-instrument-sans)" }}
                  >
                    “{testimonial.quote}”
                  </p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-2 flex justify-center">
          <GradientButton variant="primary">View More Review</GradientButton>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;

