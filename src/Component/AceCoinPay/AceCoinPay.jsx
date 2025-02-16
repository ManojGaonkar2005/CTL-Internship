import React from "react";
import "./AceCoinPay.css";

import AceCoinlogo from "./images/Acecoin-logo.png";
import pencil from "./images/pencil.png";
import mcSymbol from "./images/masterCard-Logo.png";
import verifiedBadge from "./images/verified.png";
import dotsImg from "./images/dots-menu.png";
import chipImg from "./images/chip.png";
import wifiImg from "./images/wifi.png";
import mastercardLogo from "./images/mastercard.png";
import appleLogo from "./images/apple.png";
import docketImg from "./images/docket.png";

const Example = () => {
  return (
    <div className="wrapper">
      <div className="form">
        <div className="form-header">
          <div className="logo">
            <div className="close-btn">
              <img src={AceCoinlogo} alt="Close Icon" />
            </div>
            <div className="logo-circle">
              <h1>
                AceCoin<span className="lean">Pay</span>
              </h1>
            </div>
          </div>
          <div className="timer">
            <span className="timer-box">0</span>
            <span className="timer-box">1</span>
            <span className="timer-divider">:</span>
            <span className="timer-box">1</span>
            <span className="timer-box">9</span>
          </div>
        </div>

        <div className="form-body">
          <form>
            <div className="input-group">
              <div className="A-header">
                <div className="description">
                  <div className="title">Card Number</div>
                  <div className="desc">
                    Enter the 16-digit card number on the card
                  </div>
                </div>
                <div className="editPencil">
                  <button className="edit">
                    <img src={pencil} alt="Edit Icon" />
                    <span className="btn-desc">Edit</span>
                  </button>
                </div>
              </div>
              <div className="A-main">
                <div className="master-Badge">
                  <img
                    src={mcSymbol}
                    alt="Card Leading Icon"
                    className="leading-icon"
                  />
                  <input type="text" placeholder="2414   -   7512   -   4312   -   3456" />
                </div>
                <img
                  src={verifiedBadge}
                  alt="Card Trailing Icon"
                  className="trailing-icon"
                />
              </div>
            </div>

            <div className="A-input-group">
              <div className="A-header">
                <div className="description">
                  <div className="title">CVV Number</div>
                  <div className="desc">
                    Enter the 3 or 4 digit number on the card
                  </div>
                </div>
              </div>
              <div className="main">
                <input type="number" placeholder="327" />
                <img src={dotsImg} alt="" />
              </div>
            </div>

            <div className="input-group__col">
              <div className="A-header">
                <div className="description">
                  <div className="title">Expiry Date</div>
                  <div className="desc">
                    Enter the expiration date of the card
                  </div>
                </div>
              </div>
              <div className="dates">
                <div className="main__date">
                  <input type="number" placeholder="09" />
                </div>
                <div className="devider">/</div>
                <div className="main__date">
                  <input type="number" placeholder="22" />
                </div>
              </div>
            </div>

            <div className="A-input-group">
              <div className="A-header">
                <div className="description">
                  <div className="title">Password</div>
                  <div className="desc">Enter your dynamic password</div>
                </div>
              </div>
              <div className="B-main">
                <input type="password" placeholder="Password" />
                <img src={dotsImg} alt="" />
              </div>
            </div>

            <button type="submit" className="btn-submit">
              Pay Now
            </button>
          </form>
        </div>
      </div>

      <div className="checkout">
        <div className="credit-card">
          <div className="credit-card__head">
            <img src={chipImg} alt="Card Logo" />
            <div className="wifi">
              <img src={wifiImg} alt="Card Chip" className="chip" />
            </div>
          </div>
          <div className="credit-card__body">
            <span className="holder">Jonathan Michael</span>
            <div className="card-digits">

              <div className="dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>

              <span className="visible-digits">
                <h1>3456</h1>
              </span>
            </div>
            <div className="credit-card__footer">
              <span className="expiry">09/22</span>
              <img src={mastercardLogo} alt="Visa Logo" className="logo" />
            </div>
          </div>
          {/* <div className="card__design">
            <div className="inner" />
          </div> */}
        </div>

        <div className="checkout-details">
          <div className="purchase-data">
            <div className="data">
              <span className="title">Company</span>
              <div className="value">
                <img src={appleLogo} alt="Apple Logo" />
                <span className="inner-text">Apple</span>
              </div>
            </div>
            <div className="data">
              <span className="title">Order Number</span>
              <span className="inner-text">1266201</span>
            </div>
            <div className="data">
              <span className="title">Product</span>
              <span className="inner-text">MacBook Air</span>
            </div>
            <div className="data">
              <span className="title">VAT(20%)</span>
              <span className="inner-text">$100.00</span>
            </div>
          </div>
          <div className="divider">
            <div className="left" />
            <div className="right" />
          </div>
          <div className="purchase-total">
            <div className="total">
              <span className="desc">You have to pay</span>
              <div className="t-amount">
                <h1>549.99</h1>
                <span className="amount">USD</span>
              </div>
            </div>
            <img src={docketImg} alt="Card Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;
