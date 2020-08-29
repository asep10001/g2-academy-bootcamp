import React, { Component } from "react";
import DaftarKaryawan from "../daftarKaryawan";

class ProfileKaryawan extends Component {
  render() {
    return (
      <div id="detail" uk-modal="true" onLoad={this.handleLoad}>
        <div className="uk-modal-dialog uk-modal-body">
          <div className="uk-container uk-container-expand uk-card uk-card-default">
            <div
              className="uk-child-width-1-1 uk-text-center uk-grid uk-grid-stack"
              uk-grid="true"
            >
              <div className="uk-first-column">
                <h1>Employee Detail Data</h1>
              </div>
              <div className="uk-child-width-expand@s uk-text-center uk-grid">
                <ul className="uk-list">
                  <li>Nik: ==== {this.props.nik}</li>
                  <li>Name: ==== {this.props.name}</li>
                  <li>BIrth Date: ==== {this.props.birthDate}</li>
                  <li>Address: ==== {this.props.address}</li>
                  <li>Religion: ==== {this.props.religion}</li>
                  <li>Citizenship: ==== {this.props.citizenship}</li>
                  <li>Email: ==== {this.props.email}</li>
                  <li>Division: ==== {this.props.division}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileKaryawan;
