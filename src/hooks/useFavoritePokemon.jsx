import { useEffect, useState } from "react";
import { toast, Bounce } from "react-toastify";
import Swal from "sweetalert2";

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
        const result = await Swal.fire({
          title: "Are you sure?",
          text: `You are about to remove ${name} from favorites!`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Yes, remove it!",
        });

        if (result.isConfirmed) {
          await fetch(
            `https://positive-sphenoid-top.glitch.me/favorites/${id}`,
            {
              method: "DELETE",
            }
          );
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
          setIsFavorite(false);
        }
      } else {
        await fetch("https://positive-sphenoid-top.glitch.me/favorites", {
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
        setIsFavorite(true);
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
      toast.error("Failed to toggle favorite!");
    }
  }

  return [isFavorite, toggleFavorite];
};
