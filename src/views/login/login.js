import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Logo from './logo.png'
import './login.css';

class Login extends Component {
    render(){
        return(
            <div className="login">
                <div className='lrbox' id='lrbox'>
                    <div className='logobox'>
                        <img className='logo' src={Logo}/>
                    </div>
                    <div className='appname'>
                        <h1 className='faf'>Fetch-a-Friend</h1>
                    </div>
                    <div className='inputs'>
                        <p>Username</p>
                        <input className='username'></input>
                    </div>
                    <div className='inputs'>
                        <p>Password</p>
                        <input className='password'></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login