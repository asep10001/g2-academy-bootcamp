import React, { Component } from "react";

export default class GenerateBike extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  time() {
    var d = new Date();
    var hour = "";
    if (d.getHours() < 10) {
      hour = "0" + d.getHours();
    } else {
      hour = d.getHours();
    }
    var minutes = "";
    if (d.getMinutes() < 10) {
      minutes = "0" + d.getMinutes();
    } else {
      minutes = d.getMinutes();
    }
    var seconds = "";
    if (d.getSeconds() < 10) {
      seconds = "0" + d.getSeconds();
    } else {
      seconds = d.getSeconds();
    }
    var time = `${hour} : ${minutes} : ${seconds}`;
    return time;
  }

  //   ============================make id============================//

  makeidBike(length) {
    let result = "BK";
    let character =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890";
    let characterLength = character.length;

    for (let i = 0; i < length; i++) {
      result += character.charAt(Math.floor(Math.random() * characterLength));
    }
    return result;
    // menyimpan result ke database
  }

  nopol() {
    let result = "";
    let charAlfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charAngka = "01234567890";
    let charAlfaLength = charAlfa.length;
    let charAngkaLength = charAngka.length;

    result += charAlfa.charAt(Math.floor(Math.random() * charAlfaLength));

    for (let i = 0; i < 4; i++) {
      result += charAngka.charAt(Math.floor(Math.random() * charAngkaLength));
    }
    for (let i = 0; i < 3; i++) {
      result += charAlfa.charAt(Math.floor(Math.random() * charAlfaLength));
    }
    return result;
    // menyimpan result ke database
  }

  clickHandler() {
    this.setState({
      name: "Goodbye",
      time: this.time(),
      id: this.makeidBike(5),
      nopol: this.nopol()
    });
  }
  render() {
    return (
      <div>
        <div>
          <h1>{this.state.id}</h1>
          <h1>{this.state.time}</h1>
          <h1>{this.state.nopol}</h1>
        </div>
        <button
          className="uk-button uk-button-default uk-button-large uk-animation-scale-up"
          type="submit"
          onClick={this.clickHandler}
        >
          GENERATE BIKE
        </button>
      </div>
    );
  }
}
