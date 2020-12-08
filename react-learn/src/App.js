
import  MyFuncComp from './MyFuncComp'
import MyClassComp from './MyClassComp'

function App() {
  return (
    <div className="App">
      <MyClassComp number='5' obj={{name:'你难道',age:12}}>></MyClassComp>
      <MyFuncComp number='3'></MyFuncComp>
      <MyFuncComp number='3' ui={<h1>ui</h1>}></MyFuncComp>
    </div>
  );
}



export default App;