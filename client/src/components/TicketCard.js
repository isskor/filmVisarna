import React from "react";

const TicketCard = (props) => {
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
            <h3>{props.booking.title}</h3>
            <span>Movie</span>
            <h3>August Ronnle</h3>
            <span>Name</span>
          </div>
          <div className="movieTimeContainer">
            <div>
              <h5>55</h5>
              <span>Seat</span>
            </div>
            <div>
              <h5>12:15</h5>
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
