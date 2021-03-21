import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { shapeShifter } from "./utilities/mapped-type";

function App() {
  const persons = [
    { name: "John", occupation: "plumber" },
    { name: "Mary", occupation: "accountant" },
  ] as const;
  console.log(
    shapeShifter<typeof persons[number]>({ data: persons })
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
