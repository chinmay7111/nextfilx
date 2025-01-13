import { useEffect, useState } from "react"
import NavBar from "./Components/NavBar"
import Favorites from "./Pages/Favorites"
import Home from "./Pages/Home"
import { Routes,Route } from "react-router-dom"
import Footer from "./Components/Footer"
import About from "./Pages/About"

const App = () => {
  const [favorites, setFavorites] = useState([]);

  
  useEffect(() => {
    // Load favorites from localStorage if any
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Add a movie to the favorites
  const addFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      // Check if the movie is already in the favorites list
      const isAlreadyFavorite = prevFavorites.some((fav) => fav.imdbID === movie.imdbID);
  
      if (isAlreadyFavorite) {
        alert(`"${movie.Title}" is already in your favorites!`);
        return prevFavorites; // Don't update the state if it's already added
      }
  
      // Add the new movie and save to localStorage if it's not already in the list
      const updatedFavorites = [...prevFavorites, movie];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };


  return (
    <>
    <NavBar/>
      
    <Routes>
      
      <Route path="/" element={<Home addFavorite={addFavorite} />} />
      <Route path="/favorites" element={<Favorites favorites={favorites} />} />
      <Route path="/about" element={<About />} />

    </Routes>
    <Footer/>

  
    </>
  )
}





export default App
