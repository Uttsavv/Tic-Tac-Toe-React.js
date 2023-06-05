import React, { useState } from "react";
import "./App.css";
import { Board } from "./Components/Board";
import { ScoreBoard } from "./Components/scoreBoard";
import { ResetButton } from "./Components/resetButton";

function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setgameOver] = useState(false);

  const handleBoxClick = (boxInd) => {
    const updatedBoard = board.map((val, Ind) => {
      if (boxInd === Ind) return xPlaying === true ? "X" : "O";
      else return val;
    });

    setXPlaying(!xPlaying);
    setBoard(updatedBoard);
    const winner = checkWinner(updatedBoard);
    if (winner) {
      if (winner === "X") {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      } else {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      }
    }
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setgameOver(true);
        return board[x];
      }
    }
  };

  const resetBoard = () => {
    setgameOver(false);
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="App">
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onclick={gameOver ? resetBoard : handleBoxClick} />
      <ResetButton reset={resetBoard} />
    </div>
  );
}

export default App;
