import { useState } from 'react';
import FilterModal from '../components/FilterModal';
import { MovieContext } from '../contexts/MovieContext';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
function Home() {
  const [openFilter, setOpenFilter] = useState(false);

  const history = useHistory();
  const handleClick = (movieId) => {
    if (movieId === undefined) {
      history.push(`/`);
    } else {
      history.push(`/movies/${movieId}`);
    }
  };
  const { movies } = useContext(MovieContext);

  const movieitems = movies.map((movie) => (
    <div
      key={movie._id}
      onClick={() => handleClick(movie._id)}
      className='movie'
    >
      <img src={movie.poster} alt={movie.title} />
      <div className='movie-info'>
        <h3>{movie.title}</h3>
      </div>
    </div>
  ));

  return (
    <div className='Home'>
      <FilterModal open={openFilter} setOpen={setOpenFilter} />
      <button onClick={() => setOpenFilter(true)}>filter</button>
      <div className='movie-container'>{movieitems}</div>
      <div className='row'>
        <div className='col-lg-6'>hello</div>
        <div className='col-lg-6'>hello2</div>
      </div>
    </div>
  );
}

export default Home;
