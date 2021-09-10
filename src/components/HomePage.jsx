import React, { useState } from 'react';
import style from '../App.module.css';
import Button from './Button';

export default function Homepage() {
  const [playerState, setPlayerState] = useState("");
  const [computerState, setComputerState] = useState("");
  const [computerScore, setComputerScore] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function playerWin() {
    setPlayerScore(playerScore + 1);
    alert("player wins!");
  }

  function computerWin() {
    setComputerScore(computerScore + 1);
    alert("computer wins");
  }

  const arr = ['rock', 'paper', 'scissors'];

  function whoWins(compAnswer) {
    setComputerState(compAnswer);
    if (playerState !== computerState) {
      switch (playerState) {
        case "rock":
          (computerState === "paper") ? computerWin() : playerWin()
          break;
        case "paper":
          (computerState === "scissors") ? computerWin() : playerWin()
          break;
        case "scissors":
          (computerState === "rock") ? computerWin() : playerWin()
          break;
        default:
          console.log("if doesn't work");
      }
    } else {
      alert("it's a tie!!");
    }
  }


  return (
    <div className="bodyStyle">
      <header>
        <div className={style.scoreBoard}>
          <div className={style.bodyStyle}>
            <h2 className={style.text}>Player</h2>
            <h2 className={style.scoreCounter}>{playerScore}</h2>
          </div>
          <div className={style.titlePlacement}>
            <h1 className="wText">Rock Paper Scissors</h1>
          </div>
          <div className={style.bodyStyle}>
            <h2 className={style.scoreCounter}>{computerScore}</h2>
            <h2 className={style.text}>Computer</h2>
          </div>
        </div>
      </header>
      <main>
        <div className={style.scoreBoard}>
          <span>player {playerState}</span>
          <span>{computerState} Computer</span>
        </div>
      </main>
      <footer>
        <article>
          <div className={style.scoreBoard}>
            <Button
              text='rock'
              onClick={setPlayerState} />
            <Button
              text='paper'
              onClick={setPlayerState} />
            <Button
              text='scissors'
              onClick={setPlayerState} />
          </div>
          <div>
            <button onClick={() => whoWins(arr[getRandomInt(3)])}>Submit</button>
          </div>
        </article>
        <div>
          <h2>HighScore</h2>
        </div>
      </footer>
    </div>
  )
}
