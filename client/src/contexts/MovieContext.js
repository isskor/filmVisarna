import { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/movies")
    .then((res) => res.json())
    .then((data) => {
      setMovies(data);
    });
  }, []);

 
  const values = {
    movies,
  };

  return (
    <MovieContext.Provider value={values}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
