import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokeImage from "../components/PokeImage";
import { fetchDetails } from "../utils/api";
import Types from "../components/Types";
import AbilitiesCard from "../components/AbilitiesCard";
import Moves from "../components/Moves";
import BaseStats from "../components/BaseStats";
import { convertToDecimal } from "../utils/utils";
import MovesList from "../components/MovesList";
import { toTitleCase } from "../utils/utils";
import { replaceDashWithSpace } from "../utils/utils";
import daisyui from "daisyui";

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
    return (
      <span className="loading loading-spinner loading-lg absolute top-[50%] left-[50%]"></span>
    );
  }

  return (
    <main className="max-w-[960px] mx-auto justify-center">
      <div className="flex flex-col gap-3 mx-2 my-2 sm:grid sm:grid-cols-2 sm:gap-3 sm:mt-5 md:mb-5">
        <div className="flex flex-col gap-3 px-3 py-3 border rounded-lg border-[#000] bg-[#EFEFEF]">
          <div className="flex flex-row gap-4">
            <PokeImage
              type={detailPage.types[0]?.type?.name}
              url={detailPage.sprites.other["official-artwork"].front_default}
              size="detail"
            />
            <div className="flex flex-col gap-2 w-full">
              <h3 className="text-[#080808] text-lg font-semibold leading-[25.20px]">
                {toTitleCase(detailPage.name)}
              </h3>
              <div className="justify-start items-start gap-1 inline-flex">
                {detailPage.types?.map((type, i) => (
                  <Types key={i} type={type.type.name} />
                ))}
              </div>
              <div className="flex flex-row gap-4 items-center">
                <p className="text-[#454545] text-sm font-normal leading-tight w-[64px]">
                  ID
                </p>
                <p className="text-[#454545] text-sm font-normal leading-tight">
                  № {detailPage.id}
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center ">
                {/* Split height into meter */}
                <p className="text-[#454545] text-sm font-normal leading-tight w-[64px]">
                  {" "}
                  Height{" "}
                </p>
                <p className="text-[#454545] text-sm font-normal leading-tight">
                  {convertToDecimal(detailPage.height)} m
                </p>
              </div>
              {/* Split weight into meter */}
              <div className="flex flex-row gap-4 items-center">
                <p className="text-[#454545] text-sm font-normal leading-tight w-[64px]">
                  {" "}
                  Weight{" "}
                </p>
                <p className="text-[#454545] text-sm font-normal leading-tight">
                  {convertToDecimal(detailPage.weight)} kg
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-base font-semibold text-gray-800 ">
              Base Stats
            </h1>
            <BaseStats detailPage={detailPage} />
          </div>
        </div>

        <div className="flex flex-col px-3 py-3 gap-3 border rounded-md border-[#000] bg-[#EFEFEF]">
          <h1 className="text-[#080808] text-base font-semibold">Abilities</h1>
          {detailPage.abilities?.map((abilities, i) => (
            <AbilitiesCard key={i} abilities={abilities} />
          ))}
        </div>
        <div className="col-span-2">
          <div className="flex flex-col px-3 py-3 gap-3 border rounded-md border-[#000] bg-[#EFEFEF]">
            <h1 className="text-[#080808] text-base font-semibold">
              Moves Lists
            </h1>

            <MovesList moves={detailPage.moves} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailPage;
