import React, {  Component } from "react";
import { Input, InputLabel, Button, Hidden } from "@material-ui/core";
import Member from "../member";


class Login extends Component {
  constructor(props) {
    super(props);

    //array penampung object user
    //deklarasi email password dan name untuk state
    this.state = {
      userData: this.props.userData,
      isLogin: this.props.statusLogin,
      email: "",
      name: "",
      password: "",
      rePassword: "",
    };
    this.userDataArray = this.state.userData;
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


  doLogin = () => {
    const { name, password } = this.state
    // console.log(username)
    // console.info(password)

    for (let i = 0; i < this.props.data.length; i++) {
      if(this.props.data[i].name === name && this.props.data[i].password ===  password){
        this.props.changeLogin(true)
        alert("berhasil login")
      } else if (this.props.data[i].name !== name || this.props.data[i].password !==  password){
        this.props.changeLogin(false)
        alert("username atau password yang anda masukan salah")
      }
      
    }
    console.log(this.props.data)
  }

  // fungsi untuk memasukan data user baru
  saveUser = () => {
    //push object informasi user ke array userData
    this.state.userData.push({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
    this.setState({
      userData: this.userDataArray,
    });


    //debug
  };

  //checkField
  checkField = () => {
    if (this.state.name === "") {
      alert("silahkan isi nama anda");
    } else if (this.state.password === "") {
      alert("silahkan isi password anda");
    } else {
      return true;
    }
  };

  render() {
    return (
      <div>
        {/* mencoba membuat input dari material ui */}
        <InputLabel>Your Username</InputLabel>
        <Input
          name="username"
          type="text"
          onChange={(el) => this.onChangeValueName(el)}
        ></Input>
        <InputLabel>Your Password</InputLabel>
        <Input
          name="password"
          type="password"
          onChange={(el) => this.onChangeValuePassword(el)}
        ></Input>
      
        <div>
          <Button type="submit" color="primary" onClick={this.doLogin}>
            LOGIN
          </Button>
        </div>
      </div>
    );
  }
}


export  default Login;