import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component {
    state={
        username:'',
        first_name: '',
        last_name: '',
        profilepic: [],
        inputSwitch: false
    }
    

    handleSwitch = () => {
        this.setState({inputSwitch: !this.state.inputSwitch})
    }

    handleChange = e => {
        this.setState({
            [e.target.className]: e.target.value
        })
    }
    handleConfrim = () => {
        const {updateUser} = this.props;
        const {username, first_name, last_name, profilepic} = this.state;
        updateUser(username,first_name,last_name,profilepic);
        //switching inputSwitch to the oppsite of original value
        this.setState({inputSwitch: !this.state.inputSwitch});
    }

    render(){
        const {deletePic} = this.props;
        const {inputSwitch, username, first_name, last_name, profilepic} = this.state;
        
        return(
            <div className="home">
                {!inputSwitch ? (
                       <div>
                           <img src={profilepic}></img>
                           <h4>{this.props.username}</h4>
                           <h4>{this.props.first_name}</h4>
                           <h4>{this.props.last_name}</h4>

                           <button className="editBut" onClick={this.handleSwitch}>Edit</button>

    
                           <button className="deleteBut" onClick={() => deletePic}>Delete</button>
                       </div>
                   ) :  (
                   <div>
                   <input className="username" type='text' value={this.state.username} onChange={this.handleChange}/>
                   <input className="first_name" type='text' value={this.state.first_name}/>

                   {/*onClick invoke handleSwitch*/}
                   <button className="cardsButton" onClick={this.handleSwitch}>Cancel</button>

                   {/*onClick invoke handleSwitch*/}
                   <button className="cardsButton" onClick={this.handleConfirm}>Confirm</button>
               </div>
           )}
            </div>
        )
    }
}

export default Home