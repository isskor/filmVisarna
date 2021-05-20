import { MovieContext } from "../contexts/MovieContext";
import { useContext } from "react";

function Home() {
  const { movies } = useContext(MovieContext);

  const movieitems = movies.map((movie) => (
    <div className="movie">
      <img src={movie.poster} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
      </div>
    </div>
  ));

  return (
    <div className="Home">
      <div className="movie-container">{movies && movieitems}</div>
    </div>
  );
}
export default Home;
