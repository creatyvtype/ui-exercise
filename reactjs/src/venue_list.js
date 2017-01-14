import React, { Component } from 'react'
import Api from './services/api';
import VenueListItem from './venue_list_item'

class VenueList extends Component {
	constructor(props) {
    	super(props);
    	this.state = { 
    		venues: []
    	};
  	}

	componentWillMount() {
		this.getVenues()
	}

	getVenues() {
		const api = new Api();
		api.getVenues()
			.then(venues => {
				this.setState({
					venues: venues
				})
			});
	}

	render() {
		return (
			<div className="list">
				{ this.state.venues.map((venue, index) => {
					return (
						<VenueListItem key={index} venue={venue} />
					)}
				)}
			</div>
		);
	}
}

export default VenueList;