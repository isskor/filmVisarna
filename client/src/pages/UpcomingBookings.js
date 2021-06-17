import React, { useEffect, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import TicketCard from '../components/TicketCard';
import { useHistory } from 'react-router-dom';

const UpcomingBookings = () => {
  const { userBookings, loggedInUser, getUserBookings, deleteBooking } =
    useContext(UserContext);

  useEffect(() => {
    getUserBookings();
  }, []);
  const history = useHistory();

  //This function checks if each bookings showtime date property has passed todays date
  const countDate = (booking) => {
    //Get todays date
    let todaysDate = new Date();
    //Get showtimes date value
    let showtimeDate = new Date(booking.showtime.date);
    //Subtract the two and return true of false if the showtime has passed or not
    return showtimeDate > todaysDate;
  };

  //Function that checks if bookings exists so page dosen't crash
  const bookingsStored = () => {
    if (userBookings && userBookings.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const cancelBooking = (id) => {
    deleteBooking({ bookingId: id });
  };

  return (
    <div className='bookingsWrapper'>
      <h1>Upcoming bookings</h1>
      {loggedInUser && bookingsStored() ? (
        userBookings.map((booking, index) => {
          return countDate(booking) ? (
            <div key={index}>
              {' '}
              <h2 key={index + 1}>{booking.showtime.movie.title}</h2>
              <button onClick={() => cancelBooking(booking._id)}>Cancel</button>
              {/* Renders a ticketCard for each booked seat in that booking */}
              {booking.seatRows.map((bookingSeat, i) => {
                return (
                  <TicketCard
                    key={i}
                    booking={booking}
                    bookingSeat={bookingSeat}
                  />
                );
              })}
            </div>
          ) : null;
        })
      ) : (
        <>
          <h3>You have no upcoming bookings...</h3>
          <button onClick={() => history.push('/')}>Go to home</button>
        </>
      )}
    </div>
  );
};

export default UpcomingBookings;
