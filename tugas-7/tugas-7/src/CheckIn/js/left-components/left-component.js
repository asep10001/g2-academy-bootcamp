import React, { Component } from 'react'
import {Judul} from './judul'
import {ImageLeft} from './imageLeft'
import {Accordion1} from './accordion1'
import {Accordion2} from './accordion2'

export default class LeftComponent extends Component{
    render() {
        return (
            <div className="uk-width-1-2 uk-text-center">
                <Judul/>
                <Accordion1/>
                <Accordion2/>
                <ImageLeft/>                
            </div>
        )
    }
}