import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const TicketCard = (props) => {
  let showtime = props.booking.showtime;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="ticketCard">
      <div className="topContainer">
        <div className="topLeftContainer">
          <h4>Filmvisarna</h4>
        </div>
        <div className="topRightContainer"></div>
      </div>
      <div className="bottomContainer">
        <div className="bottomLeftContainer">
          <div className="movieTitleContainer">
            <h3>{showtime.movie.title}</h3>
            <span>Movie</span>
            <h3>{loggedInUser.firstName}</h3>
            <span>Name</span>
          </div>
          <div className="movieTimeContainer">
            <div>
              <h5>{showtime.saloon.name}</h5>
              <span>Saloon</span>
            </div>
            <div>
              <h5>{showtime.date}</h5>
              <span>Time</span>
            </div>
          </div>
        </div>
        <div className="bottomRightContainer">
          <h2>55</h2>
          <span>Seat</span>
          <img
            src="https://sv.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
            alt="qr-code"
          />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
