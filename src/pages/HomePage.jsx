import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { fetchPokemonDetails } from "../utils/api";

const HomePage = () => {
  const [page, setPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
  );
  const [pokemonData, setPokemonData] = useState([]);
  const [pagination, setPagination] = useState({ next: null, previous: null });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemonDetails(page);
      if (data) {
        console.log(data.pokemonDetails, data.next, data.previous);
        setPokemonData(data.pokemonDetails);
        setPagination({ next: data.next, previous: data.previous });
      }
    };

    fetchData();
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

  return (
    <div>
      <div className="text-3xl font-bold underline">HomePage</div>

      <div className="grid grid-cols-2 gap-4">
        <Card />
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
