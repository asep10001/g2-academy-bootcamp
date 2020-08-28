import React, { Component } from "react";
import { RowInput } from "../../component/element";
import Member from "../member/member";

var member=[];

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isLogin: false,
    };
  }

  setValueInput = (tag) => {
    this.setState({
      [tag.name]: tag.value,
    });
  };

    doRegister=() =>{

           const { username, password } = this.state;
           member.push(<tr>{this.state.username}</tr>)
           console.log(username, password, member);
    }
  render() {
    return (
      <div>
        <Member hidden="true" nama={member} />
        <RowInput
          label="Username: "
          type="username"
          name="username"
          value={this.state.username}
          setValue={(tag) => this.setValueInput(tag)}
        />

        <RowInput
          label="password: "
          type="password"
          name="password"
          value={this.state.password}
          setValue={(tag) => this.setValueInput(tag)}
        />

        <RowInput
          label="repassword: "
          type="repassword"
          name="repassword"
          value={this.state.repassword}
          setValue={(tag) => this.setValueInput(tag)}
        />

        <div style={{ marginTop: "10px" }}>
          <button onClick={this.doRegister}>Register</button>
        </div>
      </div>
    );
  }
}

export default Register;
