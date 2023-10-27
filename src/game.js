import React, { useState } from "react";
import { Board } from "./board";

export default function Game() {
  const [xIsNext, setxIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setxIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    
  }

  const moves = history.map((squares, move) => {
    let description;
    if(move>0){
      description = "Go to move #"+move;
    }else{
      description = "Go to game start";
    }
    return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}> {description} </button>
        </li>
    );
  });

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-info">
          <ol>
            {moves}
          </ol>
        </div>
      </div>
    </>
  );
}
