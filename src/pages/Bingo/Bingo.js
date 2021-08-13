import React, { Component } from "react";
import "./Bingo.scss";
import spicy from "../../assets/food/spicy-mcchicken.png";
import bigmac from "../../assets/food/bigmac.png";
import cafe from "../../assets/food/mccafe.png";
import artesian from "../../assets/food/artesian.png";
import soda from "../../assets/food/soda.png";
import logo from "../../assets/logo.svg";
import meal from "../../assets/food/meal.png";
import qpounder from "../../assets/food/qpounder.png";

export default class Bingo extends Component {
  render() {
    return (
      <main className="bingo">
        <h1 className="bingo__head">McDonald's Loyalty</h1>
        <div className="bingo-card">
          <h1 className="bingo__title">Your Bingo Card</h1>
          <article className="bingo-tiles">
            <div className="bingo-card__item">
              <img className="food-image" src={bigmac} />
            </div>
            <div className="bingo-card__item">
              <img className="food-image" src={cafe} />
            </div>
            <div className="bingo-card__item">
              <img className="food-image" src={artesian} />
            </div>
            <div className="bingo-card__item">
              <img className="food-image" src={soda} />
            </div>
            <div className="bingo-card__item">
              <img className="food-image" src={logo} />
            </div>
            <div className="bingo-card__item">
              <img className="food-image" src={meal} />
            </div>
            <div className="bingo-card__item">
              <img className="food-image" src={qpounder} />
            </div>
            <div className="bingo-card__item">
              <img className="food-image" src={spicy} />
            </div>
            <div className="bingo-card__item"></div>
          </article>
        </div>
        <div className="offer">
          <p className="offer-head">Offer ends 12/21/2021</p>
          <a className="offer-links">
            View Terms of this offer | Participating Restaurants
          </a>
        </div>
        <div className="play-card">
          <h4 className="play-card__title">How to Play</h4>
          <p className="play-card__text">
            Tap on a menu item in your personalized Bingo Card above. Customize
            and select quantity, then add item to your order. Proceed to
            checkout and place your order. Upon pickup, you will earn a digital
            token on the item, confirming your purchase. Get 3 in a row to win!
          </p>
        </div>
      </main>
    );
  }
}
