import React, { useEffect, useState } from 'react';
import { FilterContext } from '../contexts/FilterContext';
import { useContext } from 'react';
import useToggle from './useToggle';

const initState = {
  rated: [],
  price: [],
  runTime: [],
  genres: [],
  language: [],
};

const FilterModal = ({ open, setOpen }) => {
  const { filterMovies } = useContext(FilterContext);
  const [genreList, setGenreList] = useState([]);
  const [filters, setFilters] = useState(initState);
  const [priceEl, priceToggle] = useToggle('price');
  const [lengthEl, lengthToggle] = useToggle('length');
  const [ratedEl, ratedToggle] = useToggle('rated');
  const [genresEl, genresToggle] = useToggle('genres');
  const [languageEl, languageToggle] = useToggle('language');

  const getGenres = (movies) => {
    const list = [];
    movies.forEach((m) => {
      return list.push(...m.genres);
    });
    console.log(list);
    const genreList = new Set(list);
    setGenreList([...genreList].sort());
  };

  useEffect(() => {
    function fetchMovies() {
      fetch('http://localhost:3001/api/movies')
        .then((res) => res.json())
        .then((data) => {
          getGenres(data);
        });
    }
    fetchMovies();
  }, []);

  console.log(filters);

  const handleChange = (e) => {
    let type = e.target.name;

    if (filters[type].includes(e.target.value)) {
      return setFilters({
        ...filters,
        [type]: filters[type].filter((f) => f !== e.target.value),
      });
    }

    setFilters({ ...filters, [type]: [...filters[type], e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    // logic

    filterMovies(filters);
  };

  return (
    <>
      {open && (
        <div className='filter_modal'>
          <div className='overlay' onClick={() => setOpen(false)}></div>
          <div className='filter_container'>
            <h3>Filter</h3>
            <form className='row filter_form'>
              <div className='filter_header' onClick={priceToggle}>
                <h5>Price</h5>
                <div>
                  <span
                    className={`caret ${priceEl ? 'toggle_open' : ''}`}
                  ></span>
                </div>
              </div>{' '}
              <ul
                className={`row filter_group ${priceEl ? 'toggle_group' : ''}`}
              >
                <li className='col-md-3'>
                  <label htmlFor='price'>120kr</label>
                  <input
                    type='checkbox'
                    name='price'
                    checked={filters.price.includes('120')}
                    onChange={handleChange}
                    value={120}
                  />
                </li>
                <li className='col-md-3'>
                  <label htmlFor='price'>140kr</label>
                  <input
                    type='checkbox'
                    name='price'
                    value={140}
                    checked={filters.price.includes('140')}
                    onChange={handleChange}
                  />
                </li>
                <li className='col-md-3'>
                  <label htmlFor='price'>160kr</label>
                  <input
                    type='checkbox'
                    name='price'
                    value={160}
                    checked={filters.price.includes('160')}
                    onChange={handleChange}
                  />
                </li>
              </ul>
            </form>
            <form className='row filter_form'>
              <div className='filter_header' onClick={lengthToggle}>
                <h5>Length</h5>
                <div>
                  <span
                    className={`caret ${lengthEl ? 'toggle_open' : ''}`}
                  ></span>
                </div>
              </div>
              <ul
                className={`row filter_group ${lengthEl ? 'toggle_group' : ''}`}
              >
                <li className='col-md-3'>
                  <label htmlFor='runTime'>less than 1h</label>
                  <input
                    type='checkbox'
                    name='runTime'
                    value={60}
                    checked={filters.runTime.includes('60')}
                    onChange={handleChange}
                  />
                </li>
                <li className='col-md-3'>
                  <label htmlFor='runTime'> less than 2h</label>
                  <input
                    type='checkbox'
                    name='runTime'
                    value={120}
                    checked={filters.runTime.includes('120')}
                    onChange={handleChange}
                  />
                </li>
                <li className='col-md-3'>
                  <label htmlFor='runTime'>less than 3h</label>
                  <input
                    type='checkbox'
                    name='runTime'
                    value={180}
                    checked={filters.runTime.includes('180')}
                    onChange={handleChange}
                  />
                </li>
              </ul>
            </form>
            <form className='row filter_form'>
              <div className='filter_header' onClick={ratedToggle}>
                <h5>Rated</h5>
                <div>
                  <span
                    className={`caret ${ratedEl ? 'toggle_open' : ''}`}
                  ></span>
                </div>
              </div>
              <ul
                className={`row filter_group ${ratedEl ? 'toggle_group' : ''}`}
              >
                <li className='col-md-3'>
                  <label htmlFor='rated'>PG</label>
                  <input
                    type='checkbox'
                    name='rated'
                    value={'PG'}
                    checked={filters.rated.includes('PG')}
                    onChange={handleChange}
                  />
                </li>
                <li className='col-md-3'>
                  <label htmlFor='rated'>PG-13</label>
                  <input
                    type='checkbox'
                    name='rated'
                    value={'PG-13'}
                    checked={filters.rated.includes('PG-13')}
                    onChange={handleChange}
                  />
                </li>
                <li className='col-md-3'>
                  <label htmlFor='rated'>Rated</label>
                  <input
                    type='checkbox'
                    name='rated'
                    value={'R'}
                    checked={filters.rated.includes('R')}
                    onChange={handleChange}
                  />
                </li>
              </ul>
            </form>
            <form className='row filter_form'>
              <div className='filter_header' onClick={genresToggle}>
                <h5>Genres</h5>
                <div>
                  <span
                    className={`caret ${genresEl ? 'toggle_open' : ''}`}
                  ></span>
                </div>
              </div>
              <ul
                className={`row filter_group ${genresEl ? 'toggle_group' : ''}`}
              >
                {genreList?.map((genre) => (
                  <li className='col-md-3' key={genre}>
                    <label htmlFor='genres'>{genre}</label>
                    <input
                      type='checkbox'
                      name='genres'
                      value={genre}
                      checked={filters.genres.includes(genre)}
                      onChange={handleChange}
                    />
                  </li>
                ))}
              </ul>
            </form>
            <form className='row filter_form'>
              <div className='filter_header' onClick={languageToggle}>
                <h5>Language</h5>
                <div>
                  <span
                    className={`caret ${languageEl ? 'toggle_open' : ''}`}
                  ></span>
                </div>
              </div>
              <ul
                className={`row filter_group ${
                  languageEl ? 'toggle_group' : ''
                }`}
              >
                <li className='col-md-3'>
                  <label htmlFor='language'>English</label>
                  <input
                    type='checkbox'
                    name='language'
                    value={'English'}
                    checked={filters.language.includes('English')}
                    onChange={handleChange}
                  />
                </li>
                <li className='col-md-3'>
                  <label htmlFor='language'>Swedish</label>
                  <input
                    type='checkbox'
                    name='language'
                    value={'Swedish'}
                    checked={filters.language.includes('Swedish')}
                    onChange={handleChange}
                  />
                </li>
                <li className='col-md-3'>
                  <label htmlFor='language'>English</label>
                  <input
                    type='checkbox'
                    name='language'
                    value={'Sign Language'}
                    checked={filters.language.includes('Sign Language')}
                    onChange={handleChange}
                  />
                </li>
              </ul>
            </form>
            <div className='row justify-content-center'>
              <div className='col-2'>
                <button onClick={handleSubmit} className='filter_btn'>
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterModal;
