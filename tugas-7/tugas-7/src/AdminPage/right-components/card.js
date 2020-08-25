import React, { Component } from 'react'
import './css/card.css'
import {H1} from './h1'
import {P} from './paragraph'
import {Button1} from './button'


export default class Card extends Component{
    render(){
        return (
            <div className="uk-margin-auto uk-margin-auto-vertical uk-card uk-card-default uk-text-center uk-card-body">
            <H1/>
            <P/>
            <Button1/>
          </div>
        )
    }
};

