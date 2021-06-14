import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
const OrderDetails = () => {
  const { id } = useParams();
  const { setCart } = useContext(CartContext);

  const [order, setOrder] = useState([]);
  console.log(id);

  useEffect(() => {
    fetch('http://localhost:3001/api/userBooking?id=' + id)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
        setCart([]);
      });
  }, []);

  return (
    <div className='container OrderDetails'>
      <h1>Your order is complete!</h1>
      <h2>Order Details:</h2>
      {order && (
        <div className='orderComplete'>
          {order.booking?.map((o) => {
            const { seatRows, tickets, showtime } = o;
            const { date, movie, saloon } = showtime;
            const totalPrice = tickets.reduce((a, b) => {
              const tick = Object.values(b);
              return a + tick[0].price * tick[0].quantity;
            }, 0);
            const numTickets = tickets.reduce((a, b) => {
              const tick = Object.values(b);
              return a + tick[0].quantity;
            }, 0);
            return (
              <div key={o._id}>
                <p>Movie: {movie.title}</p>
                <p>Movie Date: {date}</p>
                <p>Quantity: {numTickets}</p>
                <p>
                  Seats:
                  {seatRows.map((s) => (
                    <span key={s}> {s}, </span>
                  ))}
                </p>
                <p>Saloon: {saloon.name}</p>
                <p>Total: {totalPrice} kr</p>
                <hr />
              </div>
            );
          })}
        </div>
      )}
      <div className='orderconfirmation'>
        <p>
          We have sent an orderconfirmation to your email to help you pick up
          your tickets when you arrive!
        </p>
      </div>
    </div>
  );
};

export default OrderDetails;
