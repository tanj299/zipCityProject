import React, { Component } from 'react';
import axios from 'axios';

import ZipCode from './ZipCode.js';


class SearchForm extends Component {

	constructor (props) {

		super(props);

		this.state = {

			data: [],

			searchTerm: "",

			errorMessage: {
				display: false,
				msg: ""
			}

		}

		this.handleNameField = this.handleNameField.bind(this);
		this.fetchCityData = this.fetchCityData.bind(this);
	}

	handleNameField (e) {

		this.setState({
			searchTerm: e.target.value
		});

	}

	fetchCityData () {

		if (this.state.searchTerm.length < 1) {

			this.setState({

				errorMessage: { display: true, msg: "Please enter a search term into the appropriate field..." }

			});

			return;

		}

		let cityName = this.state.searchTerm.toUpperCase();

		axios.get( "http://ctp-zip-api.herokuapp.com/city/" + cityName )
			.then((response) => {

				this.setState({

					data: response.data,

					errorMessage: { display: false, msg: "" }

				});

			})
			.catch( (err) => {

				this.setState({

					errorMessage: { display: true, msg: "No Rows Returned" }

				});

			});

	}

	render () {

		let zipCodes = this.state.data.map( (d, i) => {

			return ( <ZipCode key = { i } zipCode = { d } /> )

		});

		let err = (<div className = "error">{ this.state.errorMessage.msg }</div>);

		return (

			<div class = "site-inner-content">

				<input type="text" onChange = { this.handleNameField } value = { this.state.searchTerm } className = "search-input" />

				<button onClick = { this.fetchCityData }>Search</button>

					<br />

					<br />
			
				{ (this.state.data.length > 0 && !this.state.errorMessage.display) ? zipCodes : err }
			</div>

		);

	}



}

export default SearchForm;