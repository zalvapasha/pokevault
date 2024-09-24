import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Configure colors for each pokemon types
const typeColors = {
  normal: "bg-[#A8A878] text-white",
  fire: "bg-[#F08030] text-white",
  water: "bg-[#6790F0] text-white",
  electric: "bg-[#FCD439] text-white",
  grass: "bg-[#78C84F] text-white",
  ice: "bg-[#98D8D8] text-white",
  fighting: "bg-[#C03128] text-white",
  poison: "bg-[#9F40A0] text-white",
  ground: "bg-[#E0C068] text-white",
  flying: "bg-[#A890F0] text-white",
  psychic: "bg-[#F85888] text-white",
  bug: "bg-[#ADBA44] text-white",
  rock: "bg-[#B8A039] text-white",
  ghost: "bg-[#705898] text-white",
  dragon: "bg-[#7038F8] text-white",
  dark: "bg-[#725647] text-white",
  steel: "bg-[#B8B8D0] text-white",
  fairy: "bg-[#F0B6BC] text-white",
};

// Declare pokemon types tag
const Types = ({ type }) => {
  const typeClass = twMerge(
    clsx(
      "px-2 py-1 rounded border border-black/20 font-semibold text-xs w-max",
      typeColors[type.toLowerCase()]
    )
  );

  return <span className={typeClass}>{type.toUpperCase()}</span>;
};

export default Types;
