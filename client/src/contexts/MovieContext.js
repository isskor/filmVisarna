import { createContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);

  const getMovieById = async (movieId) => {
    fetch(`http://localhost:3001/api/movies/${movieId}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  };

  const getMoviesByKeyword = async (keyword) => {
    let movies = await fetch('http://localhost:3001/api/movies-by-keyword', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(keyword),
    });

    movies = await movies.json();
    if (movies) {
      setMovies(movies);
      return;
    }
  };

  useEffect(() => {
    fetch('http://localhost:3001/api/movies')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  const getAllMovies = async () => {
    fetch('http://localhost:3001/api/movies')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  };

  const fetchShowtimes = async (id, date) => {
    fetch(`http://localhost:3001/api/showtime?id=${id}&date=${date}`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  };
  const fetchOneShowtime = async (id) => {
    return fetch(`http://localhost:3001/api/OneShowtime?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  };
  const fetchShowtimeByDate = async (date) => {
    return fetch(`http://localhost:3001/api/showdate?date=${date}`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  };

  const values = {
    movies,
    movie,
    getMovieById,
    setMovies,
    getMoviesByKeyword,
    getAllMovies,
    fetchShowtimes,
    fetchOneShowtime,
    fetchShowtimeByDate,
  };

  return (
    <MovieContext.Provider value={values}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
