import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../node_modules/uikit/dist/css/uikit.min.css";
import "../../node_modules/uikit/dist/js/uikit.min.js";
import "../../node_modules/uikit/dist/js/uikit-icons.min.js";
import Admin from "./AdminPage/admin";
import LogIn from "./LogIn/login";
import CheckIn from "./CheckIn/checkin";

import generateCar from "./CheckIn/js/left-components/generateCar";
import { NavButton } from "./CheckIn/js/heading/navButton";
import { LogoCheckin } from "./CheckIn/js/heading/logo-checkin";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
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
          {/* <nav>
            <ul>
              <li>
                <Link to="/login">login</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <Link to="/checkin">CheckIn</Link>
              </li>
            </ul>
          </nav> */}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/checkin">
              <CheckIn />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            {/* <Route path="/checkout">
              <CheckOut />
            </Route> */}
          </Switch>
        </div>
      </Router>
      // {/* <Admin/> */}
      // {/* <CheckIn/> done */}
      // {/* <LogIn/> */}
    );
  }
}

export default App;
