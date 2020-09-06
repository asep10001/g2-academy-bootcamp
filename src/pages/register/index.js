import React, { Component } from "react";
import { FirebaseContext } from "../../config/firebase";
import { Container, Form, Button } from "react-bootstrap";

export class RegisterUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      repassword: "",
    };
  }

  onchangeEmail = (val) => {
    this.setState({
      email: val.target.value,
    });

    //debug
    console.log("ini username " + this.state.email);
  };

  onchangePassword = (val) => {
    this.setState({
      password: val.target.value,
    });
    //debug
    console.log("ini password " + this.state.password);
  };

  doRegister = () =>{
      this.props.firebase.registerFirebaseUser(this.state.email, this.state.password)
            .then(user => {
                console.log(user)
                alert("we have a new company")
            })
            .catch(err=>{
                alert(err)
            })
  }

  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={this.onchangeEmail}
              type="email"
              placeholder="Enter email"
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
          {/* this.checkUser(); */}
          <Button onClick={this.doRegister} variant="warning">
            REGISTER
          </Button>
        </Form>
      </Container>
    );
  }
}

class RegisterContext extends Component {
  render() {
    return (
      <FirebaseContext.Consumer>
        {(firebase) => <RegisterUser firebase={firebase} {...this.props} />}
      </FirebaseContext.Consumer>
    );
  }
}

export default RegisterContext;
