import React, { Component } from "react";
import { RowInput } from "../../../components/elements";
import { Redirect } from "react-router-dom";
import { NavBar } from "../../../template";
import { Card } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  setValueInput = (el) => {
    this.setState({
      [el.name]: el.value,
    });
  };

  doLogin = () => {
    const { username, password } = this.state;

    for (let i = 0; i < this.props.dataUser.length; i++) {
      if (
        username === this.props.dataUser[i].username &&
        password === this.props.dataUser[i].password
      ) {
        if (username === "admin") {
         return(
          this.props.changeLogin(1),
          alert("SELAMAT DATANG ADMIN")
         )
        } else {
          
          return(
            this.props.changeLogin(2),
            alert(`SELAMAT DATANG ${(this.props.dataUser[i].username).toUpperCase()}`)
          )
        }
      } 
      continue
    }



        return(
          this.props.changeLogin(0),
          alert("MAAF USERNAME ATAU PASSWORD ANDA SALAH ANDA SALAH")
        )

      
  };

  render() {
    if (this.props.LogInStatus) return <Redirect to="/" />;

    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <Card>
              <span className="login100-form-logo">
                <FontAwesomeIcon icon={faMountain} />
              </span>
              <span className="login100-form-title p-b-34 p-t-27">Log in</span>
              <div style={{ width: "max-content" }}>
                <RowInput
                  label="Username:"
                  type="text"
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
                <div className="contact100-form-checkbox">
                  <input
                    className="input-checkbox100"
                    id="ckb1"
                    type="checkbox"
                    name="remember-me"
                  ></input>
                  <label className="label-checkbox100" htmlFor="ckb1">
                    Remember me
                  </label>
                </div>
                <div className="container-login100-form-btn">
                  <button
                    className="login100-form-btn"
                    onClick={this.doLogin.bind(this)}
                  >
                    Login
                  </button>
                </div>

                <div className="text-center p-t-90">
                  <a className="txt1" href="#">
                    Forgot Password?
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
