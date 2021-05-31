import { useState, useContext, useCallback } from 'react';
import Calendar from 'react-calendar';
import { MovieContext } from '../contexts/MovieContext';
import ShowTimes from '../components/ShowTimes';

function BookingCalendar() {
  const [date, SetDate] = useState(new Date());
  const { fetchShowtimeByDate } = useContext(MovieContext);
  const [showTimes, setShowTimes] = useState([]);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
const onChange = (date) => {
  SetDate(date);
  fetchShow(date);
  console.log(showTimes)
}

const fetchShow = useCallback(
  async (date) => {
    console.log(date);
    const shows = await fetchShowtimeByDate(date.toLocaleDateString(undefined, options));
    console.log(shows);
    setShowTimes(shows);
  },
  [fetchShowtimeByDate]
);

  return (
    <div>
    <Calendar
      onChange={onChange}
      value={date}
    />
    <h1>{date.toString()}</h1>
    <div className='showTimes row'> Show times </div>
            <ShowTimes showTimes={showTimes} />
  </div>
  );
}

export default BookingCalendar;
