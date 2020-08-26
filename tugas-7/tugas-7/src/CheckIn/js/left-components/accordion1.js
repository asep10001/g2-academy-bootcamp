import React, { Component } from "react";
// import React, { useState } from "react";
import GenerateBike from './generateBike'



export class Accordion1 extends Component {
    constructor(){
        super()
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
            <h1 id="id-bike"></h1>
            <h1 id="time-bike"></h1>
            <GenerateBike name="waktu"/>
          </div>
        </li>
      </ul>
    );
  }
}
