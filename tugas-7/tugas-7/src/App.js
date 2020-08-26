import React, { Component } from 'react';
import '../../node_modules/uikit/dist/css/uikit.min.css'
import '../../node_modules/uikit/dist/js/uikit.min.js'
import '../../node_modules/uikit/dist/js/uikit-icons.min.js'
import Admin from './AdminPage/admin'
import LogIn from './LogIn/login'
import CheckIn from './CheckIn/checkin'

import generateCar from './CheckIn/js/left-components/generateCar';


class App extends Component{
  render(){
    return (
      <>
      <generateCar/>
      {/* <Admin/> */}
      {/* <CheckIn/> */}
      {/* <LogIn/> */}
      {/* <LeftComponent/> */}
      </>
    )
  }
}

export default App;
