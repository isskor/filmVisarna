import { MovieContext } from '../contexts/MovieContext';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
          <div className='booking'>
            <div className='showTimes'> Show times </div>
          </div>{' '}
        </>
      )}
    </div>
  );
}
export default DetailPage;
