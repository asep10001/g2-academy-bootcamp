
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import { Header, NavBar, Footer } from "./template"
import "../../node_modules/uikit/dist/css/uikit.min.css";
import "../../node_modules/uikit/dist/js/uikit.min.js";
import "../../node_modules/uikit/dist/js/uikit-icons.min.js";
import './App.css';
import Member from './pages/member';



function App() {
  return (
    <div className="App next">
      <Router>
        {/* <Header /> */}
        <NavBar />
        <Footer />
        {/* <Member/> */}
      </Router>
    </div>
  );
}

export default App;