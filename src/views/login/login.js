import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
//import {connect} from 'react-redux';
//import {userVer} from './reducer/reducer'
import Logo from './logo.png'
import './login.css';


//a user needs to input username and password to get access
//should athenticate username and password
//directs user to home page
//login button should give access to user home page


class Login extends Component {
    constructor(props){
        super(props);

        this.state={
            username:'',
            password:'',
        }
        this.updateUser=this.updateUser.bind(this);
        this.updatePass=this.updatePass.bind(this);
    }

    updateUser(val){
        this.setState({
            username: val
        })
    }

    updatePass(val){
        this.setState({
            password: val
        })
    }

    

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
                    <div className='buttons'>
                        <button className='loginBut'>Login</button>
                    </div>
                    <br/>
                    <div className='regis'>
                        <Link to='/register'>Register Here!</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login