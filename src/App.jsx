import { useState } from "react";
import "./App.css";
import Square from "./components/Square";

function App() {
  const turns = {
    X: "x",
    O: "o",
  };

  const winnerComibatios = [
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
  const [turn, setTurn] = useState(turns.X);
  const [winner, setWinner] = useState("");

  const updateBoard = (index) => {
    if (board[index]) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === turns.X ? turns.O : turns.X;
    setTurn(newTurn);
  };

  return (
    <div className="app__container">
      <main className="app__board">
        <h1 className="app__title">Tic - Tac - Toe</h1>
        <section className="app__game">
          {board.map((board, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                <span>{board}</span>
              </Square>
            );
          })}
        </section>
        <section className="app__game__turn">
          <Square isSelected={turn === turns.X}>{turns.X}</Square>
          <Square isSelected={turn === turns.O}>{turns.O}</Square>
        </section>
      </main>
    </div>
  );
}

export default App;
