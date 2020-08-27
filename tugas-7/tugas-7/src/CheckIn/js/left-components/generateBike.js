import React, { Component } from "react";
import "../../../assets/time";
import time from "../../../assets/time";
import makeIdBike from "../../../assets/makeIdBike";
import nopol from "../../../assets/nopol";
import { saveCostBike } from "./saveToLocalStorage"; 
import { costBike } from "./localStorage";
// import { costBike, costCar } from "./localStorage";

// time()
// makeIdBike()
// nopol()

const bike = costBike
console.log(bike);
// const bikeId = () => {
for(const ind in bike){console.log(bike[ind].id)}

// costCar()

export default function GenerateBike (props){
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "Hello",
  //   };
  //   this.clickHandler = this.clickHandler.bind(this);
  //   // this.saveStorage = this.saveStorage.bind(this);
  //   saveCostBike = this.saveCostBike.bind(this)
  // }

  // clickHandler() {
  //   this.setState({
  //     time: time(),
  //     id: makeIdBike(7),
  //     nopol: nopol(),
  //     // eachBike : bike
  //   });
  // }
  if (props.id === "2"){
    console.log("belum di simpan")
  } else{
  saveCostBike(props.id, props.time, props.nopol)
  }

    return (
      <div>
        <div>
          <h1>{props.id}</h1>
          <h1>{props.time}</h1>
          <h1>{props.nopol}</h1>
        </div>
        <button
          className="uk-button uk-button-default uk-button-large uk-animation-scale-up"
          type="submit"
          onClick={props.generateButton}
        >
          GENERATE BIKE
        </button>
      </div>
    );
  }