import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Logo from './logo.png'
import './login.css';
import { connect } from 'react-redux';
import Spinner from '../../UI/spinner';


//a user needs to input username and password to get access
//should athenticate username and password
//directs user to home page
//login button should give access to user home page


class Login extends Component {
     state={
        email:'',
        password:'',
        loading: false
    }
        
    handleChange = e => {
        this.setState({
            [e.target.className]: e.target.value
        })
    }
    

    login = () => {
        //body in backend
        const loginObj ={
            email: this.state.email,
            password: this.state.password
        }
        //post req to login
        axios.post('/api/login', loginObj)
            //response from backend
            .then((backendRes) => {
                //check for successful login
                if(backendRes.data.success){
                    //dispatch obj to store
                    this.props.dispatch({
                        type: 'user',
                        payload: backendRes.data.user
                    })
                    //push to home view
                    this.props.history.push('/home');
                }
                else{
                    alert('Bad Credentials')
                }
            })
    }

    render(){
        let loginCont = <div className='lrbox' id='lrbox'>
                    <div className='logobox'>
                        <img className='logo' src={Logo} alt="logo"/>
                    </div>
                    <div className='appname'>
                        <h1 className='faf'>Fetch-a-Friend</h1>
                    </div>
                    <div className='inputs'>
                        <p>Email</p>
                        <input className='email' value={this.state.email} onChange={this.handleChange}></input>
                    </div>
                    <div className='inputs'>
                        <p>Password</p>
                        <input className='password'value={this.state.password} onChange={this.handleChange}></input>
                    </div>
                    <div className='buttons'>
                        <button className='loginBut' onClick={this.login}>Login</button>
                    </div>
                    <br/>
                    <div className='regis'>
                        <Link to='/register'>Register Here!</Link>
                    </div>
                </div>;
                if(this.state.loading){
                    loginCont = <Spinner/>
        }
        return(
            <div className="login">
               {loginCont}
            </div>
        )
    }
}

export default connect(state => state)(Login)