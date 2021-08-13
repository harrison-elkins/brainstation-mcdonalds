import React, { Component } from "react";
import arrow from "../../assets/arrow-forward.svg";
import "./Home.scss";

export default class Home extends Component {
  render() {
    return (
      <main className="page">
        <section className="hero">
          <div className="hero__left">
            <h4 className="hero__sub">NEW!</h4>
            <h1 className="hero__head">McDonald's Bingo</h1>
            <p className="hero__text">
              Earn free rewards when you purchase menu items
            </p>
            <button className="hero__btn">View Your Card</button>
          </div>
          <div className="hero__right">
            <img />
          </div>
        </section>
        <p className="disclaimer-text">
          For a limited time only at participating restaurants in Canada
        </p>
        <section className="menu">
          <div>
            <h1>Menu</h1>
            <p>Full Menu</p>
            <img src={arrow} />
          </div>
        </section>
      </main>
    );
  }
}
