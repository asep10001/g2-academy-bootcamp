import React, { Component } from "react";
import Card from './card'
import './css/background.css'


export default class Background extends Component {
  render() {
    return (
      <div className="uk-width-2-3 background uk-card uk-card-default uk-flex uk-height-medium uk-margin uk-text-center">
          <Card/>
      </div>
    );
  }
}

