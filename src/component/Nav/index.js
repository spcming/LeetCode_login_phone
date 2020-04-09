import React, { Component } from 'react'
import RegisterBox from './RegisterBox'
import './Nav.css'
export default class Nav extends Component {
    constructor(props){
        super(props)
        this.state={
            BoxState:'registerBox'
        }
    }
    render() {
        // console.log(navStyle)
        return (
            <div className='nav'>
                <div className='register' >
                    <a onClick={this.registerShow}>注册</a>
                    &ensp;
                    <span>或</span>
                    &ensp;
                    <a onClick={this.registerShow}>登录</a>
                </div>
                <RegisterBox className={this.state.BoxState} onClick={this.registerHide}></RegisterBox>
            </div>
        )
    }
    registerShow = () => {
        this.setState({
            BoxState:'Showen'
        })
    }
    registerHide= ()=>{
        this.setState({
            BoxState:'Hidden'
        })
    }
}
