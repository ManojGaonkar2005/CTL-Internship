import React from "react";
import "./Foodislic.css"
import arrowright from "./Icon/arrow-right.png"
import bell from "./Icon/bell.png"
import chat from "./Icon/chat.png"
import payment from "./Icon/payment.png"
import file from "./Icon/file.png"
import filter from "./Icon/filter.png"
import foodservice from "./Icon/food-service.png"
import gear from "./Icon/gear.png"
import hdfc from "./Icon/hdfc.png"
import left from "./Icon/left.png"
import logo from "./Icon/logo.png"
import menu from "./Icon/menu.png"
import paytem from "./Icon/paytem.png"
import previous from "./Icon/previous.png"
import rbell from "./Icon/r-bell.png"
import sindiket from "./Icon/sindiket.png"
import star from "./Icon/star.png"
import todown from "./Icon/to-bottom.png"
import totop from "./Icon/to-top.png"
import double from "./Icon/double.png"
import visa from "./Icon/visa.png"
import user from "./Icon/user.png"
import b_been_burger from "./Imag/b-been-burger.png"
import b_veg_burger from "./Imag/b-veg-burger.png"
import b_wild_burger from "./Imag/b-wild-burger.png"
import burger from "./Imag/burger.png"
import chese_burger from "./Imag/chese-burger.png"
import chicken from "./Imag/chicken.png"
import donats from "./Imag/donats.png"
import fuchka from "./Imag/fuchka.png"
import hot_dog from "./Imag/hot-dog.png"
import ice from "./Imag/ice.png"
import i_botoom from "./Imag/i-botoom.png"
import meat_burger from "./Imag/meat-burger.png"
import pizza from "./Imag/pizza.png"
import potato from "./Imag/potato.png"
import r_chese_burger from "./Imag/r-chese-burger.png"
import r_meat_burger from "./Imag/r-meat-burger.png"
import r_veg_burger from "./Imag/r-veg-burger.png"
import veg_burger from "./Imag/veg-burger.png"


const Foodislic=()=>{
return(
    <div className="container">
        <div className="header">
            <div className="logo"><img src={logo} alt="" /></div>
            <div className="search-input"><input type="text" placeholder="Search food"/><span className="filter">Filter <img src={filter} alt="" /></span></div>
            <div className="user-detail"><span className="r-bell"><img src={rbell} alt="" /></span><span className="user"><img src={user} alt="" /></span><span className="down-arrow"><img src={todown} alt="" /></span><button className="user-button">David Brown</button></div>
        </div> 
        <div className="main-container">
            <div className="left-container">
                <div className="main-options">
                    <div className="main-option-f"><span className="menu-icon"><img src={menu} alt="" /></span>Dashbord</div>
                    <div className="main-option"><img src={foodservice} alt="" />Food Order</div>
                    <div className="main-option"><img src={star} alt="" />FeedBack</div>
                    <div className="main-option"><img src={chat} alt="" />Message</div>
                    <div className="main-option"><img src={file} alt="" />Order History</div>
                    <div className="main-option"><img src={payment} alt="" />Payment details</div>
                    <div className="main-option"><img src={gear} alt="" />Customization</div>
                </div>
                <div className="bottom-details">
                        <span className="b-i"><img src={i_botoom} alt="" /></span>
                        <div className="b-heading">How to order food?</div>
                        <p>Ordering food from our web app is a seanless and delightful experience designed to satisfy you seffortlessly... </p>
                        <div className="arrow-icon">
                        <span className="arrow-i">
                        <img src={previous} alt="" /></span>
                        <span className="arrow-ii">
                        <img src={arrowright} alt="" /></span>                            
                        </div>
                </div>
            </div>
            <div className="right-container">
                <div className="heading-contant">Explore Categories</div>
                <div className="main-right-container">
                    <div className="bottom-left-conatiner">
                    <div className="explore-cat-options">
                        <div className="exp-cat-boxes">
                            <div className="exp-cat-boxe"><span className="f-img"><img src={donats} alt="" /></span>Donuts</div>
                            <div className="exp-cat-boxe"><span className="f-img"><img src={burger} alt="" /></span>Burger</div>
                            <div className="exp-cat-boxe"><span className="f-img"><img src={ice} alt="" /></span>Ice</div>
                            <div className="exp-cat-boxe"><span className="f-img"><img src={potato} alt="" /></span>Potato</div>
                            <div className="exp-cat-boxe"><span className="f-img"><img src={potato} alt="" /></span>Potato</div>
                        </div>
                        <div className="exp-cat-boxes">
                            <div className="exp-cat-boxe"><span className="f-img"><img src={fuchka} alt="" /></span>Fuchka</div>
                            <div className="exp-cat-boxe"><span className="f-img"><img src={pizza} alt="" /></span>Pizza</div>
                            <div className="exp-cat-boxe"><span className="f-img"><img src={hot_dog} alt="" /></span>Hot Dog</div>
                            <div className="exp-cat-boxe"><span className="f-img"><img src={chicken} alt="" /></span>Chicken</div>
                            <div className="exp-cat-boxe"><span className="f-img"><img src={chicken} alt="" /></span>Chicken</div>
                        </div>
                    </div>
                    <div className="sub-heading">
                        <div className="s-heading">Popular</div>
                        <div className="s-heading">Recen</div>
                    </div>
                    <div className="main-contant-boxs-1">
                        <div className="main-box1">
                            <img src={r_veg_burger} alt="" />
                            <div className="sub-heading">Vegetable Burger</div>
                            <div className="food-amount">
                                <div className="price-heading"><a href="">$31</a><span className="line-through">$28.30</span></div><div className="review"><img src={star} alt="" />2.5k</div>
                                
                            </div><div className="food-buttons">
                                    <button className="whishlist-button">Whishlist</button>
                                    <button className="order-now">Order Now</button>
                                </div>
                        </div>
                        <div className="main-box1">
                            <img src={r_meat_burger} alt="" />
                            <div className="sub-heading">Meat Burger</div>
                            <div className="food-amount">
                                <div className="price-heading"><a href="">$28</a><span className="line-through">$28.30</span></div><div className="review"><img src={star} alt="" />2.5k</div>
                                
                            </div><div className="food-buttons">
                                    <button className="whishlist-button">Whishlist</button>
                                    <button className="order-now">Order Now</button>
                                </div>
                        </div>
                        <div className="main-box1">
                            <img src={r_chese_burger} alt="" />
                            <div className="sub-heading">Cheese Burger</div>
                            <div className="food-amount">
                                <div className="price-heading"><a href="">$32</a><span className="line-through">$28.30</span></div><div className="review"><img src={star} alt="" />2.5k</div>
                               
                            </div> <div className="food-buttons">
                                    <button className="whishlist-button">Whishlist</button>
                                    <button className="order-now">Order Now</button>
                                </div>
                        </div>
                    </div>
                    <div className="main-contant-boxs-2">
                        <div className="main-box2">
                            <img src={b_veg_burger} alt="" />
                            <div className="sub-heading">Vegetable Burger</div>
                            <div className="food-amount">
                                <div className="price-heading"><a href="">$30</a><span className="line-through">$28.30</span></div><div className="review"><img src={star} alt="" />2.5k</div>
                                
                            </div><div className="food-buttons">
                                    <button className="whishlist-button">Whishlist</button>
                                    <button className="order-now">Order Now</button>
                                </div>
                        </div>
                        <div className="main-box2">
                            <img src={b_been_burger} alt="" />
                            <div className="sub-heading">Been Burger</div>
                            <div className="food-amount">
                                <div className="price-heading"><a href="">$15</a><span className="line-through">$28.30</span></div><div className="review"><img src={star} alt="" />2.5k</div>
                                
                            </div><div className="food-buttons">
                                    <button className="whishlist-button">Whishlist</button>
                                    <button className="order-now">Order Now</button>
                                </div>
                        </div>
                        <div className="main-box2">
                            <img src={b_wild_burger} alt="" />
                            <div className="sub-heading">Wild Salmon Burger</div>
                            <div className="food-amount">
                                <div className="price-heading"><a href="">$40</a><span className="line-through">$28.30</span></div><div className="review"><img src={star} alt="" />2.5k</div>
                                
                            </div><div className="food-buttons">
                                    <button className="whishlist-button">Whishlist</button>
                                    <button className="order-now">Order Now</button>
                                </div>
                            
                        </div>
                    </div>
                    </div>
                    <div className="bottom-right-container">
                        <div className="sub-heading">Invoice</div>
                        <div className="coloum-contants">
                            <div className="coloum-contant">
                                <img src={veg_burger} alt="" />
                                <div className="side-info">
                                <div className="sub-heading">Vegetable Burger</div>
                                <div className="price-heading"><a href="">$25</a></div>
                                </div>
                            </div>
                            <div className="coloum-contant">
                                <img src={meat_burger} alt="" />
                                <div className="side-info">
                                <div className="sub-heading">Meat Burger</div>
                                <div className="price-heading"><a href="">$28</a></div>
                                </div>
                            </div>
                            <div className="coloum-contant">
                                <img src={chese_burger} alt="" />
                                <div className="side-info">
                                <div className="sub-heading">Cheese Burger</div>
                                <div className="price-heading"><a href="">$32</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="payment-container">
                            <div className="payment-heading">Payment Summary</div>
                            <div className="sub-total">
                                <div className="payment-name">Sub Total</div>
                                <div className="payment-price">$85</div>
                            </div>
                            <div className="sub-total">
                                <div className="payment-name">Tax</div>
                                <div className="payment-price">-$6</div>
                            </div>
                            <div className="payment-sub-heading">
                                <div className="payment-name">Total Payment</div>
                                <div className="payment-price">$79</div>
                            </div>
                            <div className="payment-method">Payment Method</div>
                            <div className="payment-Images">
                                <div className="img-row">
                                    <img src={sindiket} alt="" />        
                                    <img src={paytem} alt="" />        
                                </div>
                                <div className="img-row">
                                    <img src={hdfc} alt="" />        
                                    <img src={visa} alt="" />        
                                </div>
                            </div>
                        </div>
                        <div className="payment-button">
                            <button>Place an Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
export default Foodislic;