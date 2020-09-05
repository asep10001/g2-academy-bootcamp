import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import {BrowserRouter} from "../node_modules/react-router-dom/"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
