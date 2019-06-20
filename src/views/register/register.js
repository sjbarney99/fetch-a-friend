import React, {Component} from 'react';

class Register extends Component {
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
    render(){
        return(
            <div className="register">
                Register
            </div>
        )
    }
}

export default Register