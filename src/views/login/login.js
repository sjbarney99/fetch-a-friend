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
    // this.state={
    //     username:'',
    //     password:'',
    // }
        
    // handleChange = e => {
    //     this.setState({
    //         [e.target.className]: event.target.value
    //     })
    // }
    

    // login() {
    //     axios.post('/login/login', {withCredentials: true, username: this.state.username, password: this.state.password})
    //         .then(results => {
    //             const {user_id, username, profilepic} = results.data.[0];
    //             this.state({
    //                 username: '',
    //                 password: ''
    //             })
    //             this.props.history.push('/home')
    //         })
    // }

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
                        <input className='username' value={this.state.username} onChange={this.handleChange}></input>
                    </div>
                    <div className='inputs'>
                        <p>Password</p>
                        <input className='password'value={this.state.password} onChange={this.handleChange}></input>
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