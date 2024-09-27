import { useEffect, useState } from "react";
import { toast, Bounce } from "react-toastify"; // Import toast

export const useFavoritePokemon = (id, name, url) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const checkIfFavorite = async () => {
    try {
      const response = await fetch(`http://localhost:3030/favorites`);
      const datas = await response.json();
      const favorite = datas.find((data) => Number(data.id) === id);
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
        toast.error(`${name} removed from favorites!`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        await fetch("http://localhost:3030/favorites", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: String(id), name: name, url: url }),
        });
        toast.success(`${name} added to favorites!`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Error toggling favorite:", error);
      toast.error("Failed to toggle favorite!");
    }
  }

  return [isFavorite, toggleFavorite];
};
