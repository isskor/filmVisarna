import { MovieContext } from "../contexts/MovieContext";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailPage() {
  const { movie, getMovieById } = useContext(MovieContext);
  const history = useParams();
  console.log(history);

  useEffect(() => {
    getMovieById(history.id);
  }, []);

  return (
    <div>
      {movie && (
        <>
          <div className="trailer"></div>
          <div className="info">
            <div className="cover"></div>
            <div className="mainInfo">
              <div className="title"> {movie.title} </div>

              <div className="grayText"> Directors </div>
              <div className="director"> {movie.director}</div>

              <div className="grayText"> Cast </div>
              <div className="whiteText">{movie.actors}</div>

              <div className="grayText"> Plot </div>
              <div className="whiteText">{movie.plot}</div>
            </div>
            <div className="sideInfo">
              <div className="grayText"> Release Date </div>
              <div className="whiteText">Release Date</div>

              <div className="whiteText">Genre</div>

              <div className="whiteText">Tags</div>

              <div className="whiteText">Length</div>

              <div className="whiteText">Language</div>
            </div>
          </div>
          <div className="booking">
            <div className="showTimes"> Show times </div>
          </div>{" "}
        </>
      )}
    </div>
  );
}
export default DetailPage;
