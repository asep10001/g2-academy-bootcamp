import React, { Component } from "react";
import { Input, Card, Grid } from "@material-ui/core";
import { RowInput } from "../../components/elements";
import { Redirect } from "react-router-dom";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLogin: 0,
      link: "/",
    };
  }

  setValueInput = (el) => {
    this.setState({
      [el.name]: el.value,
    });
  };

  checkAva=()=>{
    const { username, password } = this.state;

    for (let i = 0; i < this.props.dataUser.length; i++) {
      if(username === this.props.dataUser[i].username){
        return(
          false,
          alert('MAAF USERNAME INI TIDAK TERSEDIA')
        )
      }
    }
  }

  doRegister = () => {
    const { username, password, repassword } = this.state;
    console.log(password === repassword);
    if (password === repassword) {
      this.props.registerUser({
        username: this.state.username,
        password: this.state.password
      })
      this.props.changeLogin(2);

      alert(`SELAMAT ${username.toUpperCase()} ANDA TERDAFTAR`)
    } else if (repassword !== password) {
      alert("password tidak sama");
      this.props.changeLogin(0);
    }

  };

  render() {
    return (
      <div id="register-form">
        <Card id="register-card">
          <Grid container>
            <Grid item xs={6}>
              <img src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png"></img>
            </Grid>
            <Grid item xs={6}>
              <span id="span-register-form">USERNAME</span>
              <RowInput
                label="Username:"
                placeholder="username"
                type="username"
                name="username"
                value={this.state.username}
                setValue={(el) => this.setValueInput(el)}
              />
              <span id="span-register-form">PASSWORD</span>
              <RowInput
                label="Password:"
                type="password"
                name="password"
                value={this.state.password}
                setValue={(el) => this.setValueInput(el)}
              />
              <span id="span-register-form">RETYPE YOUR PASSWORD</span>
              <RowInput
                label="Retype Password:"
                type="repassword"
                name="repassword"
                value={this.state.repassword}
                setValue={(el) => this.setValueInput(el)}
              />

              <div style={{ marginTop: "10px" }}>
                <button
                  className="register-form-btn"
                  onClick={this.doRegister.bind(this)}
                >
                  Register
                </button>
              </div>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

export default Register;
