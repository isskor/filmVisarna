import React, { useState } from 'react';

const ChooseSeat = ({ seats }) => {
  console.log(seats);

  const [seatQuantity, setSeatQuantity] = useState(3);

  return (
    <div className='col seat_table'>
      {seats?.map((row) => (
        <div className='SeatRow' key={row.row}>
          <span className='SeatRow_name'>{row.row}</span>
          <div className='seats'>
            {row.seats.map((s, i) => {
              let seatCol = row.seats.length === 8 ? 1 : 3;
              let seatCol2 = row.seats.length === 8 ? 5 : 7;

              return (
                <div
                  className={`seat ${i === seatCol ? 'seat_col' : ''} ${
                    i === seatCol2 ? 'seat_col' : ''
                  }`}
                  key={i}
                ></div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChooseSeat;
