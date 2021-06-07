import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';

const CheckoutPage = () => {
  const { cartBookings, getCartBookings } = useContext(CartContext);
  const { deleteBooking } = useContext(UserContext);
  // console.log(Object.entries(cartBookings[0]?.tickets[0]));

  const getBookingTotalPrice = (tickets) => {
    return tickets.reduce((a, b) => {
      // each ticket is an object, so we need to go into the object and get the keys.
      const [key, value] = Object.entries(b);
      // key[0] => type 'adult, senior, junoir'
      // key[1] => {price , quantity}
      return a + key[1].quantity * key[1].price;
    }, 0);
  };

  const getTotalCheckoutPrice = () => {
    // loop over all bookings
    return cartBookings.reduce((accumlator, current) => {
      // get totalprice for each booking
      return accumlator + getBookingTotalPrice(current.tickets);
    }, 0);
  };

  const cancelBooking = async (id) => {
    await deleteBooking({ bookingId: id });
    await getCartBookings();
  };

  return (
    <div className='container checkoutpage'>
      <h1>Checkout</h1>
      {cartBookings && (
        <>
          <div className='checkoutTicketCard'>
            {cartBookings?.map((booking) => {
              return (
                <div className='ticket_card'>
                  <div className='checkoutPoster'>
                    <img src={booking.showtime.movie.poster} alt='' />
                  </div>
                  <div className='ticket_card--tickets'>
                    <h3>{booking.showtime.movie.title}</h3>

                    {booking.tickets.map((ticket, i) => {
                      const [key, value] = Object.entries(ticket);
                      if (key[1].quantity > 0)
                        return (
                          <p>
                            {key[0]} - {key[1].quantity} x {key[1].price}
                          </p>
                        );
                    })}
                    <p>Seats {booking.seatRows}</p>
                  </div>
                  <button onClick={() => cancelBooking(booking._id)}>
                    Cancel
                  </button>
                  <div className='checkoutInfoTotal'>
                    <h2>Total {getBookingTotalPrice(booking.tickets)}</h2>
                  </div>
                </div>
              );
            })}
          </div>

          <div className='checkoutTotal'>
            <h2>Total: {getTotalCheckoutPrice()} </h2>
            <div className='button'>
              <button>Continue</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
