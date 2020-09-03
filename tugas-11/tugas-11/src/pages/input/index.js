import React, { Component } from "react";
import Card from "../../../node_modules/react-bootstrap/Card";
import Button from "../../../node_modules/react-bootstrap/Button";
import Container from "../../../node_modules/react-bootstrap/Container";
import Row from "../../../node_modules/react-bootstrap/Row";
import Col from "../../../node_modules/react-bootstrap/Col";
import Modal from "../../../node_modules/react-bootstrap/Modal";
import Form from "../../../node_modules/react-bootstrap/Form";
import ModalDialog from "react-bootstrap/esm/ModalDialog";
import {
  saveInputUserData,
  deleteData,
  updateUserData,
} from "../../action/setData";
import { connect } from "react-redux";

//ternyata bisa setState walau state tidak di declare :O
export class InputData extends Component {
  //WAJIB MENGGUNAKAN STATE DAN PROPS
  //HALAMAN LOGIN FOR ALL
  //ADMIN ADA HOME
  //INPUT DELETE DAN UPDATE (DALAM SATU PAGE INI DENGAN MODAL)
  constructor(props) {
    super(props);

    this.state = {
      // studentsData: [],
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
    // this.dataArray = [
    //   {
    //     img:
    //       "https://lh3.googleusercontent.com/OUGpBp4h8BirMb1zHrmFXyEtIxEqkLaFD4FkyeL7qSY5aypicd-0XihmUlK7XH8eU-YU4NSGYUaYbavScaht=w2640-h1986-rw",
    //     name: "Asep Agus Heri Hermawan",
    //     moto:
    //       "he who didn't taste the bitterness of learning, will suffer the humiliation of ignorance for the rest of his life.",
    //     github: "https://github.com/asep10001",
    //   },
    //   {
    //     img:
    //       "https://lh5.googleusercontent.com/--Gfh02KA0PnDmBQl0XDtfkAAMrda2xy1jOpUU9zOIaqT8dbq4tMyZOdROJiF_-A62foamxz6d-au20lQRXB=w2640-h1986-rw",
    //     name: "Dian Prasetyo",
    //     moto: "Sabar, ikhlas, Bersyukur",
    //     github: "https://github.com/dianprsty",
    //   },
    //   {
    //     img:
    //       "https://lh4.googleusercontent.com/NaGbPWekLeEbllzWpH4UYzCFnjfwCP-O8BxTfc37i2DVpDcD5j2LE-uMto-TjKfC5pa5FWbNIn84tYv7tsoW=w1366-h624",
    //     name: "Shirleen Adriana",
    //     moto: "Mengajar adalah cara terbaik untuk belajar",
    //     github: "https://github.com/shirahub",
    //   },
    //   {
    //     img:
    //       "https://ch3302files.storage.live.com/y4mHeyy0uY1Y-A-Aq1jJu7TW5jJSYlyI1c3yts37BlKu1ACjnkAg-sO8jKx9BFL9ZSeslJoJR9xzukZ2aYcuQmWi55x3EBZJpDr_KfiHoBNdLVOCtuBnLmlBJpfnBFr6n0rxqYRla9h7wpTzR1KNiCju727xWdv8TAk_vErUJ5bq3RxGwxgXRmSXB_jo-DfkvX39lCulb90zy0HRPgbf4cKfQ/pas%20foto%20%28merah%3Bno%20glasses%29.jpg?psid=1&width=390&height=585",
    //     name: "Pramadhio Ari Putro",
    //     moto: "Khawatir adalah penyalahgunaan sebuah imajinasi",
    //     github: "https://github.com/dhioputro",
    //   },
    //   {
    //     img:
    //       "https://lh6.googleusercontent.com/lYSI9LX18lDAZDk1aBL80jXhy6XKbbsw3S6zimjjVMiYMcIT6jqJaYrngHfvgOV-nP4wW8pr_wipWzIDHwL9=w2640-h1986-rw",
    //     name: "Rifki Harbi Awali",
    //     moto: "Basthotan Fil Ilmi Wal Jismi",
    //     github: "https://github.com/rifkiharbiawali",
    //   },
    //   {
    //     img:
    //       "https://media-exp1.licdn.com/dms/image/C5103AQHSe1OxoQuwog/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=eicpGCTB4aWrT1wHBRmNgZVbyOEeI8NYZ6AbqR9qN8Y",
    //     name: "Yoseph Mario Wibowo",
    //     moto: "Ora Et Labora",
    //     github: "https://github.com/YosephMarioWibowo/",
    //   },
    // ];
  }

  componentDidMount() {
    this.setState({
      studentsData: this.dataArray,
    });
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
  // saveInputUserData = (el) => {
  //   //push ke global dataArray
  //   this.dataArray.push({
  //     img: this.state.img,
  //     name: this.state.name,
  //     moto: this.state.moto,
  //     github: this.state.github,
  //   });

  //   //debug
  //   console.log("ini data array" + JSON.stringify(this.dataArray));

  //   // kemudian update state userData
  //   this.setState({
  //     studentsData: this.dataArray,
  //   });

  //   //debug
  //   console.log(
  //     "ini data baru user data " + JSON.stringify(this.state.studentsData)
  //   );

  //   this.handleCloseMod();
  // };

  //untuk update data
  // updateUserData = (ind) => {
  //   //push ke global dataArray
  //   this.dataArray[this.state.indexNow] = {
  //     img: this.state.img,
  //     name: this.state.name,
  //     moto: this.state.moto,
  //     github: this.state.github,
  //   };

  //   //debug
  //   console.log(
  //     "ini data array " +
  //       ind +
  //       " " +
  //       JSON.stringify(this.dataArray[this.state.indexNow])
  //   );

  //   // kemudian update state userData
  //   this.setState({
  //     studentsData: this.dataArray,
  //   });

  //   //debug
  //   console.log(
  //     "ini data baru user data " + JSON.stringify(this.state.studentsData)
  //   );

  //   this.handleCloseMod();
  // };
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // //delete data menggunakan splice
  // deleteData = () => {
  //   //menyesuaikan indeks array dari dataArray Variable
  //   //kemudian mensplice dengan indeksNow
  //   this.dataArray.splice(this.state.indexNow, 1);

  //   //set kembali data di studentsData
  //   this.setState({
  //     studentsData: this.dataArray,
  //   });

  //   this.handleCloseMod();
  // };

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
    this.props.dataSiswa.map((student, ind) => {
      return cards.push(
        <Col key={ind} xs={6} md={4}>
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
      );
    });
    return cards;
  };

  //membuat setvalue untuk mengambil data value form
  setValue = (i) => {
    this.setState({
      name: this.props.dataSiswa[i].name,
      img: this.props.dataSiswa[i].img,
      moto: this.props.dataSiswa[i].moto,
      github: this.props.dataSiswa[i].github,
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
            {this.cardMaker()}
          </Row>
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
              <Button
                variant="primary"
                onClick={() => {
                  this.props.saveInputUserData(
                    this.state.img,
                    this.state.name,
                    this.state.moto,
                    this.state.github
                  );
                  this.handleCloseMod();
                }}
              >
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
              <Button
                variant="primary"
                onClick={() => {
                  this.props.updateData(
                    this.state.indexNow,
                    this.state.img,
                    this.state.name,
                    this.state.moto,
                    this.state.github
                  );
                  this.handleCloseMod();
                }}
              >
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
              <Button
                variant="primary"
                onClick={() => {
                  this.props.deleteData(this.state.indexNow);
                  this.handleCloseMod();
                }}
              >
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataSiswa: state.setData.studentsData,
});

const mapDispatchToProps = (dispatch) => ({
  saveInputUserData: (data1, data2, data3, data4) =>
    dispatch(saveInputUserData(data1, data2, data3, data4)),
  deleteData: (indeks) => dispatch(deleteData(indeks)),
  updateData: (ind, image, name, moto, github) =>
    dispatch(updateUserData(ind, image, name, moto, github)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputData);
