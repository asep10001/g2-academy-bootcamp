import React, { Component } from 'react'

class DaftarDivision extends Component {
 
    constructor(props) {
        super(props)
    
        this.state = {
             divisi: this.props.divisi
        }

    }
    
    render() {
        return (
            <div>
                <h1>Hi</h1>
                    <h1>Hokage</h1>
                    <h1>Jonin</h1>
                    <h1>Chunnin</h1>
                    {this.props.divisi}
            </div>
        )
    }
}

export default DaftarDivision;
