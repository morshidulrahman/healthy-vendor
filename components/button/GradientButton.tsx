import React from "react";

interface GradientButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export const GradientButton = ({
  children,
  variant = "primary",
}: GradientButtonProps) => {
  const base =
    "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-transform transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

  const primary =
    "bg-gradient-to-r from-[#1890F2] to-[#7DC5FF] px-7 py-3.5 text-white shadow-[0_4px_10px_rgba(0,103,186,0.6)] hover:translate-y-0.5 hover:shadow-[0_6px_16px_rgba(0,103,186,0.75)]";

  const secondary =
    "bg-transparent px-7 py-3.5 text-zinc-100 border border-white/20 hover:bg-white/5";

  const classes = `${base} ${
    variant === "primary" ? primary : secondary
  }`.trim();

  return <button className={classes}>{children}</button>;
};
