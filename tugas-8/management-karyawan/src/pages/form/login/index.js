import React, { Component } from "react";
import { RowInput } from "../../../components/elements";
import { Redirect } from "react-router-dom";
import { NavBar } from "../../../template";



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLogin: 0,
      link: "/",
    };
    this.showSecret = this.showSecret.bind(this);
  }


  setValueInput = (el) => {
    this.setState({
      [el.name]: el.value,
    });
  };

  doLogin = () => {
    const { username, password } = this.state;
    console.log(username);
    console.info(password);

    if (username === "admin" && password === "admin") {
      this.setState({
        isLogin: 1,
      });
    } else if (username === "user" && password === "user") {
      this.setState({
        isLogin: 2,
      });
    }
  };

  showSecret = () => {
      // alert("selamat datang karyawan")
      this.setState({
        link: "./karyawan",
      });
  };

  render() {
    return (
      <div
        style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}
      >
        <div style={{ width: "max-content" }}>
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

          <div style={{ marginTop: "10px" }}>
            <button onClick={this.doLogin.bind(this)}>Login</button>
          </div>

          {this.state.isLogin === 1 ? (
            <Redirect to="/admin"/>
          ) : null}


          {this.state.isLogin === 2 ? (
          <Redirect to="/karyawan"/>
          ) : null}
          

        </div>
      </div>
    );
  }
}


export default Login;
