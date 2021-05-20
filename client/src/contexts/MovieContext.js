import { createContext,useState,useEffect } from "react";

 const MovieContext = createContext();

const MovieContextProvider = (props) => {
   const [movies, setMovies] = useState([]);
  
   useEffect(() => {
    fetchMovies();
    console.log("hej")
  },[]);


      const fetchMovies = async () => {
        const res = await fetch("http://localhost:3001/api/movies");
        console.log(res);
        let data = await res.json();
        const movies = data;
        setMovies(movies);
      };
  
     const values = {
     movies,
     fetchMovies,
       };
     
       return (
         <MovieContext.Provider value={values}>
           {props.children}
         </MovieContext.Provider>
       );
  };
  
  export default MovieContextProvider