import React, { Component } from "react";
import GenerateCar from "./generateCar";
import time from "../../../assets/time";
import makeIdBike from "../../../assets/makeIdBike";
import nopol from "../../../assets/nopol";

export class Accordion2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "",
      id: "",
      nopol: "",
    };
    this.clickHandler = this.clickHandler.bind(this);
    // this.saveStorage = this.saveStorage.bind(this);
    // saveCostBike = this.saveCostBike.bind(this)
  }

  clickHandler() {
    this.setState({
      time: time(),
      id: makeIdBike(7),
      nopol: nopol(),
    });
  }

  render() {
    return (
      <ul uk-accordion="" className="uk-accordion">
        <li className="uk-close">
          <a href="#" className="uk-accordion-title">
            MOBIL
          </a>
          <div
            className="uk-accordion-content uk-container uk-animation-toggle"
            tabIndex="0"
            hidden={true}
          >
            <GenerateCar id={this.state.id} time={this.state.time} nopol={this.state.nopol} generate={this.clickHandler} />
          </div>
        </li>
      </ul>
    );
  }
}
