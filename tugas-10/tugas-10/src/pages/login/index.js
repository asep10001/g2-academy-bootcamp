import React, { Component } from "react";
import Form from "../../../node_modules/react-bootstrap/Form";
import Button from "../../../node_modules/react-bootstrap/Button";
import Container from "../../../node_modules/react-bootstrap/Container";

export class LogIn extends Component {
  render() {
    return (
      <div>
        <Container>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="warning" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default LogIn;
