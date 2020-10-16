import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GitApp from './components/GitApp';
// import Button from './components/Button';
// import Display from './components/Display';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <GitApp title='The GitHub Cards App' />
  </React.StrictMode>,
  document.getElementById('root')
);

// Learn Reconciliation in action

// const render = () => {
//   document.getElementById('mountNode').innerHTML = `
//   <div>
//     Hello HTML
//     <br/>
//     <input type=text"/>
//     <br/>
//     <pre>${(new Date).toLocaleTimeString()}</pre>
//   </div>
//   `;
//   ReactDOM.render(
//     React.createElement(
//       "div",null,"Hello React",
//       React.createElement('br', null), 
//       React.createElement('input', null),
//       React.createElement('br', null), 
//       React.createElement('pre', null, (new Date).toLocaleTimeString()), 
//     ),
//     document.getElementById('mountNode2'),
// ); 
// }

// document.getElementById('mountNode').innerHTML = `
//   <div>
//     Hello HTML
//     <br/>
//     <input type=text"/>
//     <br/>
//     <pre>${(new Date).toLocaleTimeString()}</pre>
//   </div>
// `;
// ReactDOM.render(
//   React.createElement(
//     "div",null,"Hello React",
//     React.createElement('br', null), 
//     React.createElement('input', null),
//     React.createElement('br', null), 
//     React.createElement('pre', null, (new Date).toLocaleTimeString()), 
//   ),
//   document.getElementById('mountNode2'),
// );
// setInterval(render, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
