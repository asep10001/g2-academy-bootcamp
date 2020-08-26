import React, { Component } from "react";

export class NavButton extends Component {
  render() {
    return (
      <div className="uk-width-1-3 uk-text-right">
        <button className="uk-button uk-button-primary" id="home">
          HOME
        </button>
        <a href="./keluar.html">
          <button className="uk-button uk-button-primary" id="checkout">
            CHECKOUT
          </button>
        </a>
      </div>
    );
  }
}
