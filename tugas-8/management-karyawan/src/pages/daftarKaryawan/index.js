import React, { Component } from "react";
import UpdateKaryawan from "../form/update";

//cek dulu dah ada apa belum

// const listUser = () => {

// };
const dataKaryawan = localStorage.dataKaryawan
  ? JSON.parse(localStorage.dataKaryawan)
  : [];

let rows = [];
let ind;
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
    };
  }

  // filter =()=> {
  //   // Declare variables
  //   var input, filter, table, tr, td, i, txtValue;
  //   input = document.getElementById("search");
  //   filter = input.value.toUpperCase();
  //   table = document.getElementById("table-karyawan");
  //   tr = table.getElementsByTagName("tr");
  
  //   // Loop through all table rows, and hide those who don't match the search query
  //   for (i = 0; i < tr.length; i++) {
  //     td = tr[i].getElementsByTagName("td")[7];
  //     if (td) {
  //       txtValue = td.textContent || td.innerText;
  //       if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //         tr[i].style.display = "";
  //       } else {
  //         tr[i].style.display = "none";
  //       }
  //     }
  //   }
  // }
  updateClickHandler = (i) => {
    this.setState({
      nik: dataKaryawan[i].nik,
      name: dataKaryawan[i].name,
      birthDate: dataKaryawan[i].birthDate,
      gender: dataKaryawan[i].gender,
      address: dataKaryawan[i].address,
      religion: dataKaryawan[i].religion,
      citizenship: dataKaryawan[i].citizenship,
      email: dataKaryawan[i].email,
      division: dataKaryawan[i].division,
    });
    ind = i;
    console.log( i,this.state.nik, this.state.name);
  };

  deleteKaryawan = (ind) => {
    //ini fungsi delete karyawannya
    console.log(ind);
    dataKaryawan.splice(ind, 1);
    localStorage.setItem("dataKaryawan", JSON.stringify(dataKaryawan));
  };

  render() {
    // for (let i = 0; i < dataKaryawan.length; i++) {
    //   console.log(dataKaryawan[i]);

    // }

    for (let i = 0; i < dataKaryawan.length; i++) {
      const user = dataKaryawan[i];
      rows.push(
        <tr>
          <td>{user.nik}</td>
          <td>{user.name}</td>
          <td>{user.birthDate}</td>
          <td>{user.gender}</td>
          <td>{user.address}</td>
          <td>{user.religion}</td>
          <td>{user.citizenship}</td>
          <td>{user.email}</td>
          <td>{user.division}</td>

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
      );
    }

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
            {rows}
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
          indek={ind}
        />
      </>
    );
  }
}

export default DaftarKaryawan;
