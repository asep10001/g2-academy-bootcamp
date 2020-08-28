import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Home, Login, ProfileKaryawan, HalamanHRD } from "../../pages";
import { MenuItem, Button } from "@material-ui/core";
import InputKaryawan from "../../pages/inputKaryawan";
import DaftarKaryawan from "../../pages/daftarKaryawan";
import { Menu } from "../../components/elements";
import Admin from "../../pages/admin";
import Register from "../../pages/register";
import Member from "../../pages/member";

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
        {/* <Menu
          id="simple-menu"
            // anchorEl={anchorEl}
            // Popper
          keepMounted
          open={Boolean(this.state.open)}
        //   open="false"
        onClose={this.handleClose}
        > */}
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
          <Link to="/logout">
            <Menu>Logout</Menu>
          </Link>
          <Link to="/register">
            <Menu>Register</Menu>
          </Link>
          <Link to="/member">
            <Menu>Register</Menu>
          </Link>
          {/* <Link to="/karyawan">
          </Link>
          <Link to="/admin">
          </Link>
          <Link to="/input_karyawan" >
          <MenuItem>Input Karyawan</MenuItem>
          </Link>
          <Link to="/daftar_karyawan" >
          <MenuItem>Daftar Karyawan</MenuItem>
          </Link>
          <Link to="/daftar_karyawan" >
          <MenuItem>Daftar Karyawan</MenuItem>
          </Link> */}
        {/* </Menu> */}

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
        </Switch>
      </div>
    );
  }
}
export default NavBar;
