import React, { Component } from 'react';
import '../../node_modules/uikit/dist/css/uikit.min.css'
import '../../node_modules/uikit/dist/js/uikit.min.js'
import '../../node_modules/uikit/dist/js/uikit-icons.min.js'
import Admin from './AdminPage/admin'
import LogIn from './LogIn/login'


class App extends Component{
  render(){
    return (
      <>
      <Admin/>
      {/* <LogIn/> */}
      {/* <LeftComponent/> */}
      </>
    )
  }
}

export default App;
