import React, { Component } from "react";
import carFunction from "./carFunction";

class generateCar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent() {
    alert(`Hello ${this.state.parentName}`);
  }

  render() {
    return <div>
        <button>Hi</button>
        <carFunction/></div>;
  }
}

export default generateCar;
