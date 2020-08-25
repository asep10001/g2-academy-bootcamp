import React, { Component } from 'react'
import {Logo} from './js/logo'
import {H1} from './js/h1'
import Form from './js/form'
import './css/login.css'

export default class LogIn extends Component{
    render() {
        return (
            <div className="g-logged-out">
                <div className="g-logged-out-container">
                    <div className="logged-out-content">
                        <Logo/>
                        <H1/>
                        <Form/>
                    </div>

                </div>
            </div>
        )
    }
}