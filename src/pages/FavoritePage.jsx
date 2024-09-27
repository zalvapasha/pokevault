import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/api";
import Card from "../components/Card";

const FavoritePage = () => {
  const [pokemonData, setPokemonData] = useState([]);

  const getData = async () => {
    try {
      const data = await fetchData(
        "https://positive-sphenoid-top.glitch.me/favorites"
      );
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
          <h2 className="text-black text-xl font-medium my-4 text-center">
            My Favorite Pokémon
          </h2>
        </section>

        <div className="flex flex-wrap gap-4 max-w-[992px] justify-center">
          {pokemonData.length > 0 ? (
            pokemonData.map((poke, i) => <Card key={i} url={poke.url} />)
          ) : (
            <div className="w-full flex flex-col items-center p-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8xhiGV3wnhXkyosM74c4rL5GiGbtUzdM49MH8ktbnXQDpVwnXYs7yiM9rBWWJYTKak4k&usqp=CAU" />
              <h2 className="text-black font-bold">
                You don't have any favorite Pokémon.
              </h2>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default FavoritePage;
