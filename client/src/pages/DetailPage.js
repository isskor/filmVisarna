import { MovieContext } from '../contexts/MovieContext';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShowTimes from '../components/ShowTimes';

function DetailPage() {
  const { movie, getMovieById } = useContext(MovieContext);
  const [showTimes, setShowTimes] = useState([]);
  const [date, setDate] = useState('Thu Jun 24 2021');
  const history = useParams();
  console.log(history);
  console.log(date);
  useEffect(() => {
    getMovieById(history.id);
    fetchShowtimes(history.id, date);
  }, []);

  const fetchShowtimes = async (id, date) => {
    fetch(`http://localhost:3001/api/showtime?id=${id}&date=${date}`)
      .then((res) => res.json())
      .then((data) => {
        setShowTimes(data);
      });
  };

  return (
    <div>
      {movie && (
        <>
          <div className='trailer'>
            <iframe
              src={
                movie.trailer +
                '?frameborder="0"' +
                '?controls="0"' +
                '?rel="0"'
              }
              allowfullscreen='true'
            ></iframe>
          </div>
          <div className='info'>
            <div className='cover'>
              <img src={movie.poster} />
            </div>
            <div className='mainInfo'>
              <div className='title'> {movie.title} </div>

              <div className='grayText'> Directors </div>
              <div className='director'> {movie.director}</div>

              <div className='grayText'> Cast </div>
              <div className='whiteText'>{movie.actors}</div>

              <div className='grayText'> Plot </div>
              <div className='whiteText'>{movie.plot}</div>
            </div>
            <div className='sideInfo'>
              <div className='grayText'> Release Date </div>
              <div className='whiteText'></div>

              <div className='grayText'> Genres </div>
              <div className='genres'>{movie.genres}</div>

              <div className='grayText'> Age Rating </div>
              <div className='whiteText'>{movie.rated}</div>

              <div className='grayText'> Length </div>
              <div className='whiteText'>{movie.runTime} min </div>

              <div className='grayText'> Language </div>
              <div className='whiteText'>{movie.language}</div>
            </div>
          </div>
          <div className='booking container mx-auto'>
            <div className='showTimes row'> Show times </div>
            <ShowTimes showTimes={showTimes} />
          </div>
        </>
      )}
    </div>
  );
}
export default DetailPage;
