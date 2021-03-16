import React from 'react'

export default class Page3 extends React.Component {
    state = {
        val:''
    }
    handleBlock(value) {
        if(value) {
            //添加阻塞
            this.unBlock = this.props.history.block('切换页面会导致文本无法保存，是否切换?')
        }else {
            if(this.unBlock) {
                this.unBlock();
            }
            
        }
    }
    componentWillUnmount() {
        if(this.unBlock) {
            this.unBlock();
        }
    }
    render() {
        return (
            <div>
                <textarea value={this.state.val} cols="30" rows="10"
                    onChange={e => {
                        this.setState({
                            val:e.target.value
                        })
                        this.handleBlock(e.target.value)
                    }}
                ></textarea>
            </div>
        )
    }
}


