import { useState } from 'react';
import Calendar from 'react-calendar';

function BookingCalendar() {
  const [date, SetDate] = useState(new Date());
   
const onChange = (date) => {
  SetDate(date);
}

  return (
    <div>
    <Calendar
      onChange={onChange}
      value={date}
    />
    <h1>{date.toString()}</h1>
  </div>
  );
}

export default BookingCalendar;
