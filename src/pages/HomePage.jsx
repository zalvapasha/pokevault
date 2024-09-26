import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { fetchData } from "../utils/api";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [page, setPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=18&offset=0"
  );
  const [pagination, setPagination] = useState({ next: null, previous: null });
  const [pokemonData, setPokemonData] = useState([]);

  const getData = async () => {
    try {
      const data = await fetchData(page);
      setPokemonData(data.results);
      setPagination({ next: data.next, previous: data.previous });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  const handleNext = () => {
    if (pagination.next) {
      setPage(pagination.next);
    }
  };

  const handlePrevious = () => {
    if (pagination.previous) {
      setPage(pagination.previous);
    }
  };

  // const getMovesData = async () => {
  //   try {
  //     const data = await fetchData("https://pokeapi.co/api/v2/move/");
  //     console.log(data, "ini data");
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   getMovesData();
  // });

  return (
    <main className="max-w-5xl mx-auto flex flex-col items-center mb-10">
      <section className="flex justify-between max-w-[992px]  w-full mb-4">
        <div className="flex gap-2 mt-4">
          <button
            onClick={handlePrevious}
            disabled={!pagination.previous}
            className="bg-[#efefef] rounded-lg border-l-2 border-r-2 border-t-2 border-b-2 border-black p-3 transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] disabled:shadow-none disabled:translate-x-[3px] disabled:translate-y-[3px]"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            disabled={!pagination.next}
            className="bg-[#efefef] rounded-lg border-l-2 border-r-2 border-t-2 border-b-2 border-black p-3 transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] disabled:translate-x-[3px] disabled:translate-y-[3px]"
          >
            <FaArrowRight />
          </button>
        </div>
      </section>
      <div className="flex flex-wrap gap-4 max-w-[992px]">
        {pokemonData.map((poke, i) => {
          // const pokeId = poke.url.split("/").filter(Boolean).pop();
          return (
            // <Link key={i} to={`/detail/${pokeId}`}>
            <Card url={poke.url} />
            /* </Link> */
          );
        })}
      </div>
    </main>
  );
};

export default HomePage;
