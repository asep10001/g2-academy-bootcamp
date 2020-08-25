import React, { Component } from 'react'
import Background from './right-components/background'
import LeftComponent from './left-components/js/left-component'

export default class Admin extends Component{
    render(){
      return (
        <div className="uk-child-width-1-3 uk-grid" uk-grid="true">
        <Background/>
        <LeftComponent/>
        </div>
      )
    }
  }