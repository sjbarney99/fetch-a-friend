import React, {Component} from 'react';
import axios from 'axios';
import Register from './../register/register'
//import {connect} from 'react-redux';
//import {userVer} from './reducer/reducer'
import Logo from './logo.png'
import './login.css';


//a user needs to input username and password to get access


class Login extends Component {
    constructor(props){
        super(props);

        this.state={
            username:'',
            password:'',
            first_name: '',
            last_name: '',
            email: '',
            profilepic: ''
        }
        this.updateUser=this.updateUser.bind(this);
        this.updatePass=this.updatePass.bind(this);
        this.updateFirst=this.updateFirst.bind(this);
        this.updateLast=this.updateLast.bind(this);
        this.updateEmail=this.updateEmail.bind(this);
        this.updatePic=this.updatePic.bind(this);
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

    updateFirst(val) {
        this.setState({
            first_name: val
        })
    }

    updateLast(val) {
        this.setState({
            last_name: val
        })
    }

    updateEmail(val) {
        this.setState({
            email: val
        })
    }

    updatePic(val) {
        this.setState({
            profilepic: val
        })
    }

    register(){
        axios.post('login/register', {
            username:this.state.username, 
            password:this.state.password, 
            first_name:this.state.first_name, 
            last_name:this.state.last_name, 
            email:this.state.email,
            profilepic:this.state.profilepic})
            .then(results => {
                const {username,password,first_name,last_name,email,profilepic} = results.data[0];
                
                this.props.userVer( username, password, profilepic, first_name, last_name, email);
                this.setState({
                    username: '',
                    password: ''
                })
                this.props.history.push('/home');
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
                        <button className='regis' onClick={<Register/>}>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login