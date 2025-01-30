import React, { useState } from "react";
import "./InspectCar.css";
import heart from "./Images/heart.png";
import location from "./Images/location.png";
import menu from "./Images/menu.png";
import whatsapp from "./Images/whatsapp.png";
import share from "./Images/share.png";
import thunderbolt from "./Images/thunderbolt.png";
import right from "./Images/right.png";
import left from "./Images/left.png";
import Oheart from "./Images/Like-orange.png";

const carImages = [
  "https://images10.gaadi.com/usedcar_image/4320910/original/10e495689e38c63ed57b8bc8a0a08fee.JPG?imwidth=640",
  "https://images10.gaadi.com/usedcar_image/4320910/original/1d0e7a56f0ee267546ee430089c711fa.JPG?imwidth=640",
  "https://images10.gaadi.com/usedcar_image/4320910/original/93a7ae7062fdd0b1618bc5d5feca6423.JPG?imwidth=640",
  "https://images10.gaadi.com/usedcar_image/4320910/original/dbe0deb27e9e4024c583e79a233e5637.JPG?imwidth=640",
];

const Task = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFavorited, setFavorited] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carImages.length) % carImages.length
    );
  };

  const tongleFavrited = () => {
    setFavorited(!isFavorited);
  };

  return (
    <div className="Container">
      {/* Left Side (Car Image with Navigation) */}
      <div className="Car-img-Container">
        <div className="buttons">
          <div className="prev-botton">
            <span onClick={prevImage}>
              <img src={left} alt="" />
            </span>
          </div>
          <div className="next-botton">
            <span onClick={nextImage}>
              <img src={right} alt="" />
            </span>
          </div>
        </div>
        <span className="car-image">
          <img src={carImages[currentIndex]} alt="Car" />
        </span>
        <span className="bottom-icon">
          <img
            src="https://stimg.cardekho.com/usedcar/images/logos/Spinny_LogoDark1.svg"
            alt=""
          />
        </span>
        <div className="Car-menu-img">
          <img src={menu} alt="" />
          <p> 40 PHOTOS</p>
        </div>
      </div>

      {/* Right Side (Static Car Details) */}
      <div className="Car-detail-Container">
        <div className="Car-detail">
          <div className="Car-details-top">
            <div className="heading">
            <div className="head"> 2023 Maruti Alto K10 VXI Plus</div>
              <div className="side-head">
                <div className="certified">
                  <span>CERTIFIED</span>
                </div>
                <span className="Like-Icon">
                  <img
                    src={isFavorited ? Oheart : heart}
                    alt="Favorite"
                    className={`heart-icon ${isFavorited ? "favorited" : ""}`}
                    onClick={tongleFavrited}
                  />
                </span>
              </div>
            </div>
            <div className="Car-run-details">
              <p>5846 kms</p>
              <span>.</span>
              <p>Petrol</p>
              <span>.</span>
              <p>Manual</p>
              <span>.</span>
              <p>1st Owner</p>
            </div>
            <div className="Car-Amount">
              <h2>₹5.21 Lakh</h2>
              <a href="#">EMI starts @ ₹12,932 / mo</a>
            </div>
            <div className="Car-details-Bottom-Container">
              <div className="location-compare">
                <div className="location">
                  <img src={location} alt="Location" />
                  <a>Yelahanka, Bangalore</a>
                </div>
                <div className="compare">
                  <input type="checkbox" /> Compare
                </div>
              </div>
              <div className="seller-button">
                <button>View Seller Details</button>
              </div>
            </div>
          </div>
          <div className="Car-detail-b">
            <p>
              <span className="T-head">
                <img src={thunderbolt} alt="" />
                Trending Car!
              </span>
              <span className="light-text">
                High chances of sale in next 6 days
              </span>
            </p>
          </div>
        </div>
        <div className="social-links">
          <div className="brands">
            <img src={whatsapp} alt="" />
            <a href="">Chat with Seller</a>
          </div>
          <div className="brands">
            <img src={share} alt="" />
            <a href="">Share</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Task;
