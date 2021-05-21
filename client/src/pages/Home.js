import { useState } from 'react';
import FilterModal from '../components/FilterModal';
import { MovieContext } from '../contexts/MovieContext';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
function Home() {
  const [openFilter, setOpenFilter] = useState(false);
import { Container } from 'react-bootstrap';




function Home() {
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
      </div>
      <Container className="movie-container">{movieitems}</Container>
    </div>
  );
}

export default Home;
