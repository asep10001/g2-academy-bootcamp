import React, { Component } from "react";
import UpdateKaryawan from "../form/update";
import { Hidden } from "@material-ui/core";
import ProfileKaryawan from "../profileKaryawan";
import { Redirect } from "react-router-dom";
import PenempatanDivisi from "../PenempatanDivisi";

//cek dulu dah ada apa belum

// const listUser = () => {

// };

export class DaftarKaryawan extends Component {
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
      dataList: [],
    };
    this.ind = undefined;
  }

  componentDidMount() {
    this.setState({
      dataList: localStorage.karyawan ? JSON.parse(localStorage.karyawan) : [],
    });
  }

  filter = () => {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };

  looping = () => {
    let rows = [];

    for (let i = 0; i < this.props.dataKaryawan.length; i++) {
      rows.push(
        <tr key={i}>
          <td>{this.props.dataKaryawan[i].nik}</td>
          <td>{this.props.dataKaryawan[i].name}</td>
          <td>{this.props.dataKaryawan[i].birthDate}</td>
          <td>{this.props.dataKaryawan[i].gender}</td>
          <td>{this.props.dataKaryawan[i].address}</td>
          <td>{this.props.dataKaryawan[i].religion}</td>
          <td>{this.props.dataKaryawan[i].citizenship}</td>
          <td>{this.props.dataKaryawan[i].email}</td>
          <td>{this.props.dataKaryawan[i].division}</td>

          <td>
            <button
              onClick={() => {
                this.props.updateClickHandler(i, {
                  nik: this.props.dataKaryawan[i].nik,
                  name: this.props.dataKaryawan[i].name,
                  birthDate: this.props.dataKaryawan[i].birthDate,
                  gender: this.props.dataKaryawan[i].gender,
                  address: this.props.dataKaryawan[i].address,
                  religion: this.props.dataKaryawan[i].religion,
                  citizenship: this.props.dataKaryawan[i].citizenship,
                  email: this.props.dataKaryawan[i].email,
                  division: this.props.dataKaryawan[i].division,
                  index: i,
                });
              }}
              className="uk-button uk-button-default uk-margin-small-right"
              type="button"
              uk-toggle="target: #update"
              id="edit"
            >
              Update Data
            </button>
            <button
              id="info"
              onLoad={() =>
                this.props.showClickHandler(i, {
                  nik: this.props.dataKaryawan[i].nik,
                  name: this.props.dataKaryawan[i].name,
                  birthDate: this.props.dataKaryawan[i].birthDate,
                  gender: this.props.dataKaryawan[i].gender,
                  address: this.props.dataKaryawan[i].address,
                  religion: this.props.dataKaryawan[i].religion,
                  citizenship: this.props.dataKaryawan[i].citizenship,
                  email: this.props.dataKaryawan[i].email,
                  division: this.props.dataKaryawan[i].division,
                })
              }
              className="uk-button uk-button-default uk-margin-small-right"
              type="button"
              uk-toggle="target: #detail"
              type="button"
              id="info"
            >
              Info
            </button>
            <a
              id="delete"
              onClick={() => this.props.deleteClickHandler(i)}
              className="uk-button uk-button-danger delete"
              data-id=""
            >
              Delete
            </a>
            ';
          </td>
        </tr>
      );
    }

    return rows;
  };
  render() {
    // this.debug()

    return (
      <>
        <table>
          <thead>
            <tr>
              <th>NIK</th>
              <th>Name</th>
              <th>BirthDate</th>
              <th>Gender</th>
              <th>Adress</th>
              <th>Religion</th>
              <th>Citizenship</th>
              <th>email</th>
              <th>Divisi</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.looping()}</tbody>
        </table>
        <UpdateKaryawan
          data={this.props.dataUpdate}
          updateClickHandler={this.props.updateClickHandler}
          listDivisi={this.props.listDivisi}
        />
        <Hidden>
          <ProfileKaryawan data={this.props.dataUpdate} />
        </Hidden>
      </>
    );
  }
}

export default DaftarKaryawan;
