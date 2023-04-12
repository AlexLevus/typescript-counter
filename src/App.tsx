import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
          <button onClick={() => setCounter(counter - 1)}>-</button>
          <p>{counter}</p>
          <button onClick={() => setCounter(counter + 1)}>+</button>
      </header>
    </div>
  );
}

export default App;
