import React, {Component} from 'react';
import axios from 'axios';
import * as actions from '../../Ducks/action_creator';
import {connect} from 'react-redux';
import './register.css';
//When link on login page is clicked it will direct to this view (register)
//a user needs to fill out information in order to create an account
//state should include username, password, first_name, last_name, email, and profilepic
//after information is entered a user should be able to click the 'Submit' button and activate their account
//user information should be stored on user_table
//when submit button is clicked it should direct user to the home screen

class Register extends Component {
    // constructor(props){
    //     super(props);

    //     this.state={
    //         username:'',
    //         password:'',
    //         first_name: '',
    //         last_name: '',
    //         email: '',
    //         profilepic: ''
    //     }
    //     this.updateUser=this.updateUser.bind(this);
    //     this.updatePass=this.updatePass.bind(this);
    //     this.updateFirst=this.updateFirst.bind(this);
    //     this.updateLast=this.updateLast.bind(this);
    //     this.updateEmail=this.updateEmail.bind(this);
    //     this.updatePic=this.updatePic.bind(this);
    // }
    // updateUser(val){
    //     this.setState({
    //         username: val
    //     })
    // }

    // updatePass(val){
    //     this.setState({
    //         password: val
    //     })
    // }

    // updateFirst(val) {
    //     this.setState({
    //         first_name: val
    //     })
    // }

    // updateLast(val) {
    //     this.setState({
    //         last_name: val
    //     })
    // }

    // updateEmail(val) {
    //     this.setState({
    //         email: val
    //     })
    // }

    // updatePic(val) {
    //     this.setState({
    //         profilepic: val
    //     })
    // }
    // register(){
    //     axios.post('/login/register', {
    //         username:this.state.updateUser,
    //         password:this.state.updatePass,
    //         first_name:this.state.updateFirst,
    //         last_name:this.state.updateLast,
    //         email:this.state.updatedEmail,
    //         profilepic:this.state.updatePic
    //     })
    //         .then(results => {
    //             const {user_id, username, profilepic} = results.data[0];
    //             this.props.userVer(user_id, username, profilepic);
    //             this.setState({
    //                 email: '',
    //                 password: ''
    //             })
    //             this.props.history.push('/home')
    //         })
            
    // }
    
    render(){
        return(
            <div className="register">
                <h1 className='welcome'>Welcome to Fetch-a-Friend</h1>
                <h2 className='askinfo'>Please fill out the registration form to create an account.</h2>
                <div className='userinfo'>
                    <div className='firstName'>
                        <p>First Name</p>
                        <input type='text' /*value={this.state.first_name} onChange={e => this.updateFirst(e.target.value)}*//>
                    </div>
                    <div className='lastName'>
                        <p>Last Name</p>
                        <input type='text' /*value={this.state.last_name} onChange={e => this.updateLast(e.target.value)}*//>
                    </div>
                    <div className='profilepic'>
                        <p>Profile Picture</p>
                        <input type='text' /*value={this.state.profilepic} onChange={e => this.updatePic(e.target.value)}*//>
                    </div>
                    <div className='email'>
                        <p>Email Address</p>
                        <input type='text' /*value={this.state.email} onChange={e => this.updateEmail(e.target.value)}*//>
                    </div>
                    <div className='username'>
                        <p>Username</p>
                        <input type='text' /*value={this.state.username} onChange={e => this.updateUser(e.target.value)}*//>
                    </div>
                    <div className='password'>
                        <p>Password</p>
                        <input type='text'/*value={this.state.password} onChange={e => this.updatePass(e.target.value)}*//>
                    </div>
                </div>
            </div>
        )
    }
}


// export default connect(null, actions)(Register);
export default Register