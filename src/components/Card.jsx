import React, { useEffect, useState } from "react";
import pokeBall from "../assets/pokemon-ball.svg";
import pokeballFilled from "../assets/pokemon-ball-filled.svg";
import Types from "./Types";
import PokeImage from "./PokeImage";
import { fetchDetails } from "../utils/api";
import { useFavoritePokemon } from "../hooks/useFavoritePokemon";
import { Link } from "react-router-dom";
import { toTitleCase } from "../utils/utils";

const Card = ({ url }) => {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, toggleFavorite] = useFavoritePokemon(
    details.id,
    details.name,
    url
  );

  async function getDetails() {
    try {
      setIsLoading(true);
      const data = await fetchDetails(url);
      setDetails(data);

      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getDetails();
  }, [url]);

  return isLoading ? (
    <div className="flex w-full flex-col gap-4">
      <div className="skeleton h-3 w-20 bg-[#b0b0b0]"></div>
      <div className="skeleton h-2 w-full bg-[#b0b0b0]"></div>
      <div className="skeleton h-2 w-full bg-[#b0b0b0]"></div>
    </div>
  ) : (
    <div className="relative">
      <Link
        to={`/detail/${details.id}`}
        className="w-80 h-[154px] p-4 bg-[#efefef] rounded-2xl border-l-2 border-r-4 border-t-2 border-b-4 border-black justify-start items-start gap-3 inline-flex"
      >
        {details.sprites && details.types && (
          <PokeImage
            type={details.types[0]?.type?.name}
            url={details.sprites.other["official-artwork"].front_default}
            size="default"
          />
        )}
        <div className="grow shrink basis-0 h-[116px] flex-col justify-start items-start inline-flex">
          <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start flex">
            <div className="self-stretch justify-start items-start flex flex-col">
              <div className="flex-col justify-start items-start flex">
                <h3 className="text-[#080808] text-base lg:text-lg font-semibold leading-[25.20px]">
                  {toTitleCase(details.name)}
                </h3>
                <p className="text-[#454545] text-sm font-normal leading-tight">
                  № {details.id}
                </p>
              </div>

              {/* Add space here */}
              <div className="flex-col justify-start items-start mt-2">
                <p className="text-[#454545] italic text-[13px] font-normal leading-[18.20px]">
                  {details.moves?.length} moves
                </p>
              </div>

              <div className="mt-2 flex justify-start items-start gap-1">
                {details.types?.map((type, i) => (
                  <Types key={i} type={type.type.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
      <img
        src={isFavorite ? pokeballFilled : pokeBall}
        alt="Favorite icon"
        onClick={toggleFavorite}
        className="absolute w-8 h-8 top-4 right-4 cursor-pointer"
      />
    </div>
  );
};

export default Card;
