import React, { Component } from 'react';
import '../../node_modules/uikit/dist/css/uikit.min.css'
import '../../node_modules/uikit/dist/js/uikit.min.js'
import '../../node_modules/uikit/dist/js/uikit-icons.min.js'
import Background from './right-components/background'


class App extends Component{
  render(){
    return (
      <div class="uk-child-width-1-3 uk-grid" uk-grid>
      <Background/>
      <h1>HELLO</h1>
      </div>
    )
  }
}

export default App;
