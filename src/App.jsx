import { useState } from "react";
import "./App.css";
import Square from "./components/Square";

function App() {
  const turns = {
    X: "x",
    O: "o",
  };

  const [board, setBoard] = useState(Array(9).fill("hola"));
  const [turn, setTurn] = useState(turns.X);

  return (
    <div className="app__container">
      <main className="app__board">
        <h1 className="app__title">Tic - Tac - Toe</h1>
        <section className="app__game">
          {board.map((board, index) => {
            return (
              <Square key={index}>
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
