import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import {FirebaseContext} from '../../config/firebase'

class Home extends Component {
  
  checkFirebase = () => {
    return firebase => {
      return alert("firebase initialized!!!")
    }
  }

  render() {
    return (
      <Container>
        <>
        <div>
          <FirebaseContext.Consumer>
            {this.checkFirebase()}
          </FirebaseContext.Consumer>
        </div>
        </>
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
            <img
              alt=""
              id="hero-1"
              src="https://www.sendspark.com/hubfs/Video%20Email%20Hero%20Image.png"
            ></img>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <img
              alt=""
              id="hero-2"
              src="https://www.sendspark.com/hubfs/Record%20face%20or%20screen.png"
            ></img>
          </Col>
          <Col xs={12} md={6}>
            <h1>Together we can</h1>
            <p>
              It gives you chills when you know that everyone from any
              backgrounds can learn how to code
            </p>
            <Button variant="primary">Start Learning For Free</Button>
            <p>No credit card required</p>
          </Col>
        </Row>

        <Card id="card-home">
          <Card.Body>
            <Row>
              <Col xs={12} md={9}>
                <h1 id="card-home-msg">
                  “A board member said this is the smartest thing he’s seen a
                  marketer do.”
                </h1>
                <p id="card-home-par">CJ Craig. Marketing Officer</p>
                <img
                  alt=""
                  src="https://www.sendspark.com/hubfs/Big%20Brothers%20Big%20Sister%201%20(1).svg"
                ></img>
              </Col>
              <Col xs={12} md={3}>
                <img
                  alt=""
                  id="card-image-home"
                  src="https://www.sendspark.com/hubfs/CJ%20Craig%20Big%20Brothers%20Big%20Sister.png"
                ></img>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Home;
