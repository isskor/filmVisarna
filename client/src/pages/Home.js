import { useState } from 'react';
import FilterModal from '../components/FilterModal';
import { MovieContext } from "../contexts/MovieContext";
import { useContext } from "react";
function Home() {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div>
      <FilterModal open={openFilter} setOpen={setOpenFilter} />
      <button onClick={() => setOpenFilter(true)}>filter</button>
      <h1>This is home</h1>
      <div className='row'>
        <div className='col-lg-6'>hello</div>
        <div className='col-lg-6'>hello2</div>
  const { movies } = useContext(MovieContext);

  const movieitems = movies.map((movie) => (
    <div key={movie._id} 
    className="movie">
      <img src={movie.poster} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
      </div>
    </div>
  ));

  return (
    <div className="Home">
      <div className="movie-container">{movieitems}</div>
    </div>
  );
}
export default Home;
