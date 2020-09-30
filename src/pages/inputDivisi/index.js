// MERUPAKAN CHILD DARI DAFTAR KARYAWAN

import React, { Component } from "react";
// mengimport child daftardivisi
import DaftarDivisi from "../daftarDivisi";
import { Hidden, Select, MenuItem } from "@material-ui/core";
import Testing from "../coba";
import DaftarDivision from "../daftarDivisi";

class InputDivisi extends Component {
  constructor(props) {
    super(props);
    //membuat state awal
    this.state = {
      divisi: [],
      //untuk option tag
      value: "",
      //untuk input baru
      divisiBaru: "",
    };
  }
  // function push divisi
  pushdivisi = () => {
    //setstate
    console.log("push divisi");
  };

  onSubmit = (e) => {
    //tambah parameter di sini
    e.preventDefault();
    const data = this.props.listDivisi;
    data.push(
      <MenuItem value={this.state.divisiBaru}>{this.state.divisiBaru}</MenuItem>
    );
    this.props.setListDivisi(data);
    alert(`DIVISI BARU ${this.state.divisiBaru.toUpperCase()} TELAH DI TAMBAHKAN`)
  };

  //function untuk merubah value dari input
  onChangeHandler = (e) => {
    // this.valueDivisi();
    // //baca dulu input target
    // //errror TypeError: Cannot read property 'target' of undefined
    // //solusi : belum di tambah parameter e di onChange nya

    this.setState({
      //malah mengeluarkan satu huruf satu huruf
      //karena tadinya malah di assign ke divisi yang merupakan sebuah array
      //maka di looping satu satu menjadi sebuah option  tag
      //solusi: buat state baru dengan nama value
      //set value ke option tag yang sudah memliliki value hasil dari looping valueDivisi
      //target akan membaca value dari option yang dihasilkan dari valueDivisi
      divisi: e.target.value,
    });
  };

  //function untuk input baru
  onChangeInputBaru = (el) => {
    //membuat state baru untuk menampung hasil input
    //TypeError: this.state is not a function
    //solusi: salah harusnya setState :)
    this.setState({
      //update state divisibaru
      divisiBaru: el.target.value,
    });
  };

  checkDivisi = async () => {
    let divisi;
    try {
      divisi = await this.state.divisi;
    } catch {
      console.log("belum ada divisinya");
    }

    if (divisi) return divisi;
  };
  render() {
    return (
      <div>
        <label>Input Divisi Baru</label>

        <Select
          value={this.state.divisi}
          onChange={(el) => this.onChangeHandler(el)}
        >
          {this.props.listDivisi}
        </Select>
        {/* <select
          //?state atau props?
          //state dengan value yang sudah ditentukan oleh looping
          value={this.state.value}
          className="uk-select"
          onChange={(e) => this.onChangeHandler(e)}
        >
          {this.valueDivisi()}
        </select> */}
        {/* membuat input baru untuk assigned divisi baru */}
        {/* error unique key
            solusi: buat label untuk input
        */}
        <label>input Baru</label>
        <input
          //assigned state ke divisi baru
          value={this.state.divisiBaru}
          className="uk-input"
          //assigned function ke input baru
          onChange={(e) => this.onChangeInputBaru(e)}
          // akan memiliki value sesuai yang diketik
          // event handler membuat fungsi baru
        ></input>
        <button
          type="submit"
          className="uk-button uk-button-primary"
          //   ketika di onclick ambil value dari input baru assigned ke array divisi
          //jangan lupa tambahkan parameter untuk prevent default
          onClick={(e) => this.onSubmit(e)}
        >
          SUBMIT
        </button>
        {/* sembunyikan component daftar divisi */}
        {/* ERROR:   Line 132:10:  'Hidden' is not defined  react/jsx-no-undef */}
        {/* SOLUSI: import Hidden dari material-ui */}
        {/* membuat props untuk daftar divisi dengan nama divisi */}
        {/* ERROR UNDEFINED DI PAGE DAFTAR DIVISI */}
        <div hidden="true">
          <DaftarDivision divisi={this.state.divisi} />
        </div>
      </div>
    );
  }
}

export default InputDivisi;
