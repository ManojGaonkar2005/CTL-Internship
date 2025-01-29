
import React, { useState } from "react";
import "./InspectCar.css";
import heart from "./image/heart.jpg";
import location from "./image/location.png";

const carImages = [
  "https://images10.gaadi.com/usedcar_image/4320910/original/10e495689e38c63ed57b8bc8a0a08fee.JPG?imwidth=640",
  "https://images10.gaadi.com/usedcar_image/4320910/original/1d0e7a56f0ee267546ee430089c711fa.JPG?imwidth=640",
  "https://images10.gaadi.com/usedcar_image/4320910/original/93a7ae7062fdd0b1618bc5d5feca6423.JPG?imwidth=640",
  "https://images10.gaadi.com/usedcar_image/4320910/original/dbe0deb27e9e4024c583e79a233e5637.JPG?imwidth=640",
];

export default function Task() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carImages.length) % carImages.length);
  };

  return (
    <div className="outer">
      {/* Left Side (Car Image with Navigation) */}
      <div className="inner1">
        <button className="prev-btn" onClick={prevImage}>&#10094;</button>
        <img src={carImages[currentIndex]} alt="Car" className="car-image" />
        <button className="next-btn" onClick={nextImage}>&#10095;</button>
      </div>

      {/* Right Side (Static Car Details) */}
      <div className="inner2">
        <div className="inner2-1">
          <div className="in1">
            <h2>2023 Maruti Alto K10 VXI Plus</h2>
            <button>CERTIFIED</button>
            <img src={heart} alt="Favorite" />
          </div>
          <div className="in2">
            <p>5846 kms</p>
            <h1>.</h1>
            <p>Petrol</p>
            <h1>.</h1>
            <p>Manual</p>
            <h1>.</h1>
            <p>1st Owner</p>
          </div>
          <div className="in3">
            <h2>$5.21 Lakh</h2>
            <a href="#">EMI starts @ $12,932/mo</a>
          </div>
          <div className="in4">
            <div className="in4-1">
              <img src={location} alt="Location" />
              <p>Yelahanka, Bangalore</p>
              <input type="checkbox" /> Compare
            </div>
            <button>View Seller Details</button>
          </div>
        </div>
        <div className="inner2-2">
          <h3>Trending Car!</h3>
          <p>High chances of sale in next 6 days</p>
        </div>
      </div>
    </div>
  );
}