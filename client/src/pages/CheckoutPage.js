import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CheckoutPage = () => {
  const { cartBookings } = useContext(CartContext);

  return (
    <div className='container checkoutpage'>
      <h1>Checkout</h1>
      
      <div className="checkoutTicketCard">
        {cartBookings?.map((booking) => {
          return (<div className="tickets">
            <div className="checkoutPoster">
              <img src={booking.showtime.movie.poster} alt="" />
            </div>
            <div className="checkoutInfo">
              <h3>{booking.showtime.movie.title}</h3>
              <p>seats{booking.seatRows}</p>
              {/* <p>Tickets{booking.tickets}</p> */}
            </div>
            <div className="checkoutInfoTotal">
              <h2>Total 520</h2>
            </div>
          </div>);
        })};
      </div>

      <div className='checkoutTotal'>
        <h2>Total: 520</h2>
        <div className='button'>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
