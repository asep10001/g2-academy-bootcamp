import React, { Component } from "react";
// import React, { useState } from "react";
import GenerateBike from './generateBike'
import "../../../assets/time";
import time from "../../../assets/time";
import makeIdBike from "../../../assets/makeIdBike";
import nopol from "../../../assets/nopol";
import { saveCostBike } from "./saveToLocalStorage"; 
import { costBike } from "./localStorage";



export class Accordion1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "1",
      id: "2",
      nopol: "3"
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
      // eachBike : bike
    });
  }
    render() {
    return (
      <ul uk-accordion="" className="uk-accordion">
        <li className="uk-close">
          <a href="/" className="uk-accordion-title">
            MOTOR
          </a>
          <div
            className="uk-accordion-content uk-animation-toggle"
            tabIndex="0"
            hidden={true}
          >

            <GenerateBike id={this.state.id} time={this.state.time} nopol={this.state.nopol} generateButton={this.clickHandler}/>
          </div>
        </li>
      </ul>
    );
  }
}
