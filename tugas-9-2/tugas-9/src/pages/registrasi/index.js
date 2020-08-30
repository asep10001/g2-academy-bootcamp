import React, {Component}  from "react";
import { Input, InputLabel, Button } from "@material-ui/core";

class Registrasi extends Component {
    constructor(props) {
        super(props)
  //array penampung object user
  //deklarasi email password dan name untuk state    
        this.state = {
            userData : [],
            email : "",
            name: "",
            password:"",
            rePassword:""
             
        }
    this.userDataArray = []

    }
    
//   const [userData, setUserData] = useState([]);
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [rePassword, setrePassword] = useState("");

  //membuat beberapa setValue untuk input yang berbeda
  onChangeValueName = (el) => {
    this.setState({
        name: el.target.value
    })
    //debug
    console.log(this.state.name);
  };
  onChangeValueEmail = (el) => {
    this.setState({
        email: el.target.value
    })
    //debug
    console.log(this.state.email);
  };
  onChangeValuePassword = (el) => {
    this.setState({
        password: el.target.value
    })
    //debug
    console.log(this.state.password);
  };

  onChangeValuerePassword = (el) => {
    this.setState({
        rePassword: el.target.value
    })
    //debug
    console.log(this.state.rePassword);
  };

  // fungsi untuk memasukan data user baru
  saveUser = () => {
    //push object informasi user ke array userData
    this.userDataArray.push({name:this.state.name, email: this.state.email, password: this.state.password})
    this.setState(
        {
            userData: this.userDataArray
        }
    )
    //debug
    console.log(`user sekarang: ${JSON.stringify(this.state.userData)}`)

      
    }

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
   onSubmit = (e) => {
    e.preventDefault();
    //cek semua field terisi dan return true
    this.checkField();
    //cek jika password dan retype password sama
    if (this.state.password === this.state.rePassword && this.checkField() === true) {
      //maka alert selamat anda berhasil login
      this.saveUser();
      alert("selamat anda sudah terdaftar");
    } else if (this.state.password!==this.state.rePassword){
      //maka alert password dan repassword tidak sama
      alert("password tidak sama")
    }
  };
  render(){
  return (
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
      <div>
        <Button type="submit" color="secondary" onClick={this.onSubmit}>
          REGISTER ME
        </Button>
      </div>
    </div>
  );
  }
};

export default Registrasi;