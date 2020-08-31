import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./template/navbar";
import "../node_modules/uikit/dist/css/uikit.min.css";
import "../node_modules/uikit/dist/js/uikit.min.js";
import "../node_modules/uikit/dist/js/uikit-icons.min.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.state.userData);
    return (
      <div className="App next">
        <BrowserRouter>
            <NavBar />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
