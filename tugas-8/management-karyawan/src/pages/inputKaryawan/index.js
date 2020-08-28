import React, { Component } from "react";

class InputKaryawan extends Component {
  render() {
    return (
      <div classNameName="uk-container uk-container-expand uk-card uk-card-default">
        <div
          classNameName="uk-child-width-expand@s uk-text-center uk-grid uk-grid-stack"
          uk-grid=""
        >
          <div classNameName="uk-first-column">
            <h1>Employee Registration Form</h1>
          </div>
        </div>
        <div
          classNameName="uk-child-width-expand@s uk-text-center uk-grid"
          uk-grid=""
        >
          <div classNameName="uk-first-column">
            <button
              classNameName="uk-button uk-button-default uk-button-large"
              id="google"
            >
              <img src="./assets/images/icon-google.png" alt=""></img> Google
            </button>
          </div>
          <div>
            <button
              classNameName="uk-button uk-button-default  uk-button-large"
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
            id="add-karyawan"
            className="uk-form-horizontal uk-margin-large uk-first-column"
            href="#"
          >
            <div className="uk-margin">
              <label className="uk-form-label" for="form-horizontal-text">
                NIK
              </label>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  id="form-horizontal-text"
                  type="number"
                  name="nik"
                  placeholder="Please input your taka address"
                  min="1"
                ></input>
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label" for="form-horizontal-text">
                Name
              </label>
              <div className="uk-form-controls">
                <input
                  name="name"
                  className="uk-input"
                  id="form-horizontal-text"
                  type="text"
                  placeholder="What's your name new ninja?"
                ></input>
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label" for="form-horizontal-text">
                birthDate
              </label>
              <div className="uk-form-controls">
                <input
                  name="birthDate"
                  className="uk-input"
                  id="form-horizontal-text"
                  type="date"
                  min="1"
                ></input>
              </div>
            </div>
            <div className="uk-margin">
              <div className="uk-form-label">Gender</div>
              <div className="uk-form-controls uk-form-controls-text">
                <label>Male</label>
                <input
                  className="uk-radio"
                  type="radio"
                  id="radio"
                  name="gender"
                ></input>

                <br></br>
                <label> Female</label>
                <input
                  className="uk-radio"
                  type="radio"
                  id="radio"
                  name="gender"
                ></input>

                <br></br>
                <label>Genderless</label>
                <input
                  classNameName="uk-radio"
                  type="radio"
                  id="radio"
                  name="gender"
                ></input>
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label" for="form-horizontal-text">
                Address
              </label>
              <div className="uk-form-controls">
                <input
                  name="address"
                  className="uk-input"
                  id="form-horizontal-text"
                  type="text"
                  placeholder="What's your village name?"
                ></input>
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label" for="form-horizontal-text">
                Religion
              </label>
              <div className="uk-form-controls">
                <input
                  name="religion"
                  className="uk-input"
                  id="form-horizontal-text"
                  type="text"
                  placeholder="What's your belief?"
                ></input>
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label" for="form-horizontal-text">
                Citizenship
              </label>
              <div className="uk-form-controls">
                <input
                  name="citizenship"
                  className="uk-input"
                  id="form-horizontal-text"
                  type="text"
                  placeholder="What's your belief?"
                ></input>
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label" for="form-horizontal-text">
                E-mail
              </label>
              <div className="uk-form-controls">
                <input
                  name="email"
                  className="uk-input"
                  id="form-horizontal-text"
                  type="email"
                  placeholder="Please input your taka address"
                  min="1"
                ></input>
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label" for="form-horizontal-select">
                Division
              </label>
              <div className="uk-form-controls">
                <select
                  name="division"
                  className="uk-select"
                  id="form-horizontal-select"
                >
                  <option>Anbu</option>
                  <option>Jounnin</option>
                  <option>Chunnin</option>
                  <option>Gennin</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default InputKaryawan;
