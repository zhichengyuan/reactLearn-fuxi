
import src1 from './assets/1.jpg'
import src2 from './assets/2.jpg'
import src3 from './assets/3.jpg'

const srcArr = [src1,src2,src3];

let index = 0;//显示的图片索引

function render() {
  return (
      <img src={srcArr[index]} alt=""/>
  );
}

function start() {
  setInterval(() => {
    console.log(index);
    index = (index + 1 ) % 3;
    render();
  }, 2000);
}

function App() {
  return (
    <div className="App">
      {render()}
    </div>
  );
}



export default App;