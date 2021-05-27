import { useState } from 'react';
import Calendar from 'react-calendar';

function BookingCalendar() {
  const [value, onChange] = useState(new Date());
  
   
  return (
    <div>
    <Calendar
      onChange={onChange}
      value={value}
    />
  </div>
  );
}

export default BookingCalendar;
