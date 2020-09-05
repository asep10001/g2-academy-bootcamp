import React, { Component } from "react";
import { setLogin, setLogout } from "../../../action/loginCheck";
import { connect } from "react-redux";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

// component dibawah bisa beda file
class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
    };
  }

  componentDidMount() {
    this.setState({
      data: this.props.match.params.id,
    });
  }


  render() {
    return (
      <>
        <Container>
          <Row>
            <Col key={this.state.data} xs={12} md={12}>
              <Card style={{ width: "58rem" }}>
                <Card.Img variant="top" src={this.props.dataSiswa[this.state.data].img} />
                <Card.Body>
                  <Card.Title><h1>{this.props.dataSiswa[this.state.data].name}</h1></Card.Title>
                  <Card onClick={() => alert("moto")}>
                    <h2>{this.props.dataSiswa[this.state.data].moto}</h2>
                  </Card>
                  <Card>
                    <Card.Link><h2>{this.props.dataSiswa[this.state.data].github}</h2></Card.Link>
                  </Card>
                  <Button variant="success">
                      <Link to='/'>
                          BACK TO HOME
                      </Link>
                  </Button>
                  <Button variant="danger">
                      <Link to='/profile'>
                          BACK TO ALL PROFILE
                      </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  statusLogin: state.login.isLogin,
  dataSiswa: state.setData.studentsData,
});

const mapDispatchToProps = (dispatch) => ({
  setStatusLogin: (data) => dispatch(setLogin(data)),
  setStatusLogOut: () => dispatch(setLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
