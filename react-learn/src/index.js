import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
ReactDOM.render(<App/>,document.getElementById('root'));
document.addEventListener('click',function(e) {
    console.log("真实DOM：document 被点击了");
})

