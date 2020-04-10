import React, { Component } from 'react'



export default class RegisterBox extends Component {
    render() {
        return (
            <div className={this.props.className + ' ' + 'registerBoxBg'} onClick={this.props.onClick}>
                <div className={this.props.BoxClass + ' registerBox'} onClick={(e) => { e.stopPropagation() }}>
                    <h1 className='registerTitle'>欢迎使用力扣</h1>
                    <input className='registerPhone registerInput' type='text'></input>
                    <input className='registerPhone registerInput' type='text'></input>
                </div>
            </div>
        )
    }
}
