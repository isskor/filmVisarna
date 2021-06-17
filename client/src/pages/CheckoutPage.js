import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';
import { useHistory } from 'react-router';

const CheckoutPage = () => {
  const history = useHistory();

  const createBooking = async () => {
    // create new booking with all movie tickets
    const newBooking = await fetch(
      'http://localhost:3001/api/createUserBooking',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          bookings: cartBookings.map((b) => b._id),
        }),
      }
    );

    const data = await newBooking.json();
    // reset cart to empty arr
    handleCart([]);
    // push to order details page
    history.push('/orderdetails/' + data._id);
  };

  const { cartBookings, getCartBookings, handleCart } = useContext(CartContext);
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
      // get total price for each booking
      return accumlator + getBookingTotalPrice(current.tickets);
    }, 0);
  };

  const cancelBooking = async (id) => {
    await deleteBooking({ bookingId: id });
    // re-fetch bookings
    await getCartBookings();
  };

  return (
    <div className='container checkoutpage'>
      <h1>Checkout</h1>
      {cartBookings && (
        <>
          <div className='checkoutTicketCard'>
            {/* {'loop over bookings '} */}
            {cartBookings?.map((booking) => {
              return (
                <div className='ticket_card' key={booking._id}>
                  <div className='checkoutPoster'>
                    <img src={booking.showtime.movie.poster} alt='' />
                  </div>
                  <div className='ticket_card--tickets'>
                    <h3>{booking.showtime.movie.title}</h3>
                    <h4>{booking.showtime.date} {""}{booking.showtime.time}</h4>
                    
                    <p>Tickets:</p>
                    {/* {'loop tickets'} */}
                    {booking.tickets.map((ticket, i) => {
                      const [key, value] = Object.entries(ticket);
                      if (key[1].quantity > 0)
                        return (
                          <p key={i}>
                            {key[0]} - {key[1].quantity} x {key[1].price}
                          </p>
                        );
                    })}
                    <p>
                      Seats: {/* {loop over seats} */}
                      {booking.seatRows.map((s, i) => (
                        <span key={i}>{s}, </span>
                      ))}
                    </p>
                  </div>
                  <div className='ticket_card_total'>
                    <button onClick={() => cancelBooking(booking._id)}>
                      Cancel
                    </button>
                    <h2>Total {getBookingTotalPrice(booking.tickets)}kr</h2>
                  </div>
                </div>
              );
            })}
          </div>

          <div className='checkoutTotal'>
            <h2>Total: {getTotalCheckoutPrice()}kr </h2>
            <div className='button'>
              <button onClick={createBooking}>Continue</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
