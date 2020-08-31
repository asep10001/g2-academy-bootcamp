import React, { Component } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Member, Home, Registrasi } from "../../pages";
import { InputLabel, Input } from "@material-ui/core";
import Login from "../../pages/login";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
      email: "",
      name: "",
      password: "",
      rePassword: "",
      isLogin: false,
      hide: false,
      redirect: false,
    };
    this.userDataArray = [];
  }

  //membuat beberapa setValue untuk input yang berbeda
  onChangeValueName = (el) => {
    this.setState({
      name: el.target.value,
    });
    //debug
    console.log(this.state.name);
  };
  onChangeValueEmail = (el) => {
    this.setState({
      email: el.target.value,
    });
    //debug
    console.log(this.state.email);
  };

  onChangeValuePassword = (el) => {
    this.setState({
      password: el.target.value,
    });
    //debug
    console.log(this.state.password);
  };

  onChangeValuerePassword = (el) => {
    this.setState({
      rePassword: el.target.value,
    });
    //debug
    console.log(this.state.rePassword);
  };

  // fungsi untuk memasukan data user baru
  saveUser = () => {
    //push object informasi user ke array userData
    this.userDataArray.push({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
    this.setState({
      userData: this.userDataArray,
    });
  };

  //checkField
  checkField = () => {
    if (this.state.name === "") {
      alert("silahkan isi nama anda");
    } else if (this.state.password === "") {
      alert("silahkan isi password anda");
    } else if (this.state.email === "") {
      alert("silahkan isi email anda");
    } else if (this.state.rePassword === "") {
      alert("silahkan ketik ulang password anda");
    } else {
      return true;
    }
  };

  redirect = (el) => {
    return <Redirect to={el} />;
  };

  checkAva = () => {
    if (this.state.userData !== []) {
      for (let i = 0; i < this.state.userData.length; i++) {
        if (this.state.userData[i].name === this.state.name) {
          alert("maaf username tidak tersedia");
          return false;
        } else if (this.state.userData[i].email === this.state.email) {
          alert("maaf email ini sudah digunakan");
          return false;
        } else {
          return true;
        }
      }
    } else {
      return true;
    }
  };

  onSubmit = () => {
    //cek semua field terisi dan return true
    this.checkField();
    console.log(this.checkAva());
    //cek jika password dan retype password sama
    if (
      this.state.password === this.state.rePassword &&
      this.checkField() === true &&
      (this.checkAva() === true || this.checkAva() === undefined)
    ) {
      //maka alert selamat anda berhasil login
      this.saveUser();
      alert("selamat anda berhasil register");
      this.setState({
        isLogin: true,
        hide: true,
      });
      return true;
    } else if (this.state.password !== this.state.rePassword) {
      //maka alert password dan repassword tidak sama
      alert("password tidak sama");
    }
    return false;
  };

  hideApp = () => {
    this.setState({
      hide: true,
    });
  };

  unHide = () => {
    this.setState({
      hide: false,
    });
  };

  changeLoginStatus = (newStatus) => {
    this.setState({
      isLogin: newStatus,
    });
  };

  changeLoginStatus = (newStatus) => {
    this.setState({
      isLogin: newStatus,
    });
  };

  hideMenuLogin = () => {
    if (this.state.isLogin) {
      return (
        <>
          <Link to="/">
            <Button onClick={this.hideApp}>Home</Button>
          </Link>
          <Link to="/member">
            <Button onClick={this.hideApp}>Member</Button>
          </Link>
          <Link to="/">
            <Button onClick={() => this.changeLoginStatus(false)}>
              LOGOUT
            </Button>
          </Link>
        </>
      );
    }

    return (
      <>
        <Link to="/">
          <Button onClick={this.hideApp}>Home</Button>
        </Link>
        <Link to="/registration">
          <Button onClick={this.unHide}>Registration</Button>
        </Link>
        <Link to="/login">
          <Button onClick={this.hideApp}>Log In</Button>
        </Link>
      </>
    );
  };

  render() {
    console.log(this.state.isLogin);
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "10px",
          }}
        >
          {this.hideMenuLogin()}
          {/* <Link to="/contact">
                        <Menu>Contact</Menu>
                    </Link> */}
          {/* {this.hideMenuLogin()} */}
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login">
            <Login
              data={this.state.userData}
              statusLogin={this.state.isLogin}
              changeLogin={this.changeLoginStatus}
            />
          </Route>
          <Route exact path="/registration">
            <Registrasi statusLogin={this.state.isLogin} />
          </Route>
          <Route exact path="/member">
            <Member
              data={this.state.userData}
              statusLogin={this.state.isLogin}
            />
          </Route>
        </Switch>

        <div hidden={this.state.hide}>
          <div>
            {/* mencoba membuat input dari material ui */}
            <InputLabel>Your Email</InputLabel>
            <Input
              name="email"
              type="e-mail"
              onChange={(el) => this.onChangeValueEmail(el)}
            ></Input>
            <InputLabel>Your Chosen Username</InputLabel>
            <Input
              name="username"
              type="text"
              onChange={(el) => this.onChangeValueName(el)}
            ></Input>
            <InputLabel>Your Desired Password</InputLabel>
            <Input
              name="password"
              type="password"
              onChange={(el) => this.onChangeValuePassword(el)}
            ></Input>
            <InputLabel>Retype Your Desired Password</InputLabel>
            <Input
              name="retype-password"
              type="password"
              onChange={(el) => this.onChangeValuerePassword(el)}
            ></Input>
          </div>
          <div>
            <Link to="/member">
              <Button type="submit" color="secondary" onClick={this.onSubmit}>
                REGISTER ME
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
