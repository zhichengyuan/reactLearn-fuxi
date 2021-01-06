import React, { Component } from 'react'
import Numberinput from './components/Numberinput.'
export default class App extends Component {
  state = {
    val:123,
    checked:true,
    loves:['足球','篮球','音乐','其他'],
    chooseLoves:[],
    selVal:'beijing'
  }

 
  render() {
    const checkboxs = this.state.loves.map(it => (<label key={it}>
      <input type="checkbox"
        checked={this.state.chooseLoves.includes(it)}
        onChange={(e) => {
          
          if(e.target.checked) {
            
            this.setState({
              chooseLoves:[...this.state.chooseLoves,it]
            })
          }else{
            this.setState({
              chooseLoves:this.state.chooseLoves.filter(l => l !== it)
            })
          }
         
        }}
      />
      {it}
      </label>))
    
    return (
      <div>
        <div>
        <Numberinput/>
        <input type="checkbox" checked={this.state.checked} onChange ={(e) => {
          this.setState({
            checked:e.target.checked
          })
        }}/>
        </div>
        <div>
        {checkboxs}
        </div>
        <div>
         <select value={this.state.selVal} onChange={(e) => {
           this.setState({
             selVal:e.target.value
           })
         }}>
           <option value="beijing">北京</option>
           <option value="shanghai">上海</option>
           <option value="shenzheng">深圳</option>
         </select>
        </div>
        {/* 默认情况下，它是一个非受控组件 */}
        {/* <input type="text" value={this.state.val} onChange={(e) => {
          this.setState({
            val:e.target.value
          })
        }}/>
        <button onClick={() => {
          console.log(this.state.val);
        }}>获取文本框的值</button> */}

        
      </div>
      
    )
  }
}
