import React, { Component } from "react";
import Form from "../../../node_modules/react-bootstrap/Form";
import Button from "../../../node_modules/react-bootstrap/Button";
import Container from "../../../node_modules/react-bootstrap/Container";

export class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      dataUser: [],
    };
  }

  componentDidMount() {
    this.setState({
      dataUser: localStorage.user ? JSON.parse(localStorage.user) : [],
    });

    //debug
    console.log("ini data " + this.state.dataUser);
  }

  onchangeName = (val) => {
    this.setState({
      username: val.target.value,
    });

    //debug
    console.log("ini username " + this.state.username);
  };

  onchangePassword = (val) => {
    this.setState({
      password: val.target.value,
    });
    //debug
    console.log("ini password " + this.state.password);
  };
  //ambil props statusLogin

  //check dan rubah status login

  checkUser = (e) => {
      e.preventDefault();
    //looping data user
    this.state.dataUser.forEach((user, ind) => {
        console.log(user.name, this.state.username, user.password, this.state.password)
      if (
        this.state.name === user.username &&
        this.state.password === user.password
      ) {
        //cek admin atau user
        if (user.name === "admin") {
          this.props.statusLogin(1);
          alert("selamat datang" + user.name);
          return;
        } else {
          this.props.statusLogin(2);
          alert("selamat datang user");
          return;
        }
      }
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                onChange={this.onchangeName}
                type="text"
                placeholder="Enter username"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={this.onchangePassword}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button onClick={this.checkUser} variant="warning" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default LogIn;
