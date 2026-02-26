import Image from "next/image";
import { GradientButton } from "@/components/button/GradientButton";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white container mx-auto px-4">
      <div className="absolute inset-0">
        <Image
          src="/hero_banner.jpg"
          alt="Smart vending machine in Hong Kong"
          fill
          priority
          className="object-cover aspect-[16/9]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/40" />
      </div>

      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-10">
        <div className="max-w-2xl space-y-6 text-center sm:text-left">
          <div className="inline-flex items-center rounded-full bg-black/60 px-4 py-2 text-xs font-medium text-zinc-100 ring-1 ring-white/10 backdrop-blur">
            <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400" />
            Serving Hong Kong 24/7
          </div>

          <h1
            className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[44px] lg:text-[48px] max-w-[690px]"
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            Healthy{" "}
            <span className="relative inline-block px-1">
              <span className="relative z-10">Vending</span>
              <span className="absolute inset-0 -z-0 rounded-md bg-[#1890F2]" />
            </span>{" "}
            Across Hong Kong
            <br />
            Convenient, Clean, Cashless
          </h1>

          <p
            className="max-w-xl text-sm leading-relaxed text-zinc-200 sm:text-base md:text-lg"
            style={{ fontFamily: "var(--font-instrument-sans)" }}
          >
            Healthy Vend HK Limited installs and manages smart vending machines
            in MTR stations, offices, universities, hospitals and residential
            estates across Hong Kong so people can grab healthy snacks and
            drinks in seconds.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-start sm:items-center">
            <GradientButton variant="primary">Request a Machine</GradientButton>
            <GradientButton variant="secondary">
              See Current Locations
            </GradientButton>
          </div>
        </div>

        <div className="mt-10 w-full max-w-3xl rounded-2xl border border-white/10 bg-black/60 p-4 text-xs text-zinc-300 backdrop-blur-md sm:text-sm">
          <div className="grid gap-4 sm:grid-cols-4">
            <div className="rounded-xl bg-white/5 px-4 py-3">
              <div className="text-base font-semibold text-white">20+</div>
              <div>HK Locations Served</div>
            </div>
            <div className="rounded-xl bg-white/5 px-4 py-3">
              <div className="text-base font-semibold text-white">50+</div>
              <div>Machines Installed</div>
            </div>
            <div className="rounded-xl bg-white/5 px-4 py-3">
              <div className="text-base font-semibold text-white">
                Fast On-site
              </div>
              <div>Support Response</div>
            </div>
            <div className="rounded-xl bg-white/5 px-4 py-3">
              <div className="text-base font-semibold text-white">
                Offices &amp; Schools
              </div>
              <div>Trusted Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
