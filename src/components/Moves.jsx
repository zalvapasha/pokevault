import { fetchDetails } from "../utils/api";
import React, { useEffect, useState } from "react";
import Types from "./Types";
import { toTitleCase } from "../utils/utils";
import { replaceDashWithSpace } from "../utils/utils";
import { nullMovesData } from "../utils/utils";

const Moves = ({ moves }) => {
  const [movesDetails, setMovesDetails] = useState(null);

  const getMovesData = async () => {
    try {
      const data = await fetchDetails(moves.move.url); // Fetch details from ability URL
      setMovesDetails(data); // Set the fetched data to state

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovesData();
  }, [moves]);

  if (!movesDetails) {
    return <p>Loading ability details...</p>;
  }

  return (
    <>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
          {toTitleCase(replaceDashWithSpace(movesDetails.name))}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
          <Types type={movesDetails.type.name} />
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
          {toTitleCase(replaceDashWithSpace(movesDetails.damage_class.name))}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
          {nullMovesData(movesDetails.power)}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
          {nullMovesData(movesDetails.accuracy)}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
          {movesDetails.pp}
        </td>
      </tr>
    </>
  );
};

export default Moves;
