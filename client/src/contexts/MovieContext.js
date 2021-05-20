import { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
    console.log("hej");
  }, []);

  const fetchMovies = async () => {
    fetch("http://localhost:3001/api/movies")
      .then((res) => res.json())
      .then((data) => {
        console.log("here is data", data);
        setMovies(data);
      });
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

export default MovieContextProvider;
