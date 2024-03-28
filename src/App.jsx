import { useState } from "react";
import "./App.css";
import Square from "./components/Square";
import confetti from "canvas-confetti";

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

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null);
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
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner("");
    setTurn(turns.X);
  };

  return (
    <div className="app__container">
      <main className="app__board">
        <h1 className="app__title">Tic - Tac - Toe</h1>
        <button onClick={resetGame}>Empezar otra vez</button>
        <section className="app__game">
          {board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                <span>{square}</span>
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
              <footer>
                <button onClick={resetGame}>Empezar otra vez</button>
              </footer>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
