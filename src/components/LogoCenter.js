import React, { Component } from 'react';
import logo from '../assets/logo.png';
import '../css/LogoCenter.css'

class LogoCenter extends Component{
    render(){
        return(
            <div className = "page1">
                <img src = {logo}  alt = "logo"/>
            </div>
        )
    }
}
export default LogoCenter