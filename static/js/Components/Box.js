import React from "react";
import "./Box.css";

export const Box = ({ value, onclick }) => {
  const style = value === "X" ? "box X" : "box O";
  return (
    <button className={style} onClick={onclick}>
      {value}
    </button>
  );
};
