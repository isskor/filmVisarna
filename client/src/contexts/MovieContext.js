import { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);

  const getMovieById = async (movieId) => {
    console.log(movieId);
    fetch(`http://localhost:3001/api/movies/${movieId}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetch("http://localhost:3001/api/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  const values = {
    movies,
    movie,
    getMovieById,
  };

  return (
    <MovieContext.Provider value={values}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
