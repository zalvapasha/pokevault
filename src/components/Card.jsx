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

  const [isFavorite, toggleFavorite] = useFavoritePokemon(
    details.id,
    details.name,
    url
  );

  async function getDetails() {
    try {
      const data = await fetchDetails(url);
      setDetails(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getDetails();
  }, [url]);

  return (
    <div className="relative">
      {" "}
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
          <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-[123px] flex">
            <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex">
              <div className="self-stretch justify-between items-start inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="flex-col justify-start items-start flex">
                    <h3 className="text-[#080808] text-lg font-semibold leading-[25.20px]">
                      {toTitleCase(details.name)}
                    </h3>
                    <p className="text-[#454545] text-sm font-normal leading-tight">
                      № {details.id}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <p className="text-[#454545] italic text-[13px] font-normal leading-[18.20px]">
                  {details.moves?.length} moves
                </p>
                <div className="justify-start items-start gap-1 inline-flex">
                  {details.types?.map((type, i) => (
                    <Types key={i} type={type.type.name} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <img
        src={isFavorite ? pokeballFilled : pokeBall}
        alt="Favorite icon"
        onClick={toggleFavorite}
        className=" absolute w-8 h-8 top-4 right-4 cursor-pointer"
      />
    </div>
  );
};

export default Card;
