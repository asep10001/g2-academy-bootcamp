import React, { Component } from "react";
import { Logo } from "./js/logo";
import { H1 } from "./js/h1";
import Form from "./js/form";
import "./css/login.css";
import Heading from "../CheckIn/js/heading/heading";
import { Link } from "react-router-dom";
import { LogoCheckin } from "../CheckIn/js/heading/logo-checkin";

export default class LogIn extends Component {
  render() {
    return (
      <>
        <div className="g-logged-out" uk-grid="true">
          <div className="uk-heading-large uk-child-width-1-2 " uk-grid="true">
            <LogoCheckin />
            <nav className="uk-width-1-2 uk-text-right">
              <button className="uk-button uk-button-primary" id="home">
                <Link to="/login">Login</Link>
              </button>
              <button className="uk-button uk-button-primary" id="checkout">
                <Link to="/admin">Admin</Link>
              </button>
              <button className="uk-button uk-button-primary" id="checkout">
                <Link to="/checkin">Check In</Link>
              </button>
            </nav>
          </div>
          <div>{/* <Heading /> */}</div>
          <div className=" g-logged-out-container">
            <div className="uk-card uk-card-default logged-out-content">
              <Logo />
              <H1 />
              <Form />
            </div>
          </div>
        </div>
      </>
    );
  }
}
