import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Home, Login, Register, Member } from "../../pages";
import { Menu } from "../../component/element";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "10px",
          }}
        >
          <Link to="/">
            <Menu>Home</Menu>
          </Link>
          <Link to="/about">
            <Menu>About</Menu>
          </Link>
          <Link to="/contact">
            <Menu>Contact</Menu>
          </Link>
          <Link to="/login">
            <Menu>Login</Menu>
          </Link>
          <Link to="/register">
            <Menu>Register</Menu>
          </Link>
          <Link to="/member">
            <Menu>Member</Menu>
          </Link>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/member" component={Member} />
        </Switch>
      </div>
    );
  }
}

export default NavBar;
