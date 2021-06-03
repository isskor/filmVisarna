import { MovieContext } from "../contexts/MovieContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowTimes from "../components/ShowTimes";
import Calendar from "react-calendar";

function DetailPage() {
  const { movie, getMovieById } = useContext(MovieContext);
  const [showTimes, setShowTimes] = useState([]);
  const [date, SetDate] = useState(new Date());
  const history = useParams();
  console.log(history);
  console.log(date);
  useEffect(() => {
    getMovieById(history.id);
    fetchShowtimes(history.id, date);
  }, [date, history.id]);

  const fetchShowtimes = async (id, date) => {
    fetch(
      `http://localhost:3001/api/showtime?id=${id}&date=${date.toDateString()}`
    )
      .then((res) => res.json())
      .then((data) => {
        setShowTimes(data);
      });
  };

  const onChange = (date) => {
    SetDate(date);
    fetchShowtimes(history.id, date);
  };

  return (
    <div>
      {movie && (
        <>
          <div className="trailer">
            <iframe
              title="Trailer"
              src={
                movie.trailer +
                '?frameborder="0"' +
                '?controls="0"' +
                '?rel="0"'
              }
              allowFullScreen={true}
            ></iframe>
          </div>
          <div className="info">
            <div className="cover">
              <img src={movie.poster} alt={movie.title} />
            </div>
            <div className="mainInfo">
              <h2 className="title"> {movie.title} </h2>

              <div className="grayText"> Directors </div>
              <div className="whiteText"> {movie.director}</div>

              <div className="grayText"> Cast </div>
              <div className="whiteText">{movie.actors}</div>

              <div className="grayText"> Plot </div>
              <div className="whiteText">{movie.plot}</div>
            </div>
            <div className="sideInfo">
              <div className="grayText"> Genres </div>
              <div className="genres">
                {movie.genres.map((g, i) =>
                  i !== movie.genres.length - 1 ? `${g}, ` : `${g}`
                )}
              </div>

              <div className="grayText"> Age Rating </div>
              <div className="whiteText">{movie.rated}</div>

              <div className="grayText"> Length </div>
              <div className="whiteText">{movie.runTime} min </div>

              <div className="grayText"> Language </div>
              <div className="whiteText">{movie.language}</div>
            </div>
          </div>
          <div className="booking container mx-auto">
            <Calendar
              className="mx-auto py-5"
              onChange={onChange}
              value={date}
            />
            <div className="showTimes row"> Show times </div>
            <ShowTimes showTimes={showTimes} />
          </div>
        </>
      )}
    </div>
  );
}
export default DetailPage;
