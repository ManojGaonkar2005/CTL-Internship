import React from "react";
import "./Resto.css";
import biscuit from "./imges/Biscuit_Susu.png";
import krosang from "./imges/Krosang.png";
import strawberry from "./imges/Strawberry.png";
import healthy from "./imges/S_Kids_Meal.png";
import mango from "./imges/Mangoo_Milk.png";
import smoothie from "./imges/Smoothie_Berry.png";
import rainbow from "./imges/Rainbow_Cupcake.png";
import mie from "./imges/Mie_Gocengan.png";
import filter from "./imges/Filter.png";
import minus from "./imges/Minus.png";
import plus from "./imges/Plus.png";
import Tomato from "./imges/Tomato.png";
import Japanes from "./imges/Japanes.png";
import Avocado from "./imges/Avocado.png";
import Lettuce_Stuff from "./imges/Lettuce_Stuff.png";

const menu = () => {
  return (
    <div className="container">
      <div className="food-heading">
        <h1>Special Discount Today</h1>
        <span>
          Ends in <a href="">12:10:09</a>
        </span>
      </div>
      <div className="head-box">
        <div className="head-item">
          <img src={Tomato} alt="Biscuit Mama with Susu" />
          <h2>Tomato with Tofu Salad</h2>
          <div className="food-order">
            <div className="food-price">
              <span>
                <a href="">12%</a>
                <p>Rp 115,000,00</p>
              </span>
              <h4> Rp 60.000,00</h4>
            </div>
            <div className="order">
              <button>Order</button>
            </div>
          </div>
        </div>

        <div className="head-item">
          <img src={Japanes} alt="Krosang Thats It" />
          <h2>Japanese Chiken Gyoze</h2>

          <div className="food-order">
            <div className="food-price">
              <span>
                <a href="">15%</a>
                <p>Rp 95,000,00</p>
              </span>
              <h4> Rp 81.700,00</h4>
            </div>
            <div className="food-quantity">
              <img src={minus} alt="" width={10}/>
              <span>2</span>
              <div className="plus-image">
                <img src={plus} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="head-item">
          <img src={Avocado} alt="Krosang Thats It" />
          <h2>2pcs of Amazing Avocado</h2>

          <div className="food-order">
            <div className="food-price">
              <span>
                <a href="">15%</a>
                <p>Rp 80,000,00</p>
              </span>
              <h4> Rp 68.000,00</h4>
            </div>
            <div className="food-quantity">
              <img src={minus} alt="" />
              <span>2</span>
              <div className="plus-image">
                <img src={plus} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="head-item">
          <img src={Lettuce_Stuff} alt="Biscuit Mama with Susu" />
          <h2>Lettuce with Stuff</h2>
          <div className="food-order">
            <div className="food-price">
              <span>
                <a href="">15%</a>
                <p>Rp 200,000,00</p>
              </span>
              <h4> Rp 170.000,00</h4>
            </div>
            <div className="order">
              <button>Order</button>
            </div>
          </div>
        </div>
      </div>

      <div className="food-heading">
        <h1>Explore Our Best Menu</h1>
        <p>View All</p>
      </div>
      <div className="categories">
        <button className="active">All</button>
        <button>Main Course</button>
        <button>Appetizer</button>
        <button>Dessert</button>
        <button>Side Dishes</button>
        <button>Beverages</button>
        <button>Kids</button>
        <div className="filter-image">
          <div className="image">
            <img src={filter} alt="" />
          </div>
          <button className="filter">Filter</button>
        </div>
      </div>

      <div className="menu-grid">
        <div className="menu-item">
          <img src={biscuit} alt="Biscuit Mama with Susu" />
          <h2>Biscuit Mama with Susu</h2>
          <div className="food-order">
            <div className="food-price">
              <p>Price per portion</p>
              <h2> Rp 60.000,00</h2>
            </div>
            <div className="order">
              <button>Order</button>
            </div>
          </div>
        </div>

        <div className="menu-item">
          <img src={krosang} alt="Krosang Thats It" />
          <h2>Krosang Thats It</h2>

          <div className="foods">
            <div className="food-rate">
              <p>Price per portion </p>
              <h2>Rp 78.000,00</h2>
            </div>
            <div className="food-quantity">
              <img src={minus} alt="" />
              <span>2</span>
              <div className="plus-image">
                <img src={plus} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="menu-item">
          <img src={strawberry} alt="Strawberry Float" />
          <h2>Strawberry Float</h2>
          <div className="food-order">
            <div className="food-price">
              <p>Price per portion</p>
              <h2> Rp 45.000,00</h2>
            </div>
            <div className="order">
              <button>Order</button>
            </div>
          </div>
        </div>

        <div className="menu-item">
          <img src={healthy} alt="Healthy Kids Meal" />
          <h2>Healthy Kids Meal</h2>
          <div className="foods">
            <div className="food-rate">
              <p>Price per portion </p>
              <h2>Rp 78.000,00</h2>
            </div>
            <div className="food-quantity">
              <img src={minus} alt="" />
              <span>2</span>
              <div className="plus-image">
                <img src={plus} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="menu-item">
          <img src={mango} alt="Mango Cereal Milk" />
          <h2>Mango Cereal Milk</h2>
          <div className="foods">
            <div className="food-rate">
              <p>Price per portion </p>
              <h2>Rp 78.000,00</h2>
            </div>
            <div className="food-quantity">
              <img src={minus} alt="" />
              <span>2</span>
              <div className="plus-image">
                <img src={plus} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="menu-item">
          <img src={smoothie} alt="Smoothie Brown Berry" />
          <h2>Smoothie Brown Berry</h2>
          <div className="food-order">
            <div className="food-price">
              <p>Price per portion</p>
              <h2> Rp 95.000,00</h2>
            </div>
            <div className="order">
              <button>Order</button>
            </div>
          </div>
        </div>

        <div className="menu-item">
          <img src={rainbow} alt="Rainbow Cupcake" />
          <h2>Rainbow Cupcake</h2>
          <div className="foods">
            <div className="food-rate">
              <p>Price per portion </p>
              <h2>Rp 78.000,00</h2>
            </div>
            <div className="food-quantity">
              <img src={minus} alt="" />
              <span>2</span>
              <div className="plus-image">
                <img src={plus} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="menu-item">
          <img src={mie} alt="Mie Gocengan Spicy" />
          <h2>Mie Gocengan Spicy</h2>
          <div className="food-order">
            <div className="food-price">
              <p>Price per portion</p>
              <h2> Rp 95.000,00</h2>
            </div>
            <div className="order">
              <button>Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default menu;
