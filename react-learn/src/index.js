import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import src1 from './assets/1.jpg'
import src2 from './assets/2.jpg'
import src3 from './assets/3.jpg'
import './index.css'

const srcArr = [src1,src2,src3];

let index = 0;//显示的图片索引

let timer = null;

const container = document.getElementById('root');

function render() {
  ReactDOM.render(<img src={srcArr[index]} alt=""/>,container)
}

function start() {
  stop();
  timer = setInterval(() => {
    index = (index + 1 ) % 3;
    render();
  }, 2000);
}

// 停止计时器
function stop() {
  clearInterval(timer);
}

container.onmouseenter = function () {
  stop();
}

container.onmouseleave = function(){
  start();
}
render();
start();

