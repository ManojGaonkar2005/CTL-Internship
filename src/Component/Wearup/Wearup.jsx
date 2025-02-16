
import React from "react";
import "./Wearup.css";

const Wearup = () => {
  return (
    <div className="container">
      <div className="header"></div>
      <div className="main">
        <div className="left-container">
          <div className="heading">
            <h2>Summary Order</h2>
            <span className="summary-order">
              <p>
                Check your item and select your shipping for better experience
                order item.
              </p>
            </span>
          </div>

          <div className="order-item">
            <div className="item">
              <div className="item-image">
                <img src="/Shoes-App/1.png" alt="" />
              </div>
              <div className="item-details">
                <span className="item-categeory">New Balance 57/40 Men's</span>
                <span className="item-type">Sneakers - Mindful Grey</span>
                <div className="rate">
                  $ 129.00<span className="item-rate">$ 189.00</span>
                </div>
              </div>
              <div className="us">
                <p>42 EU - 8.5 US</p>
              </div>
            </div>

            <div className="item">
              <div className="item-image">
                <img src="/Shoes-App/2.png"  alt="" />
              </div>
              <div className="item-details">
                <span className="item-categeory">New Balance 57/40 Men's</span>
                <span className="item-type">Sneakers - Mindful Grey</span>
                <div className="rate">
                  $ 129.00<span className="item-rate">$ 189.00</span>
                </div>
              </div>
              <div className="us">
                <p>42 EU - 8.5 US</p>
              </div>
            </div>

            <div className="item">
              <div className="item-image">
                <img src="/Shoes-App/3.png"  alt="" />
              </div>
              <div className="item-details">
                <span className="item-categeory">New Balance 57/40 Men's</span>
                <span className="item-type">Sneakers - Mindful Grey</span>
                <div className="rate">
                  $ 129.00<span className="item-rate">$ 189.00</span>
                </div>
              </div>
              <div className="us">
                <p>42 EU - 8.5 US</p>
              </div>
            </div>
          </div>

          <div class="shipping-section">
            <h3>Available Shipping Method</h3>
            <div class="shipping-option-selected">
              <input type="radio" name="shipping" id="fedex" checked />
              <label for="fedex">
                <div class="shipping-info">
                  <img src="/Shoes-App/4.png"  alt="FedEx" />
                  <div>
                    <p>FedEx Delivery</p>
                    <span>Delivery: 2-3 working days</span>
                  </div>
                </div>
                <span class="shipping-price">Free</span>
              </label>
            </div>

            <h3>Available International Shipping</h3>
            <div class="shipping-option">
              <input type="radio" name="shipping" id="dhl" />
              <label for="dhl">
                <div class="shipping-info">
                  <img src="/Shoes-App/5.png"  alt="DHL" />
                  <div>
                    <p>DHL Delivery</p>
                    <span>Delivery: 1-3 working days</span>
                  </div>
                </div>
                <span class="shipping-price">$12.50</span>
              </label>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="heading">
            <h2>Summary Order</h2>
            <span className="summary-order">
              <p>
                Check your item and select your shipping for better experience
                order item.
              </p>
            </span>
          </div>

          <div className="payment-form-container">
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  placeholder="JaneDoe@gmail.com"
                  defaultValue="JaneDoe@gmail.com"
                />
                <span className="checkmark">✔</span>
              </div>
            </div>

            <div className="form-group">
              <label>Card Details</label>
              <div className="card-details">
                <input type="text" placeholder="Card Number" />
                <input type="text" placeholder="MM/YY" />
                <input type="text" placeholder="CVC" />
              </div>
            </div>

            <div className="form-group">
              <label>Card Holder</label>
              <input
                type="text"
                placeholder="Jane Doe"
                defaultValue="Jane Doe"
              />
            </div>
          </div>

          <div className="billing-address-container">
            <div className="form-group">
              <label>Billing Address</label>
              <div className="billing-address-input">
                <div className="address-field">
                  <img src="flag-icon.png" alt="Country Flag" />
                  <input
                    type="text"
                    placeholder="7568, Minister Hill, Hunter Street"
                    defaultValue="7568, Minister Hill, Hunter Street"
                  />
                </div>
                <span className="checkmark">✔</span>
              </div>
              <div className="billing-details">
                <input
                  type="text"
                  placeholder="California (CA)"
                  defaultValue="California (CA)"
                />
                <input
                  type="text"
                  placeholder="90012345"
                  defaultValue="90012345"
                />
              </div>
            </div>

            <div className="payment-summary">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>$331.00</span>
              </div>
              <div className="summary-row">
                <span>Vat (20%)</span>
                <span>$66.20</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>$397.20</span>
              </div>
            </div>

            <button className="pay-button">Pay $397.20</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wearup;
