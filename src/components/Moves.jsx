import { fetchDetails } from "../utils/api";
import React, { useEffect, useState } from "react";
import Types from "./Types";

const Moves = ({ moves }) => {
  const [movesDetails, setMovesDetails] = useState(null);

  const getMovesData = async () => {
    try {
      const data = await fetchDetails(moves.move.url); // Fetch details from ability URL
      setMovesDetails(data); // Set the fetched data to state
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
      <table>
        <tbody>
          <tr>
            <td className="text-left py-1 px-2 bg-white text-black font-regular text-base border-b border-[#e0e0e0]">
              {movesDetails.name}
            </td>
            <td className="text-left py-4 px-6 bg-white text-black font-regular text-base border-b border-[#e0e0e0]">
              <Types type={movesDetails.type.name} />
            </td>
            <td className="text-left py-4 px-6 bg-white text-black font-regular text-base border-b border-[#e0e0e0]">
              {movesDetails.damage_class.name}
            </td>
            <td className="text-left py-4 px-6 bg-white text-black font-regular text-base border-b border-[#e0e0e0]">
              {movesDetails.power}
            </td>
            <td className="text-left py-4 px-6 bg-white text-black font-regular text-base border-b border-[#e0e0e0]">
              {movesDetails.accuracy}
            </td>
            <td className="text-left py-4 px-6 bg-white text-black font-regular text-base border-b border-[#e0e0e0]">
              {movesDetails.pp}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Moves;
