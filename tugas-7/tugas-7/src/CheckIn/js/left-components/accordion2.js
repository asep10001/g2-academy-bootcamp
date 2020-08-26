import React, { Component } from "react";

export class Accordion2 extends Component {
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
            <h1 id="id-car"></h1>
            <h1 id="time-car"></h1>
            <h1 id="nopol"></h1>
            <button
              className="uk-button uk-button-default uk-button-large uk-animation-scale-up"
              type="submit"
              onClick="saveCostCar()"
            >
              GENERATE CAR
            </button>
          </div>
        </li>
      </ul>
    );
  }
}
