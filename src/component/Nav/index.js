import React, { Component } from 'react'
import RegisterBox from './RegisterBox'
import './Nav.css'
export default class Nav extends Component {
    constructor(props){
        super(props)
        this.state={
            BoxStateBg:'initRegisterBox',
            BoxClass:''
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
                <RegisterBox className={this.state.BoxStateBg} onClick={this.registerHide} BoxClass={this.state.BoxClass}/>
            </div>
        )
    }
    registerShow = () => {
        this.setState({
            BoxStateBg:'Showen',
            BoxClass:'BoxShow'
        })
    }
    registerHide= ()=>{
        this.setState({
            BoxStateBg:'Hidden',
            BoxClass:'BoxHide'
        })
    }
}
