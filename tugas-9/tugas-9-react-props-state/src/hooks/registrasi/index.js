import React, { useState } from "react";
import { Input, InputLabel, Button } from "@material-ui/core";

const Registrasi = () => {
  //array penampung object user
  const [userData, setUserData] = useState([]);
  //deklarasi email password dan name untuk hooks
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setrePassword] = useState("");

  //membuat beberapa setValue untuk input yang berbeda
  const onChangeValueName = (el) => {
    setName(el.target.value);
    //debug
    console.log(name);
  };
  const onChangeValueEmail = (el) => {
    setEmail(el.target.value);
    //debug
    console.log(email);
  };
  const onChangeValuePassword = (el) => {
    setPassword(el.target.value);
    //debug
    console.log(password);
  };

  const onChangeValuerePassword = (el) => {
    setrePassword(el.target.value);
    //debug
    console.log(rePassword);
  };

  // fungsi untuk memasukan data user baru
  const saveUser = () => {
    //push object informasi user ke array userData
    userData.push({name:name, email: email, password: password})
    setUserData(userData)
      console.log(JSON.stringify(userData))
    //debug
    console.log(`user sekarang: ${userData[(userData.length -1)].name}`)

      
    }

  //checkField
  const checkField = () => {
    if (name === "") {
      alert("silahkan isi nama anda");
    } else if (password === "") {
      alert("silahkan isi password anda");
    } else if (email === "") {
      alert("silahkan isi email anda");
    } else if (rePassword === "") {
      alert("silahkan ketik ulang password anda");
    } else {
      return true;
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    //cek semua field terisi dan return true
    checkField();
    //cek jika password dan retype password sama
    if (password === rePassword && checkField() === true) {
      //maka alert selamat anda berhasil login
      saveUser();
      alert("selamat anda sudah terdaftar");
    } else if (password!==rePassword){
      //maka alert password dan repassword tidak sama
      alert("password tidak sama")
    }
  };

  return (
    <div>
      {/* mencoba membuat input dari material ui */}
      <InputLabel>Your Email</InputLabel>
      <Input
        name="email"
        type="e-mail"
        onChange={(el) => onChangeValueEmail(el)}
      ></Input>
      <InputLabel>Your Chosen Username</InputLabel>
      <Input
        name="username"
        type="text"
        onChange={(el) => onChangeValueName(el)}
      ></Input>
      <InputLabel>Your Desired Password</InputLabel>
      <Input
        name="password"
        type="password"
        onChange={(el) => onChangeValuePassword(el)}
      ></Input>
      <InputLabel>Retype Your Desired Password</InputLabel>
      <Input
        name="retype-password"
        type="password"
        onChange={(el) => onChangeValuerePassword(el)}
      ></Input>
      <div>
        <Button type="submit" color="secondary" onClick={onSubmit}>
          REGISTER ME
        </Button>
      </div>
    </div>
  );
};

export default Registrasi;
