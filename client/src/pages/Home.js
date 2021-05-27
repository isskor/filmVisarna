import { useState } from "react";
import FilterModal from "../components/FilterModal";
import MovieBannerImage from "../components/MovieBannerImage";
import SearchComponent from "../components/SearchComponent";
import { MovieContext } from "../contexts/MovieContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";

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
        <button onClick={() => setOpenFilter(true)}>filter</button>

        <Container className='movie-container'>{movieitems}</Container>
      </div>
      <FilterModal open={openFilter} setOpen={setOpenFilter} />
      <button onClick={() => setOpenFilter(true)}>filter</button>
      <SearchComponent />
      <Container className="movie-container">
        {movies.length > 0 && movieItems ? (
          movieItems
        ) : (
          <h3>No movies found...</h3>
        )}
      </Container>
    </div>
  );
}

export default Home;
