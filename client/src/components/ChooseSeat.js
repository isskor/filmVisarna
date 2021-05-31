import React, { useState } from 'react';

const ChooseSeat = ({ seats, tickets, selected, setSelected, booked }) => {
  const [preview, setPreview] = useState([]);
  const [seatError, setSeatError] = useState(null);

  // on Mouse Over set preview
  const handleHover = (seat, row) => {
    // clean error
    setSeatError(null);
    // max length per row, so we can calculate when to go backwards
    let maxLength = row.seats.length;
    // splits the seat name so we can get the number
    let splitSeat = seat.split('');
    let seatRow = splitSeat[0];
    let seatNumber = +splitSeat[1];
    // if seats are >= 10 we want to add the last 2 el. to get 11, 12 etc.
    if (splitSeat.length > 2) {
      seatNumber = [Number(splitSeat[1] + splitSeat[2])];
    }
    // initialize empty array
    let seatsToChoose = [];
    // for each ticket quantity we want to mark the following seats to match quantity
    let numOfTickets = Object.values(tickets).reduce(
      (a, b) => a + b.quantity,
      0
    );

    for (let i = 0; i < numOfTickets; i++) {
      // marks the next seat
      let nextNumber = +seatNumber + i;
      // go backwards
      if (seatNumber > maxLength - numOfTickets) {
        nextNumber = +seatNumber - i;
      }
      // push to seat array
      seatsToChoose.push(seatRow + nextNumber);
    }
    // sets the array in preview
    setPreview(seatsToChoose);
  };

  const checkIfBooked = (booked, selected) => {
    // compares to arrays, if any el in booked is present in selected return true,
    return booked.some((seat) => selected.indexOf(seat) >= 0);
  };

  const handleSelect = () => {
    // if included in booked return with error
    if (checkIfBooked(booked, preview)) {
      return setSeatError(
        "You can't choose booked seats, please select different chairs"
      );
    }
    // if not found in book set selected
    setSelected(preview);
  };

  return (
    <div className=' seat_table' onMouseLeave={() => setPreview([])}>
      <div className=' seat_info'>
        <div className='seat_info--booked'>
          <div className='seat_color'></div>
          <p>Booked</p>
        </div>
        <div className='seat_info--selected'>
          <div className='seat_color'></div>
          <p>Selected</p>
        </div>
      </div>
      {seats?.map((row) => (
        <div className='SeatRow' key={row.row}>
          <span className='SeatRow_name'>{row.row}</span>
          <div className='seats'>
            {row.seats.map((s, i) => {
              // calculate first column of seats
              let seatCol = row.seats.length === 8 ? 1 : 3;
              // calculate second column of seats
              let seatCol2 = row.seats.length === 8 ? 5 : 7;

              return (
                <div
                  className={`
                  seat 
                  ${i === seatCol ? 'seat_col' : ''} 
                  ${i === seatCol2 ? 'seat_col' : ''}
                  ${selected.includes(s) ? 'seat_selected' : ''}
                  ${booked.includes(s) ? 'seat_booked' : ''}
                  ${
                    preview.filter((seat) => seat === s).length > 0
                      ? 'seat_preview'
                      : ''
                  }
                  `}
                  key={i}
                  onMouseOver={() => handleHover(s, row)}
                  onClick={handleSelect}
                ></div>
              );
            })}
          </div>
        </div>
      ))}
      {seatError && <p className='seat_error'>{seatError}</p>}
    </div>
  );
};

export default ChooseSeat;
