import { MovieContext } from "../contexts/MovieContext";
import { useContext } from "react";

function Home() {
  // const { movies } = useContext(MovieContext);

  // const movieitems = movies.map(movie =>

  //   <div className="movie">
  //     <img src={movie.Poster} alt={movie.Title} />
  //     <div className="movie-info">
  //       <h3>{movie.Title}</h3>
  //       <span>{movie.Metascore}</span>
  //     </div>
  //   </div>
  // );

  return (
    <div className="Home">

      <div className="movie-container">
        {/* {movieitems} */}
      </div>
    </div>
  );

}
export default Home;
