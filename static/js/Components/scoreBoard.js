import React from "react";
import "./scoreBoard.css";

export const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;
  return (
    <div className="scoreBoard">
      <span className={`score X ${!xPlaying && "inActive"}`}>X - {xScore}</span>
      <span className={`score O ${xPlaying && "inActive"}`}>O - {oScore}</span>
    </div>
  );
};
