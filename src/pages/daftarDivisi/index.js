import React, { Component } from "react";

class DaftarDivision extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  loopDivisi=()=>{
      const row = []
      if(this.props.listDivisi !== undefined){
      for(let i = 0; i< this.props.listDivisi.length; i++){
        row.push(
           this.props.listDivisi[i]
        )
      }
      return row
    }else{
        return row
    }
  }
  render() {
    return <div id="divisi-daftar-divisi">{this.loopDivisi()}</div>;
  }
}

export default DaftarDivision;
