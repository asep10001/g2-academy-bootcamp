import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{ padding: "10px 15px", border: "solid 1px lightgray", marginRight: "10px" }}>
                { this.props.children }
            </div>
         );
    }
}
 
export default Menu;