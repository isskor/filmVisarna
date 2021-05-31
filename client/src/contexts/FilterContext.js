import { createContext, useState, useEffect } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import { useContext } from 'react';

export const FilterContext = createContext();

const initState = {
  rated: [],
  price: [],
  runTime: [],
  genres: [],
  language: [],
};

const FilterContextProvider = (props) => {
  const { setMovies } = useContext(MovieContext);

  const [filters, setFilters] = useState(initState);

  const handleChange = (e) => {
    let type = e.target.name;
    // remove from filters object if already exist
    if (filters[type].includes(e.target.value)) {
      return setFilters({
        ...filters,
        [type]: filters[type].filter((f) => f !== e.target.value),
      });
    }
    // add filter to specific type
    setFilters({ ...filters, [type]: [...filters[type], e.target.value] });
  };

  const filterMovies = async (data) => {
    let returnMovies = await fetch(
      'http://localhost:3001/api/filtered-movies',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    returnMovies = await returnMovies.json();
    if (returnMovies) {
      setMovies(returnMovies);
    } else {
      alert('No movies found');
    }
  };

  const resetFilters = () => {
    setFilters(initState);
  };

  const values = { filterMovies, handleChange, filters, resetFilters };

  return (
    <FilterContext.Provider value={values}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
