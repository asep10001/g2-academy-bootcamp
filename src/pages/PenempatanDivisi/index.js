import React, { Component } from "react";
import { RowInput } from "../../components/elements";
import { Select } from "@material-ui/core";

class PenempatanDivisi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      nik: "",
      email: "",
      division: "",
      newDivision: "",
      dataList: [],
    };
  }

  setValueInput = (el) => {
    this.setState({
      [el.name]: el.value,
    });
  };
  handleChangeDivision(event) {
    this.setState({
      division: event.target.value,
    });
  }

  rows = () => {
    let rows = [];
    for (let i = 0; i < this.props.dataKaryawan.length; i++) {
      rows.push(
        <tr>
          <td>{this.props.dataKaryawan[i].name}</td>
          <td>{this.props.dataKaryawan[i].nik}</td>
          <td>{this.props.dataKaryawan[i].email}</td>
          <td>{this.props.dataKaryawan[i].division}</td>
          <td>
          <div className="uk-margin">
                  <label className="uk-form-label" for="form-horizontal-text">
                    division
                  </label>
                  <div className="uk-form-controls">
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={this.state.division}
                      onChange={(el) => this.handleChangeDivision(el)}
                    >
                      {this.props.listDivisi}
                    </Select>
                  </div>
                </div>
          </td>
        </tr>
      );
    }
    return rows;
  };

  render() {
    return (
      <table className="uk-table">
        <thead>
          <tr>
            <th className="uk-text-center">NAMA</th>
            <th>NIK</th>
            <th>EMAIL</th>
            <th>DIVISI LAMA</th>
            <th>DIVISI BARU</th>
          </tr>
        </thead>
        <tbody>{this.rows()}</tbody>
      </table>
    );
  }
}

export default PenempatanDivisi;
