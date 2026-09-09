"use client";

import { ArrowRight } from "lucide-react";

interface EditionCtaButtonProps {
  editionKey: "cloud" | "managed" | "enterprise";
  label: string;
  isPopular?: boolean;
}

export default function EditionCtaButton({ editionKey, label, isPopular }: EditionCtaButtonProps) {
  const handleClick = () => {
    // Dispatch custom event to select edition in the demo form
    window.dispatchEvent(new CustomEvent("somap-select-edition", { detail: editionKey }));
    const formSection = document.getElementById("demonstracao");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
        isPopular
          ? "bg-teal hover:bg-teal-light text-white shadow-md hover:shadow-lg"
          : "bg-white hover:bg-bg-alt border border-navy/20 text-navy hover:border-teal hover:text-teal"
      }`}
    >
      <span>{label}</span>
      <ArrowRight className="w-4 h-4" />
    </button>
  );
}
