import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/api";
import Card from "../components/Card";

const FavoritePage = () => {
  const [pokemonData, setPokemonData] = useState([]);

  const getData = async () => {
    try {
      const data = await fetchData("http://localhost:3030/favorites");
      setPokemonData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="w-full p-4 md:max-w-5xl md:p-4 mx-auto flex flex-col items-center">
      <section className="flex flex-col justify-center w-full">
        <section className="max-w-[992px]">
          <h2 className="text-xl font-medium my-4">My Favorite Pokémon</h2>
        </section>

        <div className="flex flex-wrap md:grid md:grid-cols-2 lg:flex lg:flex-wrap gap-4 max-w-[992px] justify-start">
          {pokemonData.map((poke, i) => (
            <Card key={i} url={poke.url} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default FavoritePage;
