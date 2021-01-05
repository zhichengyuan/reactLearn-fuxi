import React, { Component } from 'react'
import TreeLayout from './components/common/ThreeLayout'
export default class App extends Component {
 
  render() {
    
    return (
      <div>
        <TreeLayout
          gap={20}
          left={<div style={{
            border:'2px solid #008c8c'
          }}>左边栏</div>}
          right={
            <div style={{
              border:'1px solid red'
            }}>
              右边栏
            </div>
          }
        >
          <div style={{
            border:'2px solid red'
          }}>
            主区域
          </div>
        </TreeLayout>
      </div>
      
    )
  }
}
