import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { fetchData } from "../utils/api";
import { FaXmark, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  const [page, setPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=18&offset=0"
  );
  const [pagination, setPagination] = useState({ next: null, previous: null });
  const [pokemonData, setPokemonData] = useState([]);
  const [inputValue, setInputValue] = useState(searchQuery);

  const getData = async () => {
    try {
      const data = await fetchData(
        searchQuery
          ? "https://pokeapi.co/api/v2/pokemon?offset=0&limit=2024"
          : page
      );
      setPagination({ next: data.next, previous: data.previous });
      if (searchQuery) {
        const filteredData = data.results.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setPokemonData(filteredData);
      } else {
        setPokemonData(data.results);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [searchQuery, page]);

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

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ q: inputValue });
  };

  const handleClearSearch = () => {
    setInputValue("");
    setSearchParams({});
  };

  return (
    <main className="max-w-5xl mx-auto flex flex-col items-center mb-10">
      <button type="button" onClick={handleClearSearch} className="">
        <FaXmark />
      </button>
      <section className="flex justify-between max-w-[992px] w-full m-4">
        <form
          onSubmit={handleSearchSubmit}
          className="bg-[#efefef] rounded-lg border-2 border-black py-2 px-3"
        >
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search Pokémon"
            className="border-none bg-transparent focus:outline-none text-black font-medium mr-2"
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={handleClearSearch}
              className="text-black"
            >
              <FaXmark />
            </button>
          ) : (
            <button type="submit" className="text-black">
              <MdOutlineSearch size={17} />
            </button>
          )}
        </form>

        <div className="flex gap-2">
          <button
            onClick={handlePrevious}
            disabled={!pagination.previous}
            className="text-black bg-[#efefef] rounded-lg border-2 border-black p-3 transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] disabled:shadow-none disabled:translate-x-[3px] disabled:translate-y-[3px]"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            disabled={!pagination.next}
            className="text-black bg-[#efefef] rounded-lg border-2 border-black p-3 transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] disabled:translate-x-[3px] disabled:translate-y-[3px]"
          >
            <FaArrowRight />
          </button>
        </div>
      </section>
      <div className="flex flex-wrap gap-4 max-w-[992px] w-full">
        {pokemonData.map((poke, i) => (
          <Card key={i} url={poke.url} />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
