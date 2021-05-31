import React, { useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import TicketCard from "../components/TicketCard";

const UpcomingBookings = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div>
      <h1>Upcoming bookings</h1>
      {loggedInUser && loggedInUser.bookings.length > 0 ? (
        loggedInUser.bookings.map((booking, index) => (
          <TicketCard key={index} booking={booking} />
        ))
      ) : (
        <h3>You have no upcoming bookings</h3>
      )}
    </div>
  );
};

export default UpcomingBookings;
