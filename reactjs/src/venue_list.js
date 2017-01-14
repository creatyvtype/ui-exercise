import React, { Component } from 'react'
import Api from './services/api';
import VenueListItem from './venue_list_item'
import _ from 'lodash'


class VenueList extends Component {
	constructor(props) {
    	super(props);
    	this.state = { 
    		venues: [],
    		filters: [],
    		filteredVenues: []
    	};
  	}

	componentWillMount() {
		this.getVenues()
	}

	getVenues() {
		const api = new Api();
		api.getVenues()
			.then(venues => {
				const filters = venues.map(venue => {
					return (venue.type.charAt(0).toUpperCase() + venue.type.slice(1))
				})
				this.setState({
					venues: venues,
					filters: filters,
					filteredVenues: venues
				})
			});
	}

	showAll() {
		this.setState({
			filteredVenues: this.state.venues
		})
	}

	filterByType(type) {
		const filteredVenues = _.filter(this.state.venues, 
			(venue) => venue.type === type.toLowerCase()
		)
		this.setState({
			filteredVenues: filteredVenues
		})
	}

	render() {
		const { filteredVenues, filters } = this.state
		return (
			<div className="venues">
				<div className="filters">
					Quick Filters:
					<div className="filter-link" onClick={this.showAll.bind(this)}>All</div>
					{ filters.map((filter, index) => {
						return (
							<div className="filter-link" key={index} onClick={this.filterByType.bind(this, filter)}>
								{filter}
							</div>
						)}
					)}
				</div>
				<div className="venue-list">
					{ filteredVenues.map((venue, index) => {
						return (
							<VenueListItem key={index} venue={venue} />
						)}
					)}
				</div>
			</div>
		);
	}
}

export default VenueList;