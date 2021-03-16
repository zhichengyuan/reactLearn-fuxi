import React from 'react'
import {Route} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'
import 'animate.css'

export default function TransitionRoute(props) {
    const {component:Component,...rest} = props;
    return (
        <Route {...rest}>
            {({match}) => {
                return <CSSTransition
                    in={match? true:false}
                    timeout={500}
                    classNames={{
                        enter:'animate__animated animate__fast animate__fadeInRight',
                        enterActive:'',
                        exit:'animate__animated animate__fast animate__fadeOutLeft',
                        exitActive:''
                    }}
                    mountOnEnter={true}
                    unmountOnExit={true}
                >
                    <Component/>
                </CSSTransition>
            }}
        </Route>
    )
}
