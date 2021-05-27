import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext, useCallback } from 'react';
import { MovieContext } from '../contexts/MovieContext';

export default function BookingSeatPage() {
  const { fetchOneShowtime } = useContext(MovieContext);
  const [showTime, setShowTime] = useState(null);
  const { id } = useParams();

  const fetchShow = useCallback(
    async (id) => {
      console.log(id);
      const show = await fetchOneShowtime(id);
      console.log(show);
      setShowTime(show);
    },
    [id, fetchOneShowtime]
  );

  useEffect(() => {
    console.log(id);
    fetchShow(id);
  }, [id, fetchShow]);

  console.log(showTime);

  return (
    <div className='container-fluid'>
      <div className='row justify-content-between showtime_info'>
        <div className='col-3'>
          <p>Back</p>
        </div>
        <div className='col-3 showtime_info--text'>
          <span>{showTime?.saloon.name}</span>
          <span>{showTime?.time}</span>
          <span>{showTime?.date}</span>
        </div>
      </div>
      <div className='row '>
        <div className='col-3'>
          <img src={showTime?.movie.poster} alt='' />
        </div>
        <div className='col-3'>
          <h1>{showTime?.movie.title}</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 text-center '>
          <h2>Choose your seats</h2>
        </div>
      </div>
    </div>
  );
}
