import React from 'react';
import ReactDOM from 'react-dom';
import Tick from './components/Tick'

let num = 10;
function start() {
   
    ReactDOM.render(<Tick number={num}></Tick>,document.getElementById('root'));
}
start();
