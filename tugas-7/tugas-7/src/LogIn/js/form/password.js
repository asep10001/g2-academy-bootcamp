import React, { Component } from "react";

export class Password extends Component {
  render() {
    return (
      <div className="field">
        <div className="field">
          <label>Password</label>
          <div className="ui fluid input">
            <input type="password" defaultValue=""></input>
          </div>
        </div>
      </div>
    );
  }
}
