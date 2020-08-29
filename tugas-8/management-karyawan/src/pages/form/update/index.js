import React, { Component } from "react";
import { RowInput } from "../../../components/elements";

const dataKaryawan = localStorage.dataKaryawan ? JSON.parse(localStorage.dataKaryawan) : [];
class UpdateKaryawan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nik: "",
      name: "",
      birthDate: "",
      gender: "",
      address: "",
      religion: "",
      citizenship: "",
      email: "",
      division: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setValueRowInput = (el) => {
    this.setState({
      [el.name]: el.value,
    });
    console.log(this.props.nik)
  };

  handleLoad=()=>{
    this.setState ({
      nik: this.props.nik,
      name: this.props.name,
      birthDate: this.props.birthDate,
      gender: this.props.gender,
      address: this.props.address,
      religion: this.props.religion,
      citizenship: this.props.citizenship,
      email: this.props.email,
      division: this.props.division,
    });
  }

  componentDidMount(){
    this.handleLoad()
  }

  handleSubmit(event) {
    alert("A nik with " + this.state.nik +"was updated" );
    dataKaryawan[this.props.indek]={
      nik: this.state.nik,
      name: this.state.name,
      birthDate: this.state.birthDate,
      gender: this.state.gender,
      address: this.state.address,
      religion: this.state.religion,
      citizenship: this.state.citizenship,
      email: this.state.email,
      division: this.state.division,
    };
    localStorage.setItem("dataKaryawan", JSON.stringify(dataKaryawan));
    event.preventDefault();
    // ()=>{

    // }
  }

  render() {
    return (
      <div id="update" uk-modal="true" d>
        <div className="uk-modal-dialog uk-modal-body">
          <h2 className = "uk-modal-title">Update karyawan</h2>
          <div className="uk-container uk-container-expand uk-card uk-card-default">
            <div
              className="uk-child-width-expand@s uk-text-center uk-grid uk-grid-stack"
              uk-grid=""
            >
              <div className="uk-first-column">
                <h1>Employee Registration Form</h1>
              </div>
            </div>
            <div
              className="uk-child-width-expand@s uk-text-center uk-grid"
              uk-grid=""
            >
              <div className="uk-first-column">
                <button
                  className="uk-button uk-button-default uk-button-large"
                  id="google"
                >
                  <img src="./assets/images/icon-google.png" alt=""></img>{" "}
                  Google
                </button>
              </div>
              <div>
                <button
                  className="uk-button uk-button-default  uk-button-large"
                  id="facebook"
                >
                  <img src="./assets/images/facebook_logo.svg" alt=""></img>
                  Facebook
                </button>
              </div>
            </div>

            <div
              className="uk-child-width-expand@s uk-grid uk-grid-stack"
              uk-grid=""
            >
              <form
                onSubmit={this.handleSubmit}
                id="add-karyawan"
                className="uk-form-horizontal uk-margin-large uk-first-column"
                href="#"
              >
                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="form-horizontal-text">
                    NIK
                  </label>
                  <div className="uk-form-controls">
                    <RowInput
                      className="uk-RowInput"
                      id="form-horizontal-text"
                      type="number"
                      name="nik"
                      placeholder="Please RowInput your NIK"
                      min="1"
                      value={this.state.nik}
                      setValue={(el) => this.setValueRowInput(el)}
                      onChange={(el) => this.props.onChangeValue(el.target)}
                    ></RowInput>
                  </div>
                </div>
                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="form-horizontal-text">
                    Name
                  </label>
                  <div className="uk-form-controls">
                    <RowInput
                      name="name"
                      className="uk-RowInput"
                      id="form-horizontal-text"
                      type="text"
                      placeholder="What's your name new ninja?"
                      value={this.state.name}
                      setValue={(el) => this.setValueRowInput(el)}
                      onChange={(el) => this.props.onChangeValue(el.target)}
                    ></RowInput>
                  </div>
                </div>

                <div className="uk-margin">
                  <label className="uk-form-label" for="form-horizontal-text">
                    birthDate
                  </label>
                  <div className="uk-form-controls">
                    <RowInput
                      name="birthDate"
                      className="uk-RowInput"
                      id="form-horizontal-text"
                      type="date"
                      placeholder="What's your birthdate new ninja?"
                      value={this.state.birthDate}
                      setValue={(el) => this.setValueRowInput(el)}
                      onChange={(el) => this.props.onChangeValue(el.target)}
                    ></RowInput>
                  </div>
                </div>
                <div className="uk-margin">
                  <label className="uk-form-label" for="form-horizontal-text">
                    Gender
                  </label>
                  <div className="uk-form-controls">
                    <RowInput
                      name="gender"
                      className="uk-RowInput"
                      id="form-horizontal-text"
                      type="text"
                      placeholder="What's your gender new ninja?"
                      value={this.state.gender}
                      setValue={(el) => this.setValueRowInput(el)}
                      onChange={(el) => this.props.onChangeValue(el.target)}
                    ></RowInput>
                  </div>
                </div>

                <div className="uk-margin">
                  <label className="uk-form-label" for="form-horizontal-text">
                    address
                  </label>
                  <div className="uk-form-controls">
                    <RowInput
                      name="address"
                      className="uk-RowInput"
                      id="form-horizontal-text"
                      type="text"
                      placeholder="What's your address new ninja?"
                      value={this.state.address}
                      setValue={(el) => this.setValueRowInput(el)}
                      onChange={(el) => this.props.onChangeValue(el.target)}
                    ></RowInput>
                  </div>
                </div>

                <div className="uk-margin">
                  <label className="uk-form-label" for="form-horizontal-text">
                    religion
                  </label>
                  <div className="uk-form-controls">
                    <RowInput
                      name="religion"
                      className="uk-RowInput"
                      id="form-horizontal-text"
                      type="text"
                      placeholder="What's your religion new ninja?"
                      value={this.state.religion}
                      setValue={(el) => this.setValueRowInput(el)}
                      onChange={(el) => this.props.onChangeValue(el.target)}
                    ></RowInput>
                  </div>
                </div>

                <div className="uk-margin">
                  <label className="uk-form-label" for="form-horizontal-text">
                    citizenship
                  </label>
                  <div className="uk-form-controls">
                    <RowInput
                      name="citizenship"
                      className="uk-RowInput"
                      id="form-horizontal-text"
                      type="text"
                      placeholder="What's your citizenship new ninja?"
                      value={this.state.citizenship}
                      setValue={(el) => this.setValueRowInput(el)}
                      onChange={(el) => this.props.onChangeValue(el.target)}
                    ></RowInput>
                  </div>
                </div>

                <div className="uk-margin">
                  <label className="uk-form-label" for="form-horizontal-text">
                    email
                  </label>
                  <div className="uk-form-controls">
                    <RowInput
                      name="email"
                      className="uk-RowInput"
                      id="form-horizontal-text"
                      type="email"
                      placeholder="What's your email new ninja?"
                      value={this.state.email}
                      setValue={(el) => this.setValueRowInput(el)}
                      onChange={(el) => this.props.onChangeValue(el.target)}
                    ></RowInput>
                  </div>
                </div>

                <div className="uk-margin">
                  <label className="uk-form-label" for="form-horizontal-text">
                    division
                  </label>
                  <div className="uk-form-controls">
                    <RowInput
                      name="division"
                      className="uk-RowInput"
                      id="form-horizontal-text"
                      type="text"
                      placeholder="What's your division new ninja?"
                      value={this.state.division}
                      setValue={(el) => this.setValueRowInput(el)}
                      onChange={(el) => this.props.onChangeValue(el.target)}
                    ></RowInput>
                  </div>
                </div>
              </form>
            </div>
            <button
              className="uk-button uk-button-default uk-button-large"
              onClick={this.handleSubmit}
              id="submit"
            >
              Update
            </button>

            <button
              className="uk-button uk-button-default uk-button-large"
              onClick={this.handleLoad}
              id="show"
            >
              Tampilkan Data
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateKaryawan;
