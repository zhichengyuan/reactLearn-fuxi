import React from 'react';
import ReactDOM from 'react-dom';
import StudentList from './components/StudentList'

var appkey = 'demo13_1545210570249';
// var appkey = 'yuanzhicheng_1563606632795';
var baseurl = 'http://open.duyiedu.com';

/**
 * 获取所有学生数据
 */

async function fetchAllStudents() {
    var stus = await fetch(`${baseurl}/api/student/findAll?appkey=${appkey}`)
        .then(resp => resp.json()).then(resp => resp.data)
    console.log(stus)
    return stus;
}




// fetchAllStudents();


// ReactDOM.render(
//   <ul>
//     <Student />
//   </ul>,
//   document.getElementById('root')
// );

async function render() {
  ReactDOM.render("正在加载中。。。",document.getElementById('root'));
  const stus = await fetchAllStudents();//获取学生数组
  ReactDOM.render(<StudentList stus={stus}/>,document.getElementById('root'))
}

render();

