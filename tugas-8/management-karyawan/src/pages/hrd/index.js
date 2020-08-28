import React, { Component } from 'react'
import InputKaryawan from '../inputKaryawan';

class HalamanHRD extends Component {
    constructor(props) {
        super(props);
    
        this.state = { nik: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({ nik: event.target.value });
      }
    render() {
        return (
<InputKaryawan nik={this.state.nik}/>
        )
    }
}

export default HalamanHRD;
