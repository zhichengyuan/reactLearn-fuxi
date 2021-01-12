import React, { Component } from 'react'
import ValidationComp,{A,B} from './ValidationComp'
import Comp from './Comp'
export default class App extends Component {
  render() {
    return (
      <div>
        <ValidationComp 
        a={1}
        b 
        d={<Comp/>}
        e={<Comp/>}
        f={Comp}
        g={new B()}
        sex={'男'}
        h={[5,6]}
        i={{
          a:1
        }}
        j={{
          name:'张三',
          age:12,
          address:{
            province:'ddd'
          }
        }}
        k={[{
          name:'ddd',
          age:33
        }]}
        m={12}
        n='你的值'
        score={50}
        />
      
      </div>
      
    )
  }
}
