export async function fetchPokemonDetails(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const pokemonURLs = data.results.map((pokemon) => pokemon.url);

    const pokemonDetails = await Promise.all(
      pokemonURLs.map(async (url) => {
        const res = await fetch(url);
        return res.json();
      })
    );

    return {
      pokemonDetails,
      next: data.next,
      previous: data.previous,
    };
  } catch (error) {
    console.error("Error fetching Pokémon details:", error);
    return null;
  }
}
