import React from "react";
import { Box } from "./Box";
import "./Board.css";

export const Board = ({ board, onclick }) => {
  return (
    <div className="board">
      {board.map((value, ind) => {
        return (
          <Box
            value={value}
            onclick={() => value === null && onclick(ind)}
            key={ind}
          />
        );
      })}
    </div>
  );
};
