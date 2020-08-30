const { Router, Switch, Link } = require("react-router-dom");
const { Menu, MenuItem } = require("@material-ui/core");
import React, { Component } from "react";
import Registrasi from "../pages";

class Navbar extends Component {
  render() {
    return (
      <Menu>
        <Link to="/registrasi">
          <MenuItem>Regitrasi</MenuItem>
        </Link>
      </Menu>

      <Switch>
      <Router path="/registrasi" component={Registrasi}/>
      </Switch>
    );
  }
}

export default Navbar;
