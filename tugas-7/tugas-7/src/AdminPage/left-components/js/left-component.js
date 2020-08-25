import React, { Component } from "react";
import { Select } from './select'
import { Button } from './button'
import { H1 } from './h1'
import { Image } from './img'
import {Logo  } from 'D:/bootcampG2/g2-academy-bootcamp-3/tugas-7/tugas-7/src/LogIn/js/logo.js'
import { InputId } from './input-id'
import { InputNoKen } from './input-no-ken'
import { LabelId } from './label-id'
import { LabelNoKen } from './label-no-ken'
import './css/right-component.css'





export default class LeftComponent extends Component {
  render() {
    return (
    <div className="uk-text-center uk-container uk-width-1-3" id="content">
        <Logo/>
        <H1/>
        <LabelId/>
        <InputId/>
        <LabelNoKen/>
        <InputNoKen/>
        <Select/>
        <Button/>
    </div>
    )
  }
}

