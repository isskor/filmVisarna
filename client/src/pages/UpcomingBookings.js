import React, { useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import TicketCard from "../components/TicketCard";
import { useHistory } from "react-router-dom";

const UpcomingBookings = () => {
  const { loggedInUser } = useContext(UserContext);
  const history = useHistory();
  return (
    <div className="bookingsWrapper">
      <h1>Upcoming bookings</h1>
      {loggedInUser && loggedInUser.bookings.length > 0 ? (
        loggedInUser.bookings.map((booking, index) => (
          <TicketCard key={index} booking={booking} />
        ))
      ) : (
        <>
          <h3>You have no upcoming bookings...</h3>
          <button onClick={() => history.push("/")}>Go to home</button>
        </>
      )}
    </div>
  );
};

export default UpcomingBookings;
