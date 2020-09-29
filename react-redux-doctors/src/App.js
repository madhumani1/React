import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * App is a container
 */

function App(props) {
  /*const [count, setcount] = useState(() => {
    console.log('run function')
    return 0;
  })

  function decrementCount() {
    (count>0) ? setcount(prevCount => prevCount-1): setcount(prevCount => prevCount);
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
}*/
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React, {props.name}
        </a>
      </header>
    </div>
  );
}

export default App;
