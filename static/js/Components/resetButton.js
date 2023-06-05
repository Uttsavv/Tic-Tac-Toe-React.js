import React from "react";
import "./resetButton.css";

export const ResetButton = ({ reset }) => {
  return (
    <button onClick={reset} className="resetButton">
      Reset
    </button>
  );
};
