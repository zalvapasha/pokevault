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
    <main className="w-full p-4 md:max-w-5xl md:p-4 mx-auto flex flex-col items-center mb-10">
      <section className="flex flex-col items-center lg:items-start">
        {/* <button type="button" onClick={handleClearSearch} className="">
          <FaXmark />
        </button> */}
        <section className="flex flex-row justify-between w-full items-center py-4">
          <form
            onSubmit={handleSearchSubmit}
            className="bg-[#efefef] rounded-lg border-2 border-black h-max px-3 py-2"
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
        <div className="flex flex-wrap w-full md:grid md:grid-cols-2 lg:flex lg:flex-wrap gap-4 max-w-[992px] justify-center">
          {pokemonData.map((poke, i) => {
            // const pokeId = poke.url.split("/").filter(Boolean).pop();
            return (
              // <Link key={i} to={`/detail/${pokeId}`}>
              <Card url={poke.url} />
              /* </Link> */
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
