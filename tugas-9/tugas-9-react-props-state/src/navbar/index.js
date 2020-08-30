import React, { Component } from "react";
const { Link } = require("react-router-dom");
const { Menu, MenuItem, Button } = require("@material-ui/core");

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: 1,
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
      <>
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
          <Link to="/register">
            <MenuItem>Register</MenuItem>
          </Link>
        </Menu>
      </>
    );
  }
}

export default Navbar;
