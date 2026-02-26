"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Locations", href: "#" },
  { label: "Machines", href: "#" },
  { label: "Products", href: "#" },
  { label: "Partnerships", href: "#" },
  { label: "How It Works", href: "#" },
  { label: "About", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link href="#" className="flex items-center gap-2">
            <Image
              src="/Union.png"
              alt="Healthy Vend HK logo"
              width={32}
              height={32}
              priority
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-zinc-100 sm:text-base">
                Healthy
              </div>
              <div className="text-sm font-semibold text-zinc-100 sm:text-base">
                Vend HK
              </div>
            </div>
          </Link>
        </div>

        <div className="hidden flex-1 items-center justify-between md:flex">
          <div className="ml-10 flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-zinc-200 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="ml-6">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#1890F2] to-[#7DC5FF] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_10px_rgba(0,103,186,0.6)] transition-transform transition-shadow hover:translate-y-0.5 hover:shadow-[0_6px_16px_rgba(0,103,186,0.75)]"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex items-center justify-center rounded-md p-2 text-zinc-200 hover:bg-zinc-800 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-5 bg-zinc-200" />
          <span className="mt-1 block h-0.5 w-5 bg-zinc-200" />
          <span className="mt-1 block h-0.5 w-5 bg-zinc-200" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-zinc-800 bg-black md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-zinc-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#"
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#1890F2] to-[#7DC5FF] px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_10px_rgba(0,103,186,0.6)]"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
