import { createContext, useState, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { useContext } from "react";

const FilterContextProvider = (props) => {
  const { movies } = useContext(MovieContext);

  const arr = await movies.find({
    price: { $in: ["120", "140", "160"] },
    length: { $lte: 60, $lte: 120, $lte: 180 },
    rated: { $in: ["PG", "PG-13", "Rated"] },
    genre: {
      $in: [
        "Action",
        "Adult",
        "Animation",
        "Biography",
        "Comedy",
        "Crime",
        "Drama",
        "Family",
        "Fantasy",
        "Horror",
        "Mystery",
        "Romance",
        "Sci-fi",
        "Sport",
        "Thriller",
        "Western",
      ],
    },
  });
  const values = { arr };

  return (
    <FilterContext.Provider value={values}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
