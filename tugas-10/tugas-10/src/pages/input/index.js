import React, { Component } from "react";
import Card from "../../../node_modules/react-bootstrap/Card";
import Button from "../../../node_modules/react-bootstrap/Button";
import Container from "../../../node_modules/react-bootstrap/Container";
import Row from "../../../node_modules/react-bootstrap/Row";
import Col from "../../../node_modules/react-bootstrap/Col";
import Modal from "../../../node_modules/react-bootstrap/Modal";
import Form from "../../../node_modules/react-bootstrap/Form";
import ModalDialog from "react-bootstrap/esm/ModalDialog";

//ternyata bisa setState walau state tidak di declare :O
export class InputData extends Component {
  //WAJIB MENGGUNAKAN STATE DAN PROPS
  //HALAMAN LOGIN FOR ALL
  //ADMIN ADA HOME
  //INPUT DELETE DAN UPDATE (DALAM SATU PAGE INI DENGAN MODAL)
  constructor(props) {
    super(props);

    this.state = {
      studentsData: [],
      img: "",
      name: "",
      moto: "",
      github: "",
      showModalInput: false,
      showModalEdit: false,
      showModalDelete: false,
      formName: "",
      formImg: "",
      formMoto: "",
      formGithub: "",
      indexNow: 0,
    };

    //TASK DATA DEFAULT HARUS HARDCODED DAN REAL nama, foto, link github(membawa langsung ke git masing masing perserta
    //) dan moto
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
  saveInputUserData = (el) => {
    //push ke global dataArray
    this.dataArray.push({
      img: this.state.img,
      name: this.state.name,
      moto: this.state.moto,
      github: this.state.github,
    });

    //debug
    console.log("ini data array" + JSON.stringify(this.dataArray));

    // kemudian update state userData
    this.setState({
      studentsData: this.dataArray,
    });

    //debug
    console.log(
      "ini data baru user data " + JSON.stringify(this.state.studentsData)
    );

    this.handleCloseMod();
  };

  //untuk update data
  updateUserData = (ind) => {
    //push ke global dataArray
    this.dataArray[this.state.indexNow] = {
      img: this.state.img,
      name: this.state.name,
      moto: this.state.moto,
      github: this.state.github,
    };

    //debug
    console.log(
      "ini data array " +
        ind +
        " " +
        JSON.stringify(this.dataArray[this.state.indexNow])
    );

    // kemudian update state userData
    this.setState({
      studentsData: this.dataArray,
    });

    //debug
    console.log(
      "ini data baru user data " + JSON.stringify(this.state.studentsData)
    );

    this.handleCloseMod();
  };

  //delete data menggunakan splice
  deleteData = () => {
    //menyesuaikan indeks array dari dataArray Variable
    //kemudian mensplice dengan indeksNow
    this.dataArray.splice(this.state.indexNow, 1);

    //set kembali data di studentsData
    this.setState({
      studentsData: this.dataArray,
    });

    this.handleCloseMod();
  };

  //handle modal input
  handleCloseMod = () => {
    this.setState({
      showModalInput: false,
      showModalEdit: false,
      showModalDelete: false,
    });
  };
  handleOpenModInput = () => {
    this.setState({ showModalInput: true });
  };

  //open modal edit
  handleOpenModEdit = (i) => {
    this.setState({ showModalEdit: true });

    //setValue modald engan indeks dari parameter handle edit (i)
    this.setValue(i);
    //assign indexNow dengan i dari klik event tombol Edit
    this.setState({
      indexNow: i,
    });

    console.log("ini index number dari open edit " + i);
  };

  //open modal delete

  handleOpenModDelete = (i) => {
    this.setState({ showModalDelete: true });
    //assign indexNow dengan i dari klik event tombol Edit
    this.setState({
      indexNow: i,
    });

    console.log("ini index number dari open delete " + i);
  };

  //TASK SEMUA USER HARUS MENGGUNAKAN CARD SEPERTI DI REACT-BOOTSTRAP
  //   untuk setiap student yang ada buat sebuah card
  cardMaker = () => {
    let cards = [];
    // console.log(JSON.stringify(this.state.studentsData));
    this.state.studentsData.map((student, ind) => {
      cards.push(
        <Row key={ind}>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={student.img} />
              <Card.Body>
                <Card.Title>{student.name}</Card.Title>
                <Card.Text onClick={() => alert("moto")}>
                  {student.moto}
                </Card.Text>
                <Card.Text>
                  <Card.Link>{student.github}</Card.Link>
                </Card.Text>
                <Button
                  onClick={() => this.handleOpenModEdit(ind)}
                  variant="primary"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => this.handleOpenModDelete(ind)}
                  variant="warning"
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      );
    });

    return cards;
  };

  //membuat setvalue untuk mengambil data value form
  setValue = (i) => {
    this.setState({
      name: this.state.studentsData[i].name,
      img: this.state.studentsData[i].img,
      moto: this.state.studentsData[i].moto,
      github: this.state.studentsData[i].github,
    });

    //
    // console.log(
    //   "data data username untuk mengisi form edit " + this.state.formName
    // );
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Card onClick={this.handleOpenModInput}>
                <Card.Body>
                  <Card.Img></Card.Img>
                  <Card.Title>Add New Student</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            {/* <Col>
              <Card onClick={this.handleOpenModInput}>
                <Card.Body>
                  <Card.Img></Card.Img>
                  <Card.Title>Add New Student</Card.Title>
                </Card.Body>
              </Card>
            </Col> */}
          </Row>

          {this.cardMaker()}
        </Container>
        {/* ===========================================TASK INPUT DATA=============================================== */}
        <div>
          <Modal show={this.state.showModalInput} onHide={this.handleCloseMod}>
            <Modal.Header closeButton>
              <Modal.Title>Input A New Student</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* ada form untuk menginput data siswa baru */}
              <Form>
                <Form.Group controlId="formBasicImage">
                  <Form.Label>Add Image</Form.Label>
                  <Form.Control
                    name="img"
                    type="url"
                    placeholder="add url for the image"
                    onChange={this.onChangeValueimg}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicName">
                  <Form.Label>Student's Name</Form.Label>
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="Student's Name"
                    onChange={this.onChangeValueName}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicMoto">
                  <Form.Label>Student's Moto</Form.Label>
                  <Form.Control
                    name="moto"
                    type="text"
                    placeholder="Student's Moto"
                    onChange={this.onChangeValuemoto}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicGithub">
                  <Form.Label>Student's GitHub</Form.Label>
                  <Form.Control
                    name="github"
                    type="text"
                    placeholder="Student's GitHub url"
                    onChange={this.onChangeValuegithub}
                  />
                </Form.Group>
              </Form>

              {/* selesai di sini form nya */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleCloseMod}>
                Close
              </Button>
              <Button variant="primary" onClick={this.saveInputUserData}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        {/* ========================================TASK UPDATE DATA MENGGUNAKAN TAMPILAN INPUT DATA (MODAL 
            INPUT DAN UPDATE)================================================= */}
        <div>
          <Modal show={this.state.showModalEdit} onHide={this.handleCloseMod}>
            <Modal.Header closeButton>
              <Modal.Title>Edit New Students</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* ada form untuk menginput data siswa baru */}
              <Form>
                <Form.Group controlId="formBasicImage">
                  <Form.Label>Add Image</Form.Label>
                  <Form.Control
                    name="img"
                    value={this.state.img}
                    type="url"
                    placeholder="add url for the image"
                    onChange={this.onChangeValueimg}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicName">
                  <Form.Label>Student's Name</Form.Label>
                  <Form.Control
                    name="name"
                    value={this.state.name}
                    type="text"
                    placeholder="Student's Name"
                    onChange={this.onChangeValueName}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicMoto">
                  <Form.Label>Student's Moto</Form.Label>
                  <Form.Control
                    name="moto"
                    value={this.state.moto}
                    type="text"
                    placeholder="Student's Moto"
                    onChange={this.onChangeValuemoto}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicGithub">
                  <Form.Label>Student's GitHub</Form.Label>
                  <Form.Control
                    name="github"
                    value={this.state.github}
                    type="text"
                    placeholder="Student's GitHub url"
                    onChange={this.onChangeValuegithub}
                  />
                </Form.Group>
              </Form>

              {/* selesai di sini form nya */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleCloseMod}>
                Close
              </Button>
              <Button variant="primary" onClick={this.updateUserData}>
                Update Students
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        {/* ========================================TASK DELETE DATA======================================================================= */}

        <div>
          <Modal show={this.state.showModalDelete} onHide={this.handleCloseMod}>
            <Modal.Header closeButton>
              <Modal.Title>Edit New Students</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Modal.Title>Delete Student</Modal.Title>
              <ModalDialog>
                Are you sure to delete{" "}
                {/* {this.dataArray[this.state.indexNow].name} from the bootcamp? */}
                She/He will no longer be able to login to the student's page.{" "}
              </ModalDialog>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleCloseMod}>
                No
              </Button>
              <Button variant="primary" onClick={this.deleteData}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

export default InputData;
