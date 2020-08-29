import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Home, Login, ProfileKaryawan, HalamanHRD } from "../../pages";
import { MenuItem, Button, Menu } from "@material-ui/core";
import InputKaryawan from "../../pages/inputKaryawan";
import DaftarKaryawan from "../../pages/daftarKaryawan";
import Admin from "../../pages/admin";
import Register from "../../pages/register";
import Member from "../../pages/member";
import UpdateKaryawan from "../../pages/form/update";

// import Popper from '@material-ui/core/Popper';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      hidden: true,
      isLogin: false
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
          <Link to="/logout">
            <MenuItem>Logout</MenuItem>
          </Link>
          <Link to="/register">
            <MenuItem>Register</MenuItem>
          </Link>
          <Link to="/karyawan">
          </Link>
          <Link to="/admin">
          </Link>
          <Link to="/input_karyawan" >
          <MenuItem>Input Karyawan</MenuItem>
          </Link>
          <Link to="/daftar_karyawan" >
          <MenuItem>Daftar Karyawan</MenuItem>
          </Link>
        </Menu>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login">
            <Login logInStatus={this.props.isLogin}/>
          </Route>
          <Route path="/register" component={Register} />
          <Route path="/karyawan" component={ProfileKaryawan} />
          <Route path="/admin" component={Admin} />
          <Route path="/member" component={Member} />

          <Route path="/input_karyawan" component={InputKaryawan} />
          <Route path="/daftar_karyawan" component={DaftarKaryawan} />
          <Route path="/update" component={UpdateKaryawan} />
        </Switch>
      </div>
    );
  }
}
export default NavBar;
