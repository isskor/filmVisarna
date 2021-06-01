import { useState, useContext, useCallback } from 'react';
import Calendar from 'react-calendar';
import { MovieContext } from '../contexts/MovieContext';
import ShowTimes from '../components/ShowTimes';
import { Container } from 'react-bootstrap';

function BookingCalendar() {
  const [date, SetDate] = useState(new Date());
  const { fetchShowtimeByDate } = useContext(MovieContext);
  const [showTimes, setShowTimes] = useState([]);

  
const onChange = (date) => {
  SetDate(date);
  fetchShow(date);
  console.log(showTimes)
}

const fetchShow = useCallback(
  async (date) => {
    console.log(date);

    const shows = await fetchShowtimeByDate(date.toDateString());
    console.log(shows);
    setShowTimes(shows);
  },
  [fetchShowtimeByDate]
);

  return (
    <div>
     
    <Calendar  className='mx-auto py-5'
      onChange={onChange}
      value={date}
    />
  

    <div className='showTimes row'> Show times </div>
            <ShowTimes showTimes={showTimes} />
  </div>
  );
}

export default BookingCalendar;
