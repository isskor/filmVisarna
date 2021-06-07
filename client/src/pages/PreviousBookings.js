import React, { useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import TicketCard from "../components/TicketCard";
import { useHistory } from "react-router-dom";

const PreviousBookings = () => {
  const { userBookings, loggedInUser, getUserBookings } =
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
    return showtimeDate < todaysDate;
  };

  //Function that checks if bookings exists so page dosen't crash
  const bookingsStored = () => {
    if (userBookings && userBookings.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="bookingsWrapper">
      <h1>Previous bookings</h1>
      {/*Checks if loggedInUserExists and that users bookings has been stored*/}
      {loggedInUser && bookingsStored() ? (
        //Maps out each booking
        userBookings.map((booking, index) => {
          //CountDate checks if the booking.date is greater than todays that, if true render that booking
          return countDate(booking) ? (
            <>
              {" "}
              <h2 key={index + 1}>{booking.showtime.movie.title}</h2>
              {/* Renders a ticketCard for each booked seat in that booking */}
              {booking.seatRows.map((bookingSeat) => {
                return (
                  <>
                    <TicketCard
                      key={index}
                      booking={booking}
                      bookingSeat={bookingSeat}
                    />
                  </>
                );
              })}
            </>
          ) : null;
        })
      ) : (
        <>
          <h3>You have no previous bookings...</h3>
          <button onClick={() => history.push("/")}>Go to home</button>
        </>
      )}
    </div>
  );
};

export default PreviousBookings;
