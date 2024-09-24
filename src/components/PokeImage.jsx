import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Configure bg-color for each pokemon types
const imageColors = {
  normal: "bg-[#A8A878]/50",
  fire: "bg-[#F08030]/50",
  water: "bg-[#6790F0]/50",
  electric: "bg-[#FCD439]/50",
  grass: "bg-[#78C84F]/50",
  ice: "bg-[#98D8D8]/50",
  fighting: "bg-[#C03128]/50",
  poison: "bg-[#9F40A0]/50",
  ground: "bg-[#E0C068]/50",
  flying: "bg-[#A890F0]/50",
  psychic: "bg-[#F85888]/50",
  bug: "bg-[#ADBA44]/50",
  rock: "bg-[#B8A039]/50",
  ghost: "bg-[#705898]/50",
  dragon: "bg-[#7038F8]/50",
  dark: "bg-[#725647]/50",
  steel: "bg-[#B8B8D0]/50",
  fairy: "bg-[#F0B6BC]/50",
};

const PokeImage = ({ type, url }) => {
  const typeClass = twMerge(
    clsx(
      "w-[98px] h-[116px] rounded-lg border border-black justify-center items-center gap-2 flex",
      imageColors[type]
    )
  );

  return (
    <>
      <div className={typeClass}>
        <img className="w-20 h-20" src={url} />
      </div>
    </>
  );
};

export default PokeImage;
