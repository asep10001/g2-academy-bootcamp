import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavLink from "react-bootstrap/esm/NavLink";
import { Switch, Route } from "react-router-dom/esm/react-router-dom";
import Home from "../../pages/home";
import InputData from "../../pages/input";
import LogIn from "../../pages/login";
import { Link } from "react-router-dom";

export class NavBar extends Component {


  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
          <NavbarBrand>
            <Link to="/">G2 BOOTCAMP FAMILY</Link>
          </NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink >
                <Link to="/input">Input</Link>
              </NavLink>
              <NavLink>Edit Data</NavLink>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item >Action</NavDropdown.Item>
                <NavDropdown.Item >
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item >
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link >
                <Link to="/login">Log In</Link>
              </Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Navbar>

        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LogIn} />
            <Route path="/input" component={InputData} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default NavBar;
