import React, { Component } from 'react'
// import Numberinput from './components/Numberinput'
import CheckBoxGroup from './components/common/CheckBoxGroup/Test'
import RadioBoxGroup from './components/common/RadioBoxGroup/Test'
import Select from './components/common/Select/Test'
export default class App extends Component {
  
  render() {
    
    return (
      <div>
        <h2>单选框</h2>
        <RadioBoxGroup/>
        <h2>多选框</h2>
        <CheckBoxGroup/>
        <h2>下拉框</h2>
        <Select/>
      </div>
      
    )
  }
}
