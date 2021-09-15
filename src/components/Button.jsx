import React from 'react';
import style from '../styleSheets/Buttons.module.css'
export default function Button(props) {

  return (
    <div>
      <div className={style.buttonDiv}>
        <button onClick={() => props.onClick(props.text)}/>
        <p>{props.text}</p>
      </div>
    </div>
  )
}