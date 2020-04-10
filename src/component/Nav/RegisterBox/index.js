import React, { Component } from 'react'


export default class RegisterBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countryPhoneCode: '+86',
            iconType: {
                content: '',
                top: '5px'
            },
            countrySelectBoxIsShowing: false,
            phoneNumber: null,
            phoneIsRight: false,
            phoneReg: /^\+861206710179$/
        }
    }
    render() {
        return (
            <div className={this.props.className + ' ' + 'registerBoxBg'} onClick={this.props.onClick}>
                <div className={this.props.BoxClass + ' registerBox'} onClick={(e) => { e.stopPropagation() }}>
                    <h1 className='registerTitle'>欢迎使用力扣</h1>

                    <div className='registerInput' >
                        <span onClick={this.selectCounry} className='registerSelectCountry'>
                            {this.state.countryPhoneCode}
                            <i style={{ top: this.state.iconType.top }}>{this.state.iconType.content}</i>
                        </span>
                        <input ref='phone' type='text' className='registerPhone' placeholder='输入手机号'
                            onChange={this.testPhone}></input>
                    </div>

                    <div className='registerInput' >
                        <input type='text' placeholder='验证码' className='registerCode' id='registerCode'></input>
                        <label htmlFor='registerCode' className={
                            this.state.phoneIsRight ? 'registerSendCodeuse' : 'registerSendCodeDisable'
                        } onClick={this.getCode} ref='CodeSecond'>获取验证码</label>
                    </div>

                </div>
            </div>
        )
    }
    selectCounry = () => {
        this.state.countrySelectBoxIsShowing
            ?
            this.setState({
                iconType: {
                    content: '',
                    top: '5px'
                },
                countrySelectBoxIsShowing: false
            })
            :
            this.setState({
                iconType: {
                    content: '',
                    top: '0px'
                },
                countrySelectBoxIsShowing: true
            })

    }
    testPhone = () => {

        this.setState({
            phoneNumber: this.state.countryPhoneCode + this.refs.phone.value
        }, () => {
            this.setState({
                phoneIsRight: this.state.phoneReg.test(this.state.phoneNumber)
            })
        })
    }
    getCode = () => {
        this.setState({
            phoneIsRight: false
        })
        let second = 60;
        this.refs.CodeSecond.innerHTML = `${second} 秒后可重发`
        let timer = setInterval(()=>{
            second--;
            this.refs.CodeSecond.innerHTML = `${second} 秒后可重发`
            if(second === 0){
                clearInterval(timer)
                this.setState({
                    phoneIsRight: this.state.phoneReg.test(this.state.phoneNumber)
                })
                this.refs.CodeSecond.innerHTML = '获取验证码'
            }
        },1000)
    }
}
