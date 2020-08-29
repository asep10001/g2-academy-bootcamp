// MERUPAKAN CHILD DARI DAFTAR KARYAWAN

import React, { Component } from "react";

class InputDivisi extends Component {
  constructor(props) {
    super(props);
    //membuat state awal
    this.state = {
      divisi: ["Hokage", "Jounin", "chunnin"],
      //untuk option tag
      value: "",
      //untuk input baru
      divisiBaru: ""
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
    //untuk setState sesuai dengan input value
    //data di ambil langsung dari state divisi baru
    //assigned?

    //deklarasi array dari divisi
    let divisi = this.state.divisi;
    //deklarasi hasil divisi baru
    let divisiBaru = this.state.divisiBaru;

    //push ke divisi

    divisi.push(divisiBaru);

    //setState ke divisi state
    this.setState({
        divisi : divisi
    })
    console.log(this.state.divisiBaru);
  };

  //looping mendapatkan value
  valueDivisi = () => {
    //membuat sebuah array penampung
    let options = [];
    let divisi = this.state.divisi;
    for (let i = 0; i < divisi.length; i++) {
      //Expected an assignment or function call and instead saw an expression  no-unused-expressions
      //solusi : untuk looping hasil nya harus dalam array baru dan di return bisa memakai map juga karena map
      //menghasilkan array bru dari suatu array
      options.push(<option value={divisi[i]}>{divisi[i]}</option>);
    }
    //return array hasil sebagai html
    return options;
  };

  //function untuk merubah value dari input
  onChangeHandler = (e) => {
    this.valueDivisi();
    //baca dulu input target
    //errror TypeError: Cannot read property 'target' of undefined
    //solusi : belum di tambah parameter e di onChange nya

    this.setState({
      //malah mengeluarkan satu huruf satu huruf
      //karena tadinya malah di assign ke divisi yang merupakan sebuah array
      //maka di looping satu satu menjadi sebuah option  tag
      //solusi: buat state baru dengan nama value
      //set value ke option tag yang sudah memliliki value hasil dari looping valueDivisi
      //target akan membaca value dari option yang dihasilkan dari valueDivisi
      value: e.target.value,
    });
  };

  //function untuk input baru
  onChangeInputBaru = (el)=>{
    //membuat state baru untuk menampung hasil input
    //TypeError: this.state is not a function
    //solusi: salah harusnya setState :)
    this.setState({
        //update state divisibaru
        divisiBaru: el.target.value
    })
  }
  render() {
    return (
      <div>
        divisi baru
        <label>Input Divisi Baru</label>
        <select
          //?state atau props?
          //state dengan value yang sudah ditentukan oleh looping
          value={this.state.value}
          className="uk-select"
          onChange={(e) => this.onChangeHandler(e)}
        >
          {this.valueDivisi()}
        </select>
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
        onChange={(el) => this.onChangeInputBaru(el)}
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
      </div>
    );
  }
}

export default InputDivisi;
