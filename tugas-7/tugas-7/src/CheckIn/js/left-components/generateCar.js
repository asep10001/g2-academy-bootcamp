import React, { Component } from "react";
import carFunction from "./carFunction";
import { saveCostCar } from "./saveToLocalStorage";

export default function  GenerateCar (props) {
  if (props.id !== ""){
    saveCostCar(props.id, props.time, props.nopol)
  } else{
    console.log("belum di simpan")
  }
  return(
    <div>
    <div>
      <h1>{props.id}</h1>
      <h1>{props.time}</h1>
      <h1>{props.nopol}</h1>
    </div>
    <button
      className="uk-button uk-button-default uk-button-large uk-animation-scale-up"
      type="submit"
      onClick={props.generate}
    >
      GENERATE CAR
    </button>
  </div>

  ) 

  }





