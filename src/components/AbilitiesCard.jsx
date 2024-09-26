import { fetchDetails } from "../utils/api";
import React, { useEffect, useState } from "react";
import { toTitleCase } from "../utils/utils";
import { replaceDashWithSpace } from "../utils/utils";

const AbilitiesCard = ({ abilities }) => {
  const [abilityDetails, setAbilityDetails] = useState(null);

  const getAbilityData = async () => {
    try {
      const data = await fetchDetails(abilities.ability.url); // Fetch details from ability URL
      setAbilityDetails(data); // Set the fetched data to state
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAbilityData();
  }, [abilities]);

  if (!abilityDetails) {
    return <p>Loading ability details...</p>;
  }

  const abilityDescription =
    abilityDetails.effect_entries?.find(
      (e) => e.language.name === "en" // Get the effect entry in English
    )?.effect || "Effect information not available";

  return (
    <>
      <div className="flex flex-col gap-1">
        <p className="text-[#080808] text-base font-semibold font-['DM Sans'] leading-snug">
          {toTitleCase(replaceDashWithSpace(abilities.ability.name))}
        </p>
        <p className="text-[#454545] text-sm font-normal font-['DM Sans'] leading-tight">
          {replaceDashWithSpace(abilityDescription)}
        </p>
      </div>
    </>
  );
};

export default AbilitiesCard;
