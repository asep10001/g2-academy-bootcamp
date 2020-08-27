import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavButton extends Component {
  render() {
    return (
      <div className="uk-width-1-3 uk-text-right">
        <button className="uk-button uk-button-primary" id="home">
        <Link to="/login">Login</Link>
        </button>
           <button className="uk-button uk-button-primary" id="checkout">
           <Link to="/admin">Admin</Link>
          </button>
          <button className="uk-button uk-button-primary" id="checkout">
          <Link to="/checkin">Check In</Link>
          </button>
          <button className="uk-button uk-button-primary" id="checkout">
          <Link to="/checkout">Check Out</Link>
          </button>
      
      </div>
    );
  }
}
