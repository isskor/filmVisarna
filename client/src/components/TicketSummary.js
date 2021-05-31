import React from 'react';

const TicketSummary = ({ tickets, selected, getTotalPrice, submitBooking }) => {
  const sortSeats = (toSort) => {
    return toSort.sort((a, b) => {
      let splitA = a.split('');
      let splitB = b.split('');

      let seatNumberA = +splitA[1];
      let seatNumberB = +splitB[1];
      // if seats are >= 10 we want to add the last 2 el. to get 11, 12 etc.
      if (splitA[2]) {
        seatNumberA = Number(splitA[1] + splitA[2]);
      }
      if (splitB[2]) {
        seatNumberB = Number(splitB[1] + splitB[2]);
      }

      return seatNumberA - seatNumberB;
    });
  };
  return (
    <>
      <h4>Summary</h4>
      <div className='ticket_summary'>
        {Object.entries(tickets).map((t) => {
          if (t[1].quantity > 0) {
            const { quantity, price } = t[1];

            return (
              <div className='ticket_summary--row'>
                <span style={{ textTransform: 'capitalize' }}>
                  {t[0]} x {quantity} @ {price} kr
                </span>
              </div>
            );
          }
        })}
      </div>
      <div className='ticket_summary--total'>
        <div className=' selected_seats'>
          <p>
            Selected Seats:{' '}
            {sortSeats(selected).map((s) => (
              <span> {s},</span>
            ))}
          </p>
        </div>

        <h4>Total: {getTotalPrice()}kr</h4>
      </div>
      <button onClick={submitBooking}>Book Seats</button>
    </>
  );
};

export default TicketSummary;
