import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {searchStudents} from './services/student'
ReactDOM.render((
    <React.StrictMode>
        <App/>
    </React.StrictMode>
),document.getElementById('root'));

searchStudents({sex:'1'}).then(resp => console.log(resp))