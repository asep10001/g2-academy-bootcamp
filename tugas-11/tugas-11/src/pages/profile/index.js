import React, { Component } from "react";
import { connect } from "react-redux";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

export class Profile extends Component {
  cardMaker = () => {
    let cards = [];
    // console.log(JSON.stringify(this.state.studentsData));
    this.props.dataSiswa.map((student, ind) => {
      return cards.push(
        <Col key={ind} xs={12} md={4}>
          <Card>
            <Card.Img variant="top" src={student.img} />
            <Card.Body>
              <Card.Title>{student.name}</Card.Title>
              <Card.Text onClick={() => alert("moto")}>
                {student.moto}
              </Card.Text>
              <Card.Text>
                <Card.Link>{student.github}</Card.Link>
              </Card.Text>
              <Button variant="info">
                <Link to={`/studentsprofile/${ind}`}>Info</Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });
    return cards;
  };
  render() {
    return (
      <div>
        <Container>
          <Row>
            {this.cardMaker()}
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataSiswa: state.setData.studentsData,
});

export default connect(mapStateToProps)(Profile);
