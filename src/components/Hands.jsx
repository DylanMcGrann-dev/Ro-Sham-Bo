import React from "react";
import "../styleSheets/Hands.css";


export default function Hands(props) {


  return (
    <div>
      <div class='hand'>
        <div class='fist'></div>
        <div class='finger finger1'></div>
        <div class='finger finger2'></div>
        <div class='finger finger3'></div>
        <div class='finger finger4'></div>
        <div class='thumb'></div>
        <div class='arm'></div>
      </div>
      <div class='hand'>
        <div class='compFist'></div>
        <div class='finger CompFinger1'></div>
        <div class='finger CompFinger2'></div>
        <div class='finger CompFinger3'></div>
        <div class='finger CompFinger4'></div>
        <div class='compThumb'></div>
        <div class='compArm'></div>
      </div>
    </div>

  )
}
