import React,{Component} from 'react';
// import { Link } from 'react-router-dom';

export default class DoggPark extends Component {
    constructor(props) {
        super(props);
 
        //setting state
        this.state = {
            park_name: props.park_name,
            park_address: props.park_address,
            city: props.city,
            park_state: props.park_state,
            zipcode: props.zipcode,
            descriptions: props.descriptions,
            //creates a condition render
            inputSwitch: false
        }
      }
      //renders depending on inputSwtich is truthy or falsy
      handleSwitch = () => {
        this.setState({inputSwitch: !this.state.inputSwitch})
    }
    handleChange = e => {
        this.setState({
            [e.target.className]: e.target.value
        })
    }
    handleConfrim = () => {
        //passing down updateChar and id
        const {updatePrk, id} = this.props;
        const {park_name, park_address, city, park_state, zipcode, descriptions} = this.state;

        //invoke updatePrk
        updatePrk(id, park_name, park_address, city, park_state, zipcode, descriptions);
        //switching inputSwitch to the oppsite of original value
        this.setState({inputSwitch: !this.state.inputSwitch});
    }
    render(){
        const {deletePrk, id} = this.props;
        const {inputSwitch, park_name, park_address, city, park_state, zipcode, descriptions} = this.state;

        return (
            <div >
                {!inputSwitch ? (
                    <div>
                        <h4>{this.props.park_name}</h4>
                        <p>{this.props.park_address}</p>
                        <p>{this.props.city}</p>
                        <p>{this.props.park_state}</p>
                        <p>{this.props.zipcode}</p>
                        <p>{this.props.descriptions}</p>

                        {/*using onClick invoke handleSwitch*/}
                        <button className="cardButton" onClick={this.handleSwitch}>Edit</button>

                        {/*invoking deleteChar passing in id param*/}
                        <button className="cardButton" onClick={() => deletePrk(id)}>Delete</button>
                    </div>
                ) : (
                    <div>
                        {/*else inputSwitch is true present this*/}

                        <input className="park_name" value={park_name}onChange={this.handleChange}/>
                        <input className="park_address" value={park_address}onChange={this.handleChange}/>
                        <input className="city" value={city}onChange={this.handleChange}/>
                        <input className="park_state" value={park_state} onChange={this.handleChange}/>
                        <input className="zipcode" value={zipcode}onChange={this.handleChange}/>
                        <input className="descriptions" value={descriptions}onChange={this.handleChange}/>

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