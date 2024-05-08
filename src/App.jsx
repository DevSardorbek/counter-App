import { useState } from "react";
import "./App.css";
import Increment from "./components/increment/Increment";
import Result from "./components/result/Result";
import Decrement from "./components/decrement/Decrement";
import Reset from "./components/reset/Reset";

function App() {
  return (
    <div className="app">
      <h1>Counter App</h1>
      <div className="counter">
        <Increment />
        <Result />
        <Decrement />
      </div>
      <div className="reset">
        <Reset />
      </div>
    </div>
  );
}

export default App;
