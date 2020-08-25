import React, { Component } from "react";



class Button1 extends Component {
  percobaan (){
    console.log(2+2)
  }
  render() {
    return (
      <a href="./keluar.html">
        <button onClick={()=>this.percobaan()} className="uk-button uk-button-warning">NORMAL</button>
      </a>
    );
  }
}



export { Button1 };
