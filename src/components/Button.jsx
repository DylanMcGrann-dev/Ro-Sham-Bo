import React from 'react';
import '../styleSheets/Buttons.module.css'
export default function Button(props) {

  return (
    <div>
      <div>
        <button onClick={() => props.onClick(props.text)}>{props.text}</button>
      </div>
    </div>
  )
}