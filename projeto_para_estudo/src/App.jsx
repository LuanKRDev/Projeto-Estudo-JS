import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Execute from "./Scripts/Execute";

function App() {
  const [history, setHistory] = useState([]);
  const [executeMSG, setExecuteMSG] = useState(null);
  const [error, setError] = useState(false);

  const OnExecute = () => {
    try {
      const final = Execute();
      setError(false);
      setExecuteMSG(final.toString());
    } catch (error) {
      setExecuteMSG(error.toString());
      setError(true);
    }
  };

  return (
    <>
      <div className="top">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={`containerExecute ${error ? "error" : ""}`}>
        {executeMSG !== null && <span>{executeMSG}</span>}
      </div>
      <div className="card">
        <button onClick={() => OnExecute()}>Executar</button>
      </div>
    </>
  );
}

export default App;
