import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setcount] = useState(() => {
    console.log('run function')
    return 0;
  })

  function decrementCount() {
    setcount(prevCount => prevCount-1)
  }

  function incrementCount() {
    setcount(prevCount => prevCount+1)
  }

  return (
    <>
    <button onClick={decrementCount}>-</button>
  <span>{count}</span>
    <button onClick={incrementCount}>+</button>
    </>
  );
  //return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

}

export default App;
