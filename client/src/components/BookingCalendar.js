import { useState, useContext, useCallback } from 'react';
import Calendar from 'react-calendar';
import { MovieContext } from '../contexts/MovieContext';
import ShowTimes from '../components/ShowTimes';

function BookingCalendar() {
  const [date, SetDate] = useState(new Date());
  const { fetchShowtimeByDate } = useContext(MovieContext);
  const [showTimes, setShowTimes] = useState([]);

  const onChange = (date) => {
    SetDate(date);
    fetchShow(date);
  }

  const fetchShow = useCallback(
    async (date) => {
      const shows = await fetchShowtimeByDate(date.toDateString());
      setShowTimes(shows);
    },
    [fetchShowtimeByDate]
  );

  return (
    <div>

      <Calendar className='mx-auto py-5'
        onChange={onChange}
        value={date}
      />

      <div className='showTimes row'> Show times </div>
      <ShowTimes showTimes={showTimes} />
    </div>
  );
}

export default BookingCalendar;
