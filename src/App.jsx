import { useState } from "react";
import "./App.css";

function App() {
  const turns = {
    X: "x",
    O: "o",
  };

  const [board, setBoard] = useState(array(9).fill(null));

  return (
    <div className="app__container">
      <h1>Hola soy la app</h1>
    </div>
  );
}

export default App;
