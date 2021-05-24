import { createContext, useState, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { useContext } from "react";

export const FilterContext = createContext();

const FilterContextProvider = (props) => {
  const { setMovies } = useContext(MovieContext);

  const filterMovies = async (data) => {
    let returnMovies = await fetch(
      "http://localhost:3001/api/filtered-movies",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    returnMovies = await returnMovies.json();
    if (returnMovies) {
      setMovies(returnMovies);
    } else {
      alert("No movies found");
    }
  };

  useEffect(() => {
    fetch("http://localhost:3001/api/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  const values = { filterMovies };

  return (
    <FilterContext.Provider value={values}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
