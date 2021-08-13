import React, { Component } from "react";
import "./Order.scss";
import exit from "../../assets/exit.svg";
import location from "../../assets/location.svg";
import applepay from "../../assets/ApplePay.svg";

export default class Addtobag extends Component {
  render() {
    return (
      <>
        <header className="order">
          <img className="order__exit" src={exit} alt="exit button" />
          <h1 className="order__title">Your Order</h1>
        </header>
        <section className="address">
          <img className="address__img " src={location} alt="location dot" />
          <h2 className="address__info">
            Your Location <br />
          </h2>
          <button className="address__edit">
            <a href="#" alt="edit item">
              Edit
            </a>
          </button>
        </section>
        <section className="summary">
          <div className="summary__top">
            <h3>Big Mac</h3>
            <p>$4.99</p>
          </div>
          <div className="summary__bottom">
            <h4 className="summary__qty">Quantity: 1</h4>
            <button className="summary__button">
              <a href="#" alt="edit item">
                Edit
              </a>
            </button>
            <button className="summary__button">
              <a href="#" alt="remove item">
                Remove
              </a>
            </button>
          </div>
        </section>
        <section className="purchase">
          <h2 className="purchase__title">Order summary</h2>
          <div className="purchase__subtotal">
            <p className="purchase__subtotal--text">Subtotal</p>
            <p className="purchase__subtotal--text">$4.99</p>
          </div>
          <div className="purchase__tax">
            <p className="purchase__tax--text">BC-GST</p>
            <p className="purchase__tax--text">$0.25</p>
          </div>
          <div className="purchase__total">
            <h2>Total</h2>
            <p className="purchase__total--text">$5.24</p>
          </div>
        </section>
        <section className="payment">
          <h3 className="payment__title">Select your payment method</h3>
          <button className="payment__applepay">
            <img src={applepay} alt="apple pay button" />{" "}
          </button>
          <p>or</p>
          <button className="payment__creditcard">
            Pay with your credit card
          </button>
          <h5 className="payment__disclaimer">
            Note: You will not be charged until you pick up your order
          </h5>
        </section>
      </>
    );
  }
}
