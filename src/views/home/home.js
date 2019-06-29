import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import DoggPark from './parks/DoggPark';
  
class Home extends Component {
    state={
        profilepic:'',
        username:'',
        park_name:'',
        park_address:'',
        city:'',
        park_state:'',
        zipcode:'',
        descriptions:'',
        park:[]
    }

    handleChange = e => {
        this.setState({
            [e.target.className]: e.target.value
        })
    }

    parks = () => {
        const park = {
            park_name: this.state.park_name,
            park_address: this.state.park_address,
            city: this.state.city,
            park_state: this.state.park_state,
            zipcode: this.state.zipcode,
            descriptions: this.state.descriptions
        }
        axios.post('/api/parks', park)
        .then((backendRes) => {
            //checking successful registration 
            if(backendRes.data.success) {
                //dispatch obj to store
                this.props.dispatch({
                    type: 'park',
                    payload: backendRes.data.park
                })
                //push to home 
                // this.props.history.push('/home');
            }
        })
    }
    componentDidMount(){
        axios.get('/api/getter')
            .then(({data}) =>{
                this.setState({
                    park: data.park
                })
            })
    }
    updatePrk = (id, park_name, park_address, city, park_state, zipcode, descriptions) => {
        //.put('/api/parks/:id') endpoint and set the parks state to new data (ie res.data)
        axios.put(`/api/parks/${id}`, {park_name, park_address, city, park_state, zipcode, descriptions})
            .then(res => {this.setState({park: res.data})}).catch(console.log)
    }
    deletePrk = (id) => { 
        //.delete('/api/parks/:id') endpoint and set the characters state to new data (ie res.data)
        axios.delete(`/api/parksDelete/${id}`)
            .then(res => {this.setState({park: res.data})}).catch(error => console.log(error))
    }
    render(){
        let parkList = this.state.park.map((park) =>{
            return(<DoggPark
                // key={id}
                // id={id}
                park_name={park.park_name}
                park_address={park.park_address}
                city={park.city}
                park_state={park.park_state}
                zipcode={park.zipcode}
                descriptions={park.descriptions}
                />)
        })
        return(
            <div className="home">
                <div className='parkadd'>
                    <h1>Add a Park</h1>
                    <p>Park Name</p>
                    <input className='park_name' value={this.state.park_name} onChange={this.handleChange}/>
                    <p>Address</p>
                    <input className='park_address' value={this.state.park_address} onChange={this.handleChange}/>
                    <p>City</p>
                    <input className='city' value={this.state.city} onChange={this.handleChange}/>
                    <p>State</p>
                    <input className='park_state' value={this.state.park_state} onChange={this.handleChange}/>
                    <p>Zipcode</p>
                    <input className='zipcode' value={this.state.zipcode} onChange={this.handleChange}/>
                    <p>Description</p>
                    <input className='descriptions' value={this.state.descriptions} onChange={this.handleChange}/>
                    <div className='buttonbox'>
                        <button className='submit' onClick={this.parks}>Add</button>
                    </div>
                </div>
                <div className='parklist'>
                    {parkList}
                </div>
            </div>
        )
    }
}

export default connect(state => state)(Home)