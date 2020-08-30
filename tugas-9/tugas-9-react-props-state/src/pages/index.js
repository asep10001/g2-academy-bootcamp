import React, { useState, Component } from "react";
import { Input, InputLabel, Button } from "@material-ui/core";

const Registrasi = ()=> {
    //deklarasi email password dan name untuk hooks
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    return (
      <div>
        {/* mencoba membuat input dari material ui */}
        <InputLabel>Your Email</InputLabel>
        <Input name="email" type="e-mail"></Input>
        <InputLabel>Your Chosen Username</InputLabel>
        <Input name="username" type="text"></Input>
        <InputLabel>Your Desired Password</InputLabel>
        <Input name="password" type="password"></Input>
        <InputLabel>Retype Your Desired Password</InputLabel>
        <Input name="retype-password" type="password"></Input>
        <div>
          <Button color="secondary">REGISTER ME</Button>
        </div>
      </div>
    );
  
}

export default Registrasi;
