import React from "react";
import "./PaymentForm.css";

const PaymentForm = () => {
  return (
    <div className="payment-form">
      <h2>Payment Details</h2>
      <div className="input-group">
        <label>Card Number</label>
        <input type="text" placeholder="2412 - 7512 - 3412 - 3456" />
      </div>
      <div className="input-row">
        <div className="input-group">
          <label>CVV</label>
          <input type="text" placeholder="327" />
        </div>
        <div className="input-group">
          <label>Expiry Date</label>
          <div className="expiry-date">
            <input type="text" placeholder="09" />
            <span>/</span>
            <input type="text" placeholder="22" />
          </div>
        </div>
      </div>
      <div className="input-group">
        <label>Password</label>
        <input type="password" placeholder="••••••••" />
      </div>
      <button className="pay-button">Pay Now</button>
    </div>
  );
};

export default PaymentForm;
