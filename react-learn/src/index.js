import React from 'react';
import ReactDOM from 'react-dom';
import MyCom from './MyCom';
import TickControl from './TickControl'

function handleClick() {
    console.log('点击了')
}

const btn = <button onClick={handleClick}>点击</button>

ReactDOM.render(<TickControl></TickControl>,document.getElementById('root'));

