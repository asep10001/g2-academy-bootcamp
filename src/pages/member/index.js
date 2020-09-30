import React, { Component } from "react";

export class Member extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

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
        </tr>
      );
    }
    return rows;
  };
  
  render() {
    return (
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
        </tr>
      </thead>
      <tbody>{this.looping()}</tbody>
    </table>
    );
  }
}

export default Member;
