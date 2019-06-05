import React, {Component} from 'react';
import './Searchbar.css';
import DisplayResults from './DisplayResults.js';
import axios from 'axios';

class Searchbar extends Component {
	constructor(props) {
		super(props); 
		this.state = {
			data: [],

			zipcode: "",
		}
	} 

	search = () => {
		this.fetchCityData();
	}

	handleChange = (e) => {
		this.setState ({
			zipcode: e.target.value 
		});
	}

	// axios fetching data
	fetchCityData () {
		// axios syntax - sends request to an API 
		axios.get("http://ctp-zip-api.herokuapp.com/zip/" + this.state.zipcode)
		.then(response => {
			this.setState({ 
				data: response.data
			});
			console.log(response.data);
		})

		.catch(err => console.log(err));
	}

	relevantData () {
		// ..returns an array of all the objects instantiated 
		return this.state.data.map ( (currentObject, index) => {
			// NtS: temp will only contain the information at the bottom 
			// and will filter out all data to return relevant information
			let temp = {};
			temp.city = currentObject.City;
			temp.state = currentObject.State;
			temp.lat = currentObject.Lat;
			temp.long = currentObject.Long;
			temp.population = currentObject.EstimatedPopulation;
			temp.wages = currentObject.TotalWages; 
			
			// return every instance once an object is created then [refer to top return]
			// @return: calls your component, `DisplayResults` which is a template for displaying results 
			return ( <DisplayResults key = {index} result={temp}/>

			);
		});

		// City, State:
		// Lat: 
		// Long: 
		// Population: 
		// Wages: 
	}

	render() {
		let results = this.relevantData();
		return (
			<div> 
				<div className="zipcode"> Zipcode: {this.state.zipcode} </div>
				<button className="search" onClick={this.search}> Search </button>
				<input className="zipcodeEntry" type="text" name="zipcode" value={this.state.zipcode} onChange={this.handleChange}/>
				{/* display results */}
				{results}
			</div>
		);
	}
}

export default Searchbar;