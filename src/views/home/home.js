import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import DoggPark from "./parks/DoggPark";
import "./home.css";

class Home extends Component {
	state = {
		profilepic: "",
		username: "",
		park_name: "",
		park_address: "",
		city: "",
		park_state: "",
		zipcode: "",
		descriptions: "",
		park: []
	};

	handleChange = e => {
		this.setState({
			[e.target.className]: e.target.value
		});
	};

	addpark = () => {
		const {
			park_name,
			park_address,
			city,
			park_state,
			zipcode,
			descriptions
		} = this.state;
		const park = {
			park_name,
			park_address,
			city,
			park_state,
			zipcode,
			descriptions
		};
		axios.post("/api/parks", park).then(backendRes => {
			//checking successful registration
			if (backendRes.data.success) {
				//dispatch obj to store
				this.props.dispatch({
					type: "park",
					payload: backendRes.data.parksObj
				});
				//push to home
				// this.props.history.push('/home');
			}
		});
	};
	componentDidMount() {
		console.log("Home did mount");
		axios.get("/api/getter").then(res => {
			if (res.data.success) {
				//dispatch obj to store
				this.props.dispatch({
					type: "park",
					payload: res.data.parksObj
				});
				//push to home
				// this.props.history.push('/home');
			}
		});
	}
	componentDidUpdate() {
		console.log("Did update");
	}
	// updatePrk = id => {
	// 	debugger;
	// 	const {
	// 		park_name,
	// 		park_address,
	// 		city,
	// 		park_state,
	// 		zipcode,
	// 		descriptions
	// 	} = this.state;
	// 	const park = {
	// 		park_name,
	// 		park_address,
	// 		city,
	// 		park_state,
	// 		zipcode,
	// 		descriptions
	// 	};
	// 	//.put('/api/parks/:id') endpoint and set the parks state to new data (ie res.data)
	// 	axios
	// 		.put(`/api/updatePrk/${id}`, park)
	// 		.then(res => {
	// 			this.props.dispatch({
	// 				type: "park",
	// 				payload: res.data.parksObj
	// 			});
	// 		})
	// 		.catch(console.log);
	// };
	deletePrk = id => {
		//.delete('/api/parks/:id') endpoint and set the characters state to new data (ie res.data)
		axios
			.delete(`/api/deletePrk/${id}`)
			.then(res => {
				if (res.data.success) {
					this.props.dispatch({
						type: "park",
						payload: res.data.parksObj
					});
				}
			})
			.catch(error => console.log(error));
	};
	render() {
		console.log(this.props.park);
		let parkList;
		if (this.props.park) {
			parkList = this.props.park.map(park => {
				return (
					<DoggPark
						key={park.id}
						id={park.id}
						park_name={park.park_name}
						park_address={park.park_address}
						city={park.city}
						park_state={park.park_state}
						zipcode={park.zipcode}
						descriptions={park.descriptions}
						deletePrk={this.deletePrk}
					/>
				);
			});
		}
		return (
			<div className='home'>
				<div className='parkadd'>
					<h1 className='intro'>Add a Park</h1>
					<div className='prkname'>
						<p>Park Name</p>
						<input
							className='park_name'
							value={this.state.park_name}
							onChange={this.handleChange}
						/>
					</div>
					<div className='prkaddress'>
						<p>Address</p>
						<input
							className='park_address'
							value={this.state.park_address}
							onChange={this.handleChange}
						/>
					</div>
					<div className='prkcity'>
						<p>City</p>
						<input
							className='city'
							value={this.state.city}
							onChange={this.handleChange}
						/>
					</div>
					<div className='prkst'>
						<p>State</p>
						<input
							className='park_state'
							value={this.state.park_state}
							onChange={this.handleChange}
						/>
					</div>
					<div className='prkzip'>
						<p>Zipcode</p>
						<input
							className='zipcode'
							value={this.state.zipcode}
							onChange={this.handleChange}
						/>
					</div>
					<div className='prkdesc'>
						<p>Description</p>
						<input
							className='descriptions'
							value={this.state.descriptions}
							onChange={this.handleChange}
						/>
					</div>
					<div className='buttonbox'>
						<button className='submit' onClick={this.addpark}>
							<i className='fas fa-paw' />
							Add
						</button>
					</div>
				</div>
				<div className='parklist'>{parkList}</div>
			</div>
		);
	}
}

export default connect(state => state)(Home);
