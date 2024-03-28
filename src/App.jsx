import { useState } from "react";
import "./App.css";

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
          {board.map((board) => {
            return (
              <div className="app__game__cell">
                <span className="app__game__cellcontent">{board}</span>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}

export default App;
