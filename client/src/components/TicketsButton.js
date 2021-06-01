import React from 'react';
import { useHistory } from 'react-router';

const TicketsButton = ({ showtimeID }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/showtime/' + showtimeID);
  };

  return <button onClick={handleClick}>Tickets</button>;
};

export default TicketsButton;
