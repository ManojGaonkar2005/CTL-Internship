import React from "react";
import "./RoomBooking.css";

const RoomBooking = () => {
  return (
    <div className="room-container">
      <img
        src="https://source.unsplash.com/400x250/?hotel,room"
        alt="Hotel Room"
        className="room-image"
      />
      <div className="room-content">
        <h2 className="room-title">Hotel Dark Moon</h2>
        <p className="room-location">Paris, France</p>
        <div className="room-details">
          <p className="room-rating">4.9 (8.5K reviews)</p>
          <span className="room-price">$390/night</span>
        </div>
        <p className="room-description">
          Hotel Dark Moon, 100 meters from Front Beach, offers accommodation
          with a garden, private parking, and a shared lounge.
        </p>
        <div className="room-features">
          <p>2 Bed</p>
          <p>Dinner</p>
          <p>Hot Tub</p>
          <p>1 AC</p>
        </div>
      </div>
    </div>
  );
};

export default RoomBooking;