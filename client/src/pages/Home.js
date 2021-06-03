import { useState } from 'react';
import FilterModal from '../components/FilterModal';
import MovieBannerImage from '../components/MovieBannerImage';
import SearchComponent from '../components/SearchComponent';
import { MovieContext } from '../contexts/MovieContext';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';

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
  const movieItems = movies.map((movie) => (
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
    <>

      <div className='Home'>
        <MovieBannerImage />
        <div className='home_filter container'>
          <button onClick={() => setOpenFilter(true)} className='filter_btn'>
            <span>Filter</span>
            <div>
              <svg
                width='25'
                height='25'
                viewBox='0 0 25 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.29175 11.4584H17.7084V13.5417H7.29175V11.4584ZM4.16675 7.29169H20.8334V9.37502H4.16675V7.29169ZM10.4167 15.625H14.5834V17.7084H10.4167V15.625Z'
                  fill='white'
                />
              </svg>
            </div>
          </button>
          <SearchComponent />
        </div>
        <Container className='movie-container'>
          {movies.length > 0 && movieItems ? (
            movieItems
          ) : (
            <h3>No movies found...</h3>
          )}
        </Container>
      </div>
      <FilterModal open={openFilter} setOpen={setOpenFilter} />
   
    </>
  );
}

export default Home;
