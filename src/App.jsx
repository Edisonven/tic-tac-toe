import { useState } from "react";
import "./App.css";

function App() {
  const turns = {
    X: "x",
    O: "o",
  };

  const [board, setBoard] = useState(Array(9).fill(null));

  return (
    <div className="app__container">
      <h1 className="app__title">Tic - Tac - Toe</h1>
    </div>
  );
}

export default App;
