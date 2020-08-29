import React, { Component } from "react";
import { RowInput } from "../../components/elements";

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
  componentDidMount() {
    this.setState({
      dataList: localStorage.karyawan ? JSON.parse(localStorage.karyawan) : [],
    });
  }

  rows = () => {
    let rows = [];
    for (let i = 0; i < this.state.dataList.length; i++) {
      rows.push(
        <tr>
          <td>{this.state.dataList[i].name}</td>
          <td>{this.state.dataList[i].nik}</td>
          <td>{this.state.dataList[i].email}</td>
          <td>{this.state.dataList[i].division}</td>
          <td>
            <RowInput
              type="text"
              name={"newDivision"+i}
              value={this.state.newDivision}
              setValue={(el) => this.setValueInput(el)}
            ></RowInput>
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
