import React, { Component } from "react";
import UpdateKaryawan from "../form/update";

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
    // this.rows = [];
    this.ind = undefined;
    // this.dataKaryawan = this.state.dataList;
  }

  componentDidMount() {
    this.setState({
      dataList: localStorage.karyawan ? JSON.parse(localStorage.karyawan) : [],
    });
  }

  debug = () => {
    // console.log(this.dataKaryawan);
  };

  updateClickHandler = (i) => {
    this.setState({
      nik: this.state.dataList[i].nik,
      name: this.state.dataList[i].name,
      birthDate: this.state.dataList[i].birthDate,
      gender: this.state.dataList[i].gender,
      address: this.state.dataList[i].address,
      religion: this.state.dataList[i].religion,
      citizenship: this.state.dataList[i].citizenship,
      email: this.state.dataList[i].email,
      division: this.state.dataList[i].division,
    });
    this.ind = i;
    // console.log(i, this.state.nik, this.state.name);
    // console.log(this.set.datalist);
  };

  deleteKaryawan = (ind) => {
    //ini fungsi delete karyawannya
    this.dataKaryawan = this.state.dataList;
    console.log(ind);
    this.dataKaryawan.splice(ind, 1);
    localStorage.setItem("karyawan", JSON.stringify(this.dataKaryawan));
  };

  // looping = () => {
  //   // for (let i = 0; i < this.dataKaryawan.length; i++) {

  //   //   console.log(this.dataKaryawan.length);

  //   // }
  //   console.log(this.state.dataList[0]);
  // };

  looping = () => {
    let rows = [];
    
    for (let i = 0; i < this.state.dataList.length; i++) {
      rows.push(
        <tr>
          <td>{this.state.dataList[i].nik}</td>
          <td>{this.state.dataList[i].name}</td>
          <td>{this.state.dataList[i].birthDate}</td>
          <td>{this.state.dataList[i].gender}</td>
          <td>{this.state.dataList[i].address}</td>
          <td>{this.state.dataList[i].religion}</td>
          <td>{this.state.dataList[i].citizenship}</td>
          <td>{this.state.dataList[i].email}</td>
          <td>{this.state.dataList[i].division}</td>

          <td>
            <button
              onClick={() => this.updateClickHandler(i)}
              className="uk-button uk-button-default uk-margin-small-right"
              type="button"
              uk-toggle="target: #update"
              id="edit"
            >
              Update Data
            </button>
            <a id="info" href="/ninja">
              <button>Info</button>
            </a>
            <a
              id="delete"
              onClick={() => this.deleteKaryawan(i)}
              className="uk-button uk-button-danger delete"
              data-id=""
            >
              Delete
            </a>
            ';
          </td>
        </tr>
      )
    }

    return rows;
  };
  render() {
    this.looping();
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
              <th>
                <input
                  type="text"
                  id="search"
                  // onChange={this.filter}
                  placeholder="Search for names.."
                ></input>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* {this.looping()} */}
            {/* {this.state.dataList.map((home) => (
              <tr key={}>
                <td>{home.nik}</td>
                <td>{home.name}</td>
                <td>{home.birthDate}</td>
                <td>{home.gender}</td>
                <td>{home.address}</td>
                <td>{home.religion}</td>
                <td>{home.citizenship}</td>
                <td>{home.email}</td>
                <td>{home.division}</td>
                <td>
                  <button
                    onClick={() => this.updateClickHandler(home.nik)}
                    className="uk-button uk-button-default uk-margin-small-right"
                    type="button"
                    uk-toggle="target: #update"
                    id="edit"
                  >
                    Update Data
                  </button>
                  <a id="info" href="/ninja">
                    <button>Info</button>
                  </a>
                  <a
                    id="delete"
                    onClick={() => this.deleteKaryawan(home.nik)}
                    className="uk-button uk-button-danger delete"
                    data-id=""
                  >
                    Delete
                  </a>
                  ';
                </td>
              </tr>
            ))} */}
            {this.looping()}
          </tbody>
        </table>
        <UpdateKaryawan
          nik={this.state.nik}
          name={this.state.name}
          birthDate={this.state.birthDate}
          gender={this.state.gender}
          address={this.state.address}
          religion={this.state.religion}
          citizenship={this.state.citizenship}
          email={this.state.email}
          division={this.state.division}
          indek={this.ind}
        />
      </>
    );
  }
}

export default DaftarKaryawan;
