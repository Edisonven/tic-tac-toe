import { useState } from "react";
import "./App.css";
import Square from "./components/Square";

function App() {
  const turns = {
    X: "x",
    O: "o",
  };

  const [board, setBoard] = useState(Array(9).fill("hola"));

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
      </main>
    </div>
  );
}

export default App;
