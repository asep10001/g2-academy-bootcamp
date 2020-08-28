import React, { Component } from "react";

//cek dulu dah ada apa belum

// const listUser = () => {

// };

const karyawan = localStorage.karyawan ? JSON.parse(localStorage.karyawan) : [];


export class DaftarKaryawan extends Component {

    
   deleteKaryawan = (ind) => {
    console.log(ind);   
    //ini fungsi delete karyawannya
        // let index = karyawan[ind];
        // karyawan.splice(index);
    //     localStorage.setItem("karyawan", JSON.stringify(karyawan));
      };
  render() {

    return (
      <table>
        <tr>
          <th class="uk-table-shrink">NIK</th>
          <th class="uk-table-expand">Name</th>
          <th class="uk-table-expand">BirthDate</th>
          <th class="uk-table-expand">Gender</th>
          <th class="uk-table-expand">Adress</th>
          <th class="uk-table-expand">Religion</th>
          <th class="uk-table-expand">Citizenship</th>
          <th class="uk-table-expand">email</th>
          <th class="uk-table-expand">
            <input
              type="text"
              id="search"
              onkeyup="filter()"
              placeholder="Search for names.."
            ></input>
          </th>
          <th class="uk-table-expand">Actions</th>
        </tr>

        {/* <tbody>{rows}</tbody> */}
      </table>
    );
  }
}

export default DaftarKaryawan;
