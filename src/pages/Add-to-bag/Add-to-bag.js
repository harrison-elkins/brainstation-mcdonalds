import React, { Component } from "react";
import "./Add-to-bag.scss";
import star from "../../assets/star.svg";
import bigmac from "../../assets/big-mack.jfif";
import plus from "../../assets/plus-sign.svg";
import minus from "../../assets/minus-sign.svg";
import chevron from "../../assets/chevron.svg";

export default class Addtobag extends Component {
  render() {
    return (
      <div>
        <header className="addtobag">
          <h1 className="addtobag__title">Big Mac</h1>
          <img className="addtobag__star" src={star} atl="star" />
          <p className="addtobag__details">$4.99</p>
          <p className="addtobag__details">560 Cals</p>
        </header>
        <section className="fooditem">
          <figure>
            <img className="fooditem__img" src={bigmac} alt="food item" />
          </figure>
          <h5 className="fooditem__tag">
            This item is eligible for a bingo chip
          </h5>
        </section>
        <section className="buttons">
          <form className="buttons__form">
            <div
              className="buttons__value"
              id="decrease"
              onclick="decreaseValue()"
              value="Decrease Value"
            >
              <img src={minus} alt="minus" />
            </div>
            <input
              className="buttons__field"
              type="number"
              id="number"
              value="1"
            />
            <div
              className="buttons__value"
              id="increase"
              onclick="increaseValue()"
              value="Increase Value"
            >
              <img src={plus} alt="plus" />
            </div>
          </form>
          <button className="buttons__customize">Customize</button>
          <div className="buttons__facts">
            <h5>View Nutrition & Ingredients</h5>
            <img src={chevron} alt="next button" />
          </div>
        </section>
        <section className="actioncall">
          <button className="actioncall__1">Make it a meal</button>
          <button className="actioncall__2">Add to Order</button>
        </section>
      </div>
    );
  }
}
