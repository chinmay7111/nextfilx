import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


const MovieCard = ({movie, addFavorite}) => {
  return (
    <>

<div className="flex flex-wrap justify-center mt-5">
  <div className="relative text-center border border-red-950 rounded-sm shadow-lg w-[12rem] hover:scale-110 transition-transform duration-600 ease-in-out transform overflow-hidden">
    {/* Movie Poster */}
    <img
      src={movie.Poster}
      alt={movie.Title}
      className="object-cover w-full h-full"
    />

    {/* Overlay Content */}
    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent text-white p-2">
      <button
       onClick={() => {
        addFavorite(movie); // Adds the movie to favorites
        alert(`"${movie.Title}" is added to Favorites`); // Alert when added
      }}
        className="text-red-500 hover:text-red-700"
      >
        <FontAwesomeIcon icon={faHeart} className="w-5 h-5 text-red-500 hover:text-red-700" />

      </button>
      <h1 className="text-sm font-bold">{movie.Title}</h1>
      <p className="text-xs">{movie.Released}</p>
    </div>
  </div>
</div>

    </>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Released: PropTypes.string.isRequired,
  }).isRequired,
  addFavorite: PropTypes.func.isRequired, // Add this prop type
};
export default MovieCard
