import React, { useState } from 'react';
import style from '../App.module.css';

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
        <h1 className="wText">Rock Paper Scissors</h1>
        <div className={style.scoreBoard}>
          <h2>Player {playerScore}</h2>
          <h2>Score</h2>
          <h2>{computerScore} Computer</h2>
        </div>
      </header>
      <main>
        <div className={style.scoreBoard}>
          <span>player {playerState}</span>
          <span>{computerState} Computer</span>
        </div>
      </main>
      <article>
        <div className={style.scoreBoard}>
          <button onClick={() => setPlayerState("rock")}>rock</button>
          <button onClick={() => setPlayerState("paper")}>paper</button>
          <button onClick={() => setPlayerState("scissors")}>scissors</button>
        </div>
        <div>
          <button onClick={() => whoWins(arr[getRandomInt(3)])}>Submit</button>
        </div>
      </article>
      <footer>
        <div>
          <h2>HighScore</h2>
        </div>
      </footer>
    </div>
  )
}
