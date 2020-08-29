import React, { Component } from "react";
import { Input } from "@material-ui/core";
import { RowInput } from "../../components/elements";
import { Redirect } from "react-router-dom";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLogin: false,
      link: "/",
    };
  }

  setValueInput = (el) => {
    this.setState({
      [el.name]: el.value,
    });
  };

  doRegister = () => {
    const { username, password, repassword } = this.state;
    console.log(username);
    console.info(password);

    if (password === repassword ) {
      this.setState({
        isLogin: 2,
      });
    } else if (username  !== password) {
      alert ("password tidak sama")
      this.setState({
        isLogin: 0,
      });
    }
  };

  render() {
    return (
      <>
        <RowInput
          label="Username:"
          type="username"
          name="username"
          value={this.state.username}
          setValue={(el) => this.setValueInput(el)}
        />
        <RowInput
          label="Password:"
          type="password"
          name="password"
          value={this.state.password}
          setValue={(el) => this.setValueInput(el)}
        />
        <RowInput
          label="Retype Password:"
          type="repassword"
          name="repassword"
          value={this.state.repassword}
          setValue={(el) => this.setValueInput(el)}
        />

        <div style={{ marginTop: "10px" }}>
          <button onClick={this.doRegister.bind(this)}>Register</button>
        </div>
      </>
    );
  }
}

export default Register;
