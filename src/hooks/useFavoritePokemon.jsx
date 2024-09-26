import { useEffect, useState } from "react";

export const useFavoritePokemon = (id, name, url) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const checkIfFavorite = async () => {
    try {
      const response = await fetch(`http://localhost:3030/favorites`);
      const datas = await response.json();
      const favorite = datas.find((data) => Number(data.id) == id);
      setIsFavorite(!!favorite);
    } catch (error) {
      console.error("Error checking favorite status:", error);
    }
  };

  useEffect(() => {
    checkIfFavorite();
  }, [id]);

  async function toggleFavorite() {
    try {
      if (isFavorite) {
        await fetch(`http://localhost:3030/favorites/${id}`, {
          method: "DELETE",
        });
      } else {
        await fetch("http://localhost:3030/favorites", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: String(id), name: name, url: url }),
        });
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  }

  return [isFavorite, toggleFavorite];
};
