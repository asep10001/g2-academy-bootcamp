import React, { Component } from "react";
import Heading from './js/heading/heading'
import LeftComponent from './js/left-components/left-component'
import RightComponent from './js/right-components/right-components'

export default class CheckIn extends Component {
  render() {
    return (
      <div classNames="uk-background-cover uk-height-medium uk-panel uk-animation-slide-bottom">
          <Heading/>
          <div className="uk-child-width-1-2 container-pertama" uk-grid="true">
              <LeftComponent/>
              <RightComponent/>
          </div>
      </div>
    );
  }
}
