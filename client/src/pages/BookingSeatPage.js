import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext, useCallback } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import ChooseSeat from '../components/ChooseSeat';

export default function BookingSeatPage() {
  const { fetchOneShowtime } = useContext(MovieContext);
  const [showTime, setShowTime] = useState(null);
  const [selected, setSelected] = useState([]);
  const [booked, setBooked] = useState([]);
  let init = {
    adult: { price: showTime?.movie.price, quantity: 0 },
    senior: { price: showTime?.movie.price * 0.8, quantity: 0 },
    junior: { price: showTime?.movie.price * 0.7, quantity: 0 },
  };
  const [tickets, setTickets] = useState({});
  console.log(tickets);
  const { id } = useParams();

  const fetchShow = useCallback(
    async (id) => {
      console.log(id);
      const show = await fetchOneShowtime(id);
      console.log(show);
      setShowTime(show);
      setBooked(show.booked);
    },
    [id, fetchOneShowtime]
  );

  const handleQuantity = (type, minus) => {
    if (minus) {
      if (tickets[type].quantity === 0) return;

      setTickets({
        ...tickets,
        [type]: { ...tickets[type], quantity: tickets[type].quantity - 1 },
      });
    } else {
      setTickets({
        ...tickets,
        [type]: { ...tickets[type], quantity: tickets[type].quantity + 1 },
      });
    }
  };

  const getTotalPrice = () => {
    const ticketArray = Object.values(tickets);
    const sum = ticketArray.reduce((a, b) => {
      return a + b.price * b.quantity;
    }, 0);
    return sum;
  };

  useEffect(() => {
    console.log(id);
    fetchShow(id);
  }, [id, fetchShow]);

  useEffect(() => {
    setTickets(init);
  }, [showTime]);

  console.log(showTime);

  const submitBooking = async () => {
    let booking = await fetch('http://localhost:3001/api/bookShowtime', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ showTime: showTime._id, seats: selected }),
    });
  };

  return (
    <div className='container-fluid'>
      <div className='booking_header'>
        <div className='row justify-content-between showtime_info'>
          <div className='col-3'>
            <p>Back</p>
          </div>
        </div>
        <div className='row '>
          <div className='col-4 text-end'>
            <img src={showTime?.movie.poster} alt='' />
          </div>
          <div className='col-7'>
            <div className='row'>
              <h1>{showTime?.movie.title}</h1>
              <div className='col-3 showtime_info--text'>
                <span className='showtime_info--title'>Saloon</span>
                <span>{showTime?.saloon.name}</span>
                <span className='showtime_info--title'>Time</span>
                <span>{showTime?.time}</span>
                <span className='showtime_info--title'>Date</span>
                <span>{showTime?.date}</span>
              </div>
            </div>
            <div className='row ticket_quantity'>
              <div className='ticket_group'>
                <span>Adult Price: {tickets?.adult?.price}</span>
                <div
                  className='ticket_minus'
                  onClick={() => handleQuantity('adult', 'minus')}
                >
                  -
                </div>
                <span>{tickets?.adult?.quantity}</span>
                <div
                  className='ticket_plus'
                  onClick={() => handleQuantity('adult')}
                >
                  +
                </div>
              </div>

              <div className='ticket_group'>
                <span>Senior Price: {tickets?.senior?.price}</span>
                <div
                  className='ticket_minus'
                  onClick={() => handleQuantity('senior', 'minus')}
                >
                  -
                </div>
                <span>{tickets?.senior?.quantity}</span>
                <div
                  className='ticket_plus'
                  onClick={() => handleQuantity('senior')}
                >
                  +
                </div>
              </div>
              <div className='ticket_group'>
                <span>Junior Price: {tickets?.junior?.price}</span>
                <div
                  className='ticket_minus'
                  onClick={() => handleQuantity('junior', 'minus')}
                >
                  -
                </div>
                <span>{tickets?.junior?.quantity}</span>
                <div
                  className='ticket_plus'
                  onClick={() => handleQuantity('junior')}
                >
                  +
                </div>
              </div>
              <p> Total price: {getTotalPrice()} </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 text-center '>
            <h2>Choose your seats</h2>
          </div>
          <ChooseSeat
            seats={showTime?.saloon.seatRows}
            tickets={tickets}
            selected={selected}
            setSelected={setSelected}
            booked={booked}
          />
        </div>
        <div className='row'>
          <div className='col text-center'>
            <button onClick={submitBooking}>Book Seats</button>
          </div>
        </div>
      </div>
    </div>
  );
}
