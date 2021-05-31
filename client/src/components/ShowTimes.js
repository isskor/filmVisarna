import React from 'react';
import TicketsButton from './TicketsButton';

const ShowTimes = ({ showTimes }) => {
  console.log('ss', showTimes);
  return (
    <div className='row  showTime_card'>
      {showTimes.length > 0 ? (
        showTimes.map((s) => (
          <div className='row align-items-center' key={s._id}>
            <div className='col-2'>{s.date}</div>
            <div className='col-2'>{s.saloon.name}</div>
            <div className='col-2'>{s.time}</div>
            <div className='col ticket_btn'>
              <TicketsButton showtimeID={s._id}>Tickets</TicketsButton>
            </div>
          </div>
        ))
      ) : (
        <p>no shows for this date</p>
      )}
    </div>
  );
};

export default ShowTimes;
