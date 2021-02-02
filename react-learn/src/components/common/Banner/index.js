import React, { Component } from 'react';
import './index.css'
import PropTypes from 'prop-types';
import ImgContainer from './ImgContainer'
import SwitchArrow from './SwitchArrow'
import SwitchDot from './SwitchDot'


class Banner extends Component {

    static defaultProps = {
        width:520,
        height:280,
        imgSrcs:[],
        autoDuration:3000,
        duration:2000,
    }

    static propTypes = {
        width:PropTypes.number.isRequired,////容器宽度
        height:PropTypes.number.isRequired,////容器高度
        imgSrcs:PropTypes.arrayOf(PropTypes.string).isRequired,//图片数组
        autoDuration:PropTypes.number.isRequired,//自动切换的间隔时间
        duration:PropTypes.number.isRequired,//完成一次切换的时间
    }

    state = {
        curIndex:0//当前显示的第几张图片
    }

    imgContainerRef = el => {
        this.imgContainer = el;
    }
    timer = null;//自动切换的计时器

    autoSwitch() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            var cur = this.state.curIndex;
            cur = (cur + 1) % this.props.imgSrcs.length;
            this.handleSwith(cur);
        },this.props.autoDuration)
    }

    componentDidMount() {
        this.autoSwitch();
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    handleArrowChange = type => {
        console.log(type)
        var cur = this.state.curIndex;
        if(type === 'left') {
            cur --;
            if(cur<0) {
                cur = this.props.imgSrcs.length -1;
            }
        } else {
            cur++;
            if(cur > this.props.imgSrcs.length - 1) {
                cur = 0;
            }
        }
        
        this.handleSwith(cur);
    }
    /**
     * 切换到
     */
    handleSwith = index => {
        this.setState({
            curIndex:index
        })
        //得到ImgContainer的组件对象
        this.imgContainer.switchTo(index);
    }

    render() {
        return (
                <div className="banner-container"
                    style = {{
                        width:this.props.width,
                        height:this.props.height
                    }}
                    onMouseEnter={() => {
                        clearInterval(this.timer)
                    }}
                    onMouseLeave={() => {
                        this.autoSwitch();
                    }}
                >
                    <ImgContainer
                    ref={this.imgContainerRef}
                    imgSrcs={this.props.imgSrcs} 
                    imgWidth={this.props.width} 
                    imgHeight={this.props.height}
                    duration={this.props.duration}
                    />
                    <SwitchArrow onChange={this.handleArrowChange}/>
                    <SwitchDot 
                        total={this.props.imgSrcs.length} 
                        curIndex={this.state.curIndex}
                        onChange={this.handleSwith}
                    />
                </div>
           
            
        );
    }
}

export default Banner;