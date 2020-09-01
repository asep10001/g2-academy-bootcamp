import React, { Component } from "react";
import Card from "../../../node_modules/react-bootstrap/Card";
import Button from "../../../node_modules/react-bootstrap/Button";
import Container from "../../../node_modules/react-bootstrap/Container";
import Row from "../../../node_modules/react-bootstrap/Row";
import Col from "../../../node_modules/react-bootstrap/Col";
import Modal from "../../../node_modules/react-bootstrap/Modal";
import Form from "../../../node_modules/react-bootstrap/Form";

export class InputData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentsData: "",
      img: "",
      name: "",
      moto: "",
      github: "",
      showModal: false,
    };
    this.dataArray = [];
  }

  //untuk mendapatkan user data kita:
  //onchangeValue
  
  //membuat beberapa setValue untuk input yang berbeda
  onChangeValueName = (el) => {
    this.setState({
      name: el.target.value,
    });
    //debug
    console.log(this.state.name);
  };
  onChangeValueimg = (el) => {
    this.setState({
      img: el.target.value,
    });
    //debug
    console.log(this.state.img);
  };

  onChangeValuemoto = (el) => {
    this.setState({
      moto: el.target.value,
    });
    //debug
    console.log(this.state.moto);
  };

  onChangeValuegithub = (el) => {
    this.setState({
      github: el.target.value,
    });
    //debug
    console.log(this.state.github);
  };
  setUserData=(el)=>{

    //push ke global dataArray
    this.dataArray.push({img: this.state.img, name: this.state.name, moto: this.state.moto, github: this.state.github})

    //debug
    console.log("ini data array" + JSON.stringify(this.dataArray));

    // kemudian update state userData
    this.setState({
        userData : this.dataArray
    })

    //debug
    console.log("ini data baru user data " + JSON.stringify(this.state.userData));
  }

  //handle modal
  handleCloseMod = () => {
    this.setState({ showModal: false });
  };
  handleOpenMod = () => {
    this.setState({ showModal: true });
  };

  //   untuk setiap student yang ada buat sebuah card
  cardMaker = () => {
    let cards = [];
    this.state.studentsData.array.forEach((student) => {
      cards.push(
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={student.img} />
          <Card.Body>
            <Card.Title>{student.name}</Card.Title>
            <Card.Text onClick={() => alert("moto")}>{student.moto}</Card.Text>
            <Card.Text>
              <Card.Link>{student.github}</Card.Link>
            </Card.Text>
            <Button variant="primary">Detail</Button>
          </Card.Body>
        </Card>
      );
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Card onClick={this.handleOpenMod}>
                <Card.Body>
                  <Card.Img></Card.Img>
                  <Card.Title>Add New Student</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card onClick={this.handleOpenMod}>
                <Card.Body>
                  <Card.Img></Card.Img>
                  <Card.Title>Add New Student</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <div>
          <Modal show={this.state.showModal} onHide={this.handleCloseMod}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* ada form untuk menginput data siswa baru */}
              <Form>
                <Form.Group controlId="formBasicImage">
                  <Form.Label>Add Image</Form.Label>
                  <Form.Control name="img" type="url" placeholder="add url for the image" onChange={this.onChangeValueimg}/>
                </Form.Group>

                <Form.Group controlId="formBasicName">
                  <Form.Label>Student's Name</Form.Label>
                  <Form.Control name="name" type="text" placeholder="Student's Name" onChange={this.onChangeValueName}/>
                </Form.Group>

                <Form.Group controlId="formBasicMoto">
                  <Form.Label>Student's Moto</Form.Label>
                  <Form.Control name="moto" type="text" placeholder="Student's Moto" onChange={this.onChangeValuemoto}/>
                </Form.Group>

                <Form.Group controlId="formBasicGithub">
                  <Form.Label>Student's GitHub</Form.Label>
                  <Form.Control name="github" type="text" placeholder="Student's GitHub url" onChange={this.onChangeValuegithub}/>
                </Form.Group>
              </Form>

              {/* selesai di sini form nya */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleCloseMod}>
                Close
              </Button>
              <Button variant="primary" onClick={this.setUserData}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

export default InputData;
