import React, { Component } from 'react';


class ZipCode extends Component {

	render () {

		return (

			<div className = "item">

				{ this.props.zipCode }

			</div>

		)


	}

}

export default ZipCode;