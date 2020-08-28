import React, { Component } from "react";
import { Input } from "./index";

class RowInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
          <Input
            type={this.props.type}
            name={this.props.name}
            value={this.props.value}
            onChangeValue={(el) => this.props.setValue(el)}
          />
    );
  }
}

export default RowInput;
