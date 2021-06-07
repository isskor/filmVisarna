import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CheckoutPage = () => {
  const { cartBookings } = useContext(CartContext);

  return (
    <div className='container checkoutpage'>
      <h1>Checkout</h1>
      <p>Insert TicketCard component here</p>
      {cartBookings?.map((booking) => {
        return <p>seats{booking.seatRows}</p>;
      })}
      <p>Tickets x8</p>
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
