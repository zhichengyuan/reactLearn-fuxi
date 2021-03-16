import { Component } from 'react';
import {BrowserRouter as Router, withRouter,} from "react-router-dom"

let prevLoaction,location,action,unBlock;

class _GuardHelper extends Component {
    componentDidMount(){
        unBlock =  this.props.history.block((newlocation,ac) => {
            prevLoaction = this.props.location;
            location = newlocation;
            action = ac;
            return '';
        })
        this.unListen = this.props.history.listen((location,action) => {
            if(this.props.onChange) {
                const prevLoaction = this.props.location;
                this.props.onChange(prevLoaction,location,action,this.unListen)
            }
        })
    }
    componentWillUnmount() {
        unBlock();
        this.unListen()
    }
    render() {
        return null;
    }
}

const GuardHelper = withRouter(_GuardHelper)

class RouteGuard extends Component {
    handleConfirm = (msg,commit) => {
        if(this.props.onBeforeChange) {
            this.props.onBeforeChange(prevLoaction,location,action,commit,unBlock)
        }
        else {
            commit(true)
        }
    }
    render() {
        return <Router getUserConfirmation={this.handleConfirm}>
            <GuardHelper onChange={this.props.onChange}/>
            {this.props.children}
        </Router>;
    }
}

export default RouteGuard;