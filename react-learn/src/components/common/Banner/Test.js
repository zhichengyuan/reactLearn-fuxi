import React, { Component } from 'react';
import Banner from './index'
import Src1 from './img/1.jpg'
import Src2 from './img/2.jpg'
import Src3 from './img/3.png'
import Src4 from './img/4.jpg'

class Test extends Component {
    render() {
        return (
            <div className="container">
                <Banner imgSrcs={[Src1,Src2,Src3,Src4,Src2]} duration={1000}/>
            </div>
        );
    }
}

export default Test;