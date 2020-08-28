import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Home, Login, ProfileKaryawan, HalamanHRD } from "../../pages";
import Menu from "@material-ui/core/Menu";
import { MenuItem, Button } from "@material-ui/core";
import InputKaryawan from "../../pages/inputKaryawan";

// import Popper from '@material-ui/core/Popper';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      hidden: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  
  handleClick() {
    this.setState({
      open: true,
    });
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }


  render() {
    return (
      <div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
            onClick={this.handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
            // anchorEl={anchorEl}
            // Popper
          keepMounted
          open={Boolean(this.state.open)}
        //   open="false"
        onClose={this.handleClose}
        >
          <Link to="/">
            <MenuItem>Home</MenuItem>
          </Link>
          <Link to="/about">
            <MenuItem>About</MenuItem>
          </Link>
          <Link to="/contact">
            <MenuItem>Contact</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>Login</MenuItem>
          </Link>
          <Link to="/karyawan" hidden={this.state.hidden}>
          </Link>
          <Link to="/admin" hidden={this.state.hidden}>
          </Link>
          <Link to="/input_karyawan" >
              Input Karyawan
          </Link>
        </Menu>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/karyawan" component={ProfileKaryawan} />
          <Route path="/admin" component={HalamanHRD} />
          <Route path="/input_karyawan" component={InputKaryawan} />
        </Switch>
      </div>
    );
  }
}

export default NavBar;
