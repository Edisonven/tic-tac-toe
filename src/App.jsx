import { useState } from "react";
import "./App.css";
import Square from "./components/Square";

function App() {
  const turns = {
    X: "x",
    O: "o",
  };

  const winnerCombinatios = [
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

  const checkWinner = (boardToCheck) => {
    for (const combo of winnerCombinatios) {
      const [a, b, c] = combo;

      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  };

  const updateBoard = (index) => {
    if (board[index] || winner) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === turns.X ? turns.O : turns.X;
    setTurn(newTurn);
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    }
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
        {winner !== "" && (
          <section className="app__game__winner">
            <div className="text">
              <h2>{winner === false ? "Empate" : "Ganó"}</h2>
              <header className="app__game__win">
                {winner && <Square>{winner}</Square>}
              </header>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
