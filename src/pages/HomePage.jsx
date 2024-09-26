import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { fetchData } from "../utils/api";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [page, setPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
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
    <div>
      <div className="text-3xl font-bold underline">HomePage</div>

      <div className="grid grid-cols-2 gap-4">
        {pokemonData.map((poke, i) => {
          const pokeId = poke.url.split("/").filter(Boolean).pop();
          return (
            <Link key={i} to={`/detail/${pokeId}`}>
              <Card url={poke.url} />
            </Link>
          );
        })}
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevious}
          disabled={!pagination.previous}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={!pagination.next}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
