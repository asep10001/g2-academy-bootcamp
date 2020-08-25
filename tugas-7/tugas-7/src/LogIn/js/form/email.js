import React, { Component } from "react";

export class Email extends Component {
  render() {
    return (
        <div className="field">
          <div className="field">
            <label>Email Address</label>
            <div className="ui fluid input">
              <input className="uk-input" type="email" defaultValue=""  ></input>
            </div>
          </div>
        </div>
    );
  }
}
