import React, { Component } from "react";

export class Select extends Component {
  render() {
    return (
      <select className="uk-select" name="type" id="">
        <option value="Pilih">== Pilih Tipe Kendaraan ==</option>
        <option value="Mobil">Mobil</option>
        <option value="Motor">Motor</option>
      </select>
    );
  }
}
