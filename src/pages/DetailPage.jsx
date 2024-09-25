import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokeImage from "../components/PokeImage";
import { fetchDetails } from "../utils/api";
import Types from "../components/Types";
import AbilitiesCard from "../components/AbilitiesCard";
import Moves from "../components/Moves";
import BaseStats from "../components/BaseStats";

const DetailPage = ({ details }) => {
  const { id } = useParams(); // Get the ID from the URL
  const [detailPage, setDetailPage] = useState(null);

  const getData = async () => {
    try {
      const data = await fetchDetails(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setDetailPage(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  if (!detailPage) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className="text-[#080808] text-3xl font-semibold">
        {detailPage.name}
      </h1>
      <PokeImage
        type={detailPage.types[0]?.type?.name}
        url={detailPage.sprites.other["official-artwork"].front_default}
      />
      <h3 className="text-[#080808] text-lg font-semibold leading-[25.20px]">
        {detailPage.name}
      </h3>
      <p className="text-[#454545] text-sm font-normal leading-tight">
        № {detailPage.id}
      </p>
      <div className="justify-start items-start gap-1 inline-flex">
        {detailPage.types?.map((type, i) => (
          <Types key={i} type={type.type.name} />
        ))}
      </div>
      {/* Split height into meter */}
      <p className="text-[#454545] text-sm font-normal leading-tight">
        {detailPage.height}
      </p>
      {/* Split weight into meter */}
      <p className="text-[#454545] text-sm font-normal leading-tight">
        {detailPage.weight}
      </p>

      <h1>Abilities</h1>
      {detailPage.abilities?.map((abilities, i) => (
        <AbilitiesCard key={i} abilities={abilities} />
      ))}

      <h1>Moves Lists</h1>
      {detailPage.moves?.map((moves, list) => (
        <Moves key={list} moves={moves} />
      ))}

      <h1>Base Stats</h1>
      <BaseStats detailPage={detailPage} />
    </>
  );
};

export default DetailPage;
