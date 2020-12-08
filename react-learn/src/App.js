import Student from './components/Student'
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


function App() {
const stus = fetchAllStudents();//获取学生数组
console.log(stus);
// const content = stus.map(item => <Student {...item}></Student>)

  return (
    <div className="App">
    </div>
  );
}



export default App;