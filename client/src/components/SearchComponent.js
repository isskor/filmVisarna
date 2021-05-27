import React, { useContext, useState } from 'react';
import { MovieContext } from '../contexts/MovieContext';

const SearchComponent = () => {
  const { getMoviesByKeyword, getAllMovies } = useContext(MovieContext);
  const [keyword, setKeyword] = useState('');

  const handleInput = (e) => {
    setKeyword(e.target.value);
  };

  const findMovies = (e) => {
    e.preventDefault();
    let keyWordToSend = { keyword: keyword };
    console.log('keyWordToSend', keyWordToSend);
    getMoviesByKeyword(keyWordToSend);
    setKeyword('');
  };

  const resetMovies = () => {
    getAllMovies();
    setKeyword('');
  };
  return (
    <div className='searchComponent'>
      <form onSubmit={findMovies}>
        <input
          placeholder='Search for a movie'
          onChange={handleInput}
          value={keyword}
          type='text'
        />
        <div>
          <button type='submit'>Search movies</button>
          <button onClick={() => resetMovies()} className='resetButton'>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchComponent;
