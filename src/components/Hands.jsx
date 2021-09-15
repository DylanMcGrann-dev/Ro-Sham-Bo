import React from "react";
import style from "../styleSheets/Hands.module.css";

export default function Hands(props) {

  return (
    <div className={style.hand}>
      <div className={style.fist}></div>
      <div className={style.finger}></div>
      <div className={style.finger}></div>
      <div className={style.finger}></div>
      <div className={style.finger}></div>
      <div className={style.thumb}></div>
      <div className={style.arm}></div>
    </div>

  )
}
