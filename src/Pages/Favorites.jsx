import { useState } from "react";
import MovieCard from "../Components/MovieCard"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Favorites = () => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Delete movie from favorites
  const deleteFavorite = (movieID) => {
    setFavorites((prevFavorites) => {
      // Filter out the movie with the matching ID
      const updatedFavorites = prevFavorites.filter((movie) => movie.imdbID !== movieID);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Update localStorage
      return updatedFavorites;
    });
  };

  return (
    <div className="favorites-container">
      <div className="flex flex-wrap justify-center gap-4">
        {favorites.map((movie) => (
          <div key={movie.imdbID} className="relative">
            <MovieCard movie={movie} />
            {/* Add a delete button */}
            <button
              onClick={() => deleteFavorite(movie.imdbID)}
              className="absolute top-6 right-0 bg-white text-white p-1 rounded-lg"
            >
              <FontAwesomeIcon icon={faTrash} className="w-5 h-5 text-black hover:text-red-500" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
