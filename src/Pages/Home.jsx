import { useEffect, useState } from "react"
import MovieCard from "../Components/MovieCard"
import movieData from '../../Films.json';
import axios from "axios";
import PropTypes from "prop-types";



const Home = ({addFavorite}) => {
  console.log(movieData)
    
    const [searchMovie , setSearchMovie]=useState("")

    const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetching movie data
    axios
      .get('/Films.json') 
      .then(response => {
        setMovies(response.data.movies);
        console.log(response.data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

    // const movies =[{ id:1 ,title:"Avatar",release_date:"18 Dec 2009" },
    //                 { id:2 ,title:"300",release_date:"18 Dec 2007" },
    //                 { id:3 ,title:"Avenger",release_date:"09 Mar 2007" }

    // ]

    const handelChange =(e)=>{
        setSearchMovie(e.target.value)
        

    }

    const handelSearch =(e)=>{
        e.preventDefault();
        setSearchMovie(" ")
     
    }
  return (
    <>
      <div className="text-center pt-2">

        <form onSubmit={handelSearch}>

            <input type="search" onChange={handelChange}
            placeholder="Search..."
            value={searchMovie}
            className="border focus:outline-none border-black rounded-sm px-2"
            name=""
             />

             <button className="bg-red-500 text-white rounded-sm px-2 ms-2"
                type="submit">Search</button>
        </form>

        <div className="flex gap-4 justify-center flex-wrap">
            {
                movies.map((item)=> item.Title.toLowerCase().startsWith(searchMovie) && <MovieCard movie={item} 
                addFavorite={addFavorite}  key={item.Released}/>)
            }
        </div>
      </div>
    </>
  )
}

Home.propTypes = {
  addFavorite: PropTypes.func.isRequired, // Validate the 'addFavorite' function
};
export default Home
