import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <Counter initialCount={0} />
      <p>learn react</p>
    </div>
  );
}

export default App;