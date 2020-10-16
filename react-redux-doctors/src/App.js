import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Text from './components/Text';
import { render } from '@testing-library/react';


function App() {
  /**
   * The argument to useState is the initial value for the state element
   * const [state,functionToSetStateValue] = useState(initialStateValue);
   * To support dynamic elements, JSX uses {}. 
   * For return(<button>{expression}</button>); 
   * will give you a value based on resolution of expression.
   * To make stateful object, we need to make a state object.
   * To make state object, we need to use a hook called useState
   * 
   * syntax of useState 
   * useState returns 2 objects and 1 argument - 
   * state object (getter) and updater function (setter) to change that object.
   * Object can be of any type you wish it to be. 
   * String, Number, array or even another component.
   */
  const [count,setCount] = useState(() => {
      console.log('run function');
      return 0;
    }
  );

  const onIncrement = (hopper) => setCount(count+hopper);
  const onDecrement = (hopper) => setCount(count-hopper);
  // if you prefer ONLY non negative numbers
  //(count<=0)?setCount(count):setCount(count-hopper);

  return(
    <>
      <Button onButtonClick={onDecrement} name='-' hopper={10}/>
      <Button onButtonClick={onDecrement} name='-' hopper={5}/>
      <Button onButtonClick={onDecrement} name='-' hopper={1}/>&nbsp;&nbsp;&nbsp;&nbsp;
      <Text value={count} />&nbsp;&nbsp;&nbsp;&nbsp;
      <Button onButtonClick={onIncrement} name='+' hopper={1}/>
      <Button onButtonClick={onIncrement} name='+' hopper={5}/>
      <Button onButtonClick={onIncrement} name='+' hopper={10}/>
    </>
  );
  // return(
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
