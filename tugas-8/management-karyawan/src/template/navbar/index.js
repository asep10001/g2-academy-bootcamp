import React, { Component } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { Home, Login, ProfileKaryawan, HalamanHRD } from "../../pages";
import { MenuItem, Button, Menu } from "@material-ui/core";
import InputKaryawan from "../../pages/inputKaryawan";
import DaftarKaryawan from "../../pages/daftarKaryawan";
import Admin from "../../pages/admin";
import Register from "../../pages/register";
import Member from "../../pages/member";
import UpdateKaryawan from "../../pages/form/update";
import PenempatanDivisi from "../../pages/PenempatanDivisi";
import InputDivisi from "../../pages/inputDivisi";

// import Popper from '@material-ui/core/Popper';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: 1,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  changeLogInStatus = (newStatus) => {
    this.setState({
      isLogin: newStatus,
    });
  };

  hideMenu = () => {
    if (this.state.isLogin === 1) {
      return (
        <>
          <Redirect to="/admin" />

          <MenuItem onClick={() => this.changeLogInStatus(0)}>
            Logout
          </MenuItem>
          <Link to="/admin"></Link>
          <Link to="/input_karyawan">
            <MenuItem>Input Karyawan</MenuItem>
          </Link>
          <Link to="/daftar_karyawan">
            <MenuItem>Daftar Karyawan</MenuItem>
          </Link>
          <Link to="/input_divisi">
            <MenuItem>Input Divisi</MenuItem>
          </Link>
          <Link to="/daftar_divisi">
            <MenuItem>Daftar Divisi</MenuItem>
          </Link>
          <Link to="/assigned">
            <MenuItem>Assigned Divition</MenuItem>
          </Link>
        </>
      );
    }

    if (this.state.isLogin === 2) {
      return (
        <>
          <Redirect to="/karyawan" />
          <MenuItem onClick={() => this.changeLogInStatus(0)}>
            Logout
          </MenuItem>
          <Link to="/karyawan"></Link>
          <MenuItem> Karyawan </MenuItem>
        </>
      );
    }

    if (this.state.isLogin === 0) {
      return (
        <>
          <Redirect to="/" />
          <Link to="/login">
            <MenuItem>Login</MenuItem>
          </Link>
          <Link to="/register">
            <MenuItem>Register</MenuItem>
          </Link>
        </>
      );
    }
  };

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
          {this.hideMenu()}
        </Menu>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login">
            <Login
              logInStatus={this.state.isLogin}
              changeLogin={this.changeLogInStatus}
            />
          </Route>
          <Route path="/register" component={Register} />
          <Route path="/karyawan" component={ProfileKaryawan} />
          <Route path="/admin" component={Admin} />
          <Route path="/member" component={Member} />

          <Route path="/input_karyawan" component={InputKaryawan} />
          <Route path="/input_divisi" component={InputDivisi} />
          <Route path="/daftar_karyawan" component={DaftarKaryawan} />
          <Route path="/update" component={UpdateKaryawan} />
          <Route path="/assigned" component={PenempatanDivisi} />
        </Switch>
      </div>
    );
  }
}
export default NavBar;
