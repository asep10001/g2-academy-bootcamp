import React, { Component } from 'react'
import {Email} from "./form/email";
import {Forgot} from "./form/forgot";
import {Password} from "./form/password";
import {Submit}  from "./form/submit";

export default class Form extends Component{
    render() {
        return (
            <form className="ui form logged-out-form">
                <Email/>
                <Password/>
                <Forgot/>
                <Submit/>
            </form>
        )
    }
}