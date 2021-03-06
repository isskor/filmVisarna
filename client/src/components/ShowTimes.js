import React from 'react';
import TicketsButton from './TicketsButton';
import { Container } from 'react-bootstrap';

const ShowTimes = ({ showTimes }) => {
  return (
    <div className='row  showTime_card col-12 mx-auto'>
      {showTimes.length > 0 ? (
        showTimes.map((s) => (
          <Container className=' mb-2 col-12 col-md-10' key={s._id}>
            <div className='row align-items-center justify-content-between' >
              <div className='col-2 '>{s.movie.title}</div>
              <div className='col-3'>{s.date}</div>
              <div className='col-2'>{s.saloon.name}</div>
              <div className='col-2 '>{s.time}</div>
              <div className='col-3 col-md-2 ticket_btn'>
                <TicketsButton showtimeID={s._id}>Tickets</TicketsButton>
              </div>
            </div>
          </Container>
        ))
      ) : (
        <p>no shows for this date</p>
      )}
    </div>
  );
};

export default ShowTimes;
