import React, { useState } from 'react';

const ChooseSeat = ({ seats }) => {
  // todo -> should be taken from ticket quantity
  const [seatQuantity, setSeatQuantity] = useState(5);
  const [selected, setSelected] = useState([]);
  const [preview, setPreview] = useState([]);
  const [booked, setBooked] = useState(['B1', 'C11']);
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
    console.log(splitSeat);
    if (splitSeat.length > 2) {
      seatNumber = [Number(splitSeat[1] + splitSeat[2])];
    }

    // initialize empty array
    let seatsToChoose = [];

    // for each ticket quantity we want to mark the following seats to match quantity
    for (let i = 0; i < seatQuantity; i++) {
      console.log(seatNumber);
      // marks the next seat
      let nextNumber = +seatNumber + i;
      console.log('max', maxLength);
      // go backwards
      if (seatNumber > maxLength - seatQuantity) {
        nextNumber = +seatNumber - i;
      }
      // push to seat array
      seatsToChoose.push(seatRow + nextNumber);
    }

    console.log(seatsToChoose);

    // sets the array in preview
    setPreview(seatsToChoose);
  };
  console.log('prev', preview);

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
    <div className='col seat_table'>
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
                >
                  {s}
                </div>
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
