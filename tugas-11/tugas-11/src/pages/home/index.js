import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h1>Bring your Coding to life!!</h1>
            <p>
              Drive more engagement. Build human relationships. Increase email
              conversions.
            </p>
            <Button variant="primary">Start Learning For Free</Button>
            <p>No credit card required</p>
          </Col>
          <Col xs={12} md={6}>
            <img id="hero-1" src="https://www.sendspark.com/hubfs/Video%20Email%20Hero%20Image.png"></img>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <img id="hero-2" src="https://www.sendspark.com/hubfs/Record%20face%20or%20screen.png"></img>
          </Col>
          <Col xs={12} md={6}>
            <h1>Together we can</h1>
            <p>
              It gives you chills when you know that everyone from any backgrounds can learn how to code
            </p>
            <Button variant="primary">Start Learning For Free</Button>
            <p>No credit card required</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
