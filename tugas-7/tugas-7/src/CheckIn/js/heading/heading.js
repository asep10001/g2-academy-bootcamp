import React, { Component } from "react";
import {LogoCheckin} from './logo-checkin'
import {NavButton} from './navButton'
import '../../css/checkin.css'

export default class Heading extends Component {
  render() {
    return (
      <div className="uk-heading-large uk-child-width-1-3 " uk-grid="true">
          <LogoCheckin/>
          <NavButton/>
      </div>
    );
  }
}
