import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import './register.css';

//When link on login page is clicked it will direct to this view (register)
//a user needs to fill out information in order to create an account
//state should include username, password, first_name, last_name, email, and profilepic
//after information is entered a user should be able to click the 'Submit' button and activate their account
//user information should be stored on user_table
//when submit button is clicked it should direct user to the home screen

class Register extends Component {
        state={
            username:'',
            password:'',
            first_name: '',
            last_name: '',
            email: '',
            profilepic: ''
        }
    
    
    handleChange = e => {
        this.setState({
            [e.target.className]: e.target.value
        })
    }
    
    register = () => {
        //register obj
        const regisObj = {
            email: this.state.email,
            password: this.state.password,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            username: this.state.username,
            profilepic: this.state.profilepic  
        }
        //post request to register
        axios.post('/api/register', regisObj)
            //backend response
            .then((backendRes) => {
                //checking successful registration 
                if(backendRes.data.success) {
                    //dispatch obj to store
                    this.props.dispatch({
                        type: 'user',
                        payload: backendRes.data.user
                    })
                    //push to home 
                    this.props.history.push('/home');
                }
                else{
                    alert('Please make sure all boxes were filled.')
                }
            })
    }
    
    render(){
        return(
            <div className="register">
                <div className='regisBox'>
                    <h1 className='welcome'>Welcome to</h1>
                    <h1 className='faf'>Fetch-a-Friend</h1>
                    <h2 className='askinfo'>Please fill out the registration form to create an account.</h2>
                    <form className='userinfo'>
                        <div className='name1'>
                            <p>First Name</p>
                            <input className='first_name' type='text' value={this.state.first_name} onChange={this.handleChange}/>
                        </div>
                        <div className='name2'>
                            <p>Last Name</p>
                            <input className='last_name' type='text'value={this.state.last_name} onChange={this.handleChange}/>
                        </div>
                        <div className='pic'>
                            <p>Profile Picture</p>
                            <input className='profilepic' type='text'value={this.state.profilepic} onChange={this.handleChange}/>
                        </div>
                        <div className='emailbox'>
                            <p>Email Address</p>
                            <input className='email' id='emailregis' type='text' value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className='confbox'>   
                            <p>Username</p>
                            <input className='username' type='text' value={this.state.username} onChange={this.handleChange}/>
                            <p>Password</p>
                            <input className='password' id='passwordreg' type='text'value={this.state.password} onChange={this.handleChange}/>
                        </div>
                        <div className="regisButBox">
                            <button className='regisbut' onClick={this.register}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}



export default connect(state => state)(Register)