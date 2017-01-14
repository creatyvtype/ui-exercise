import React, { Component } from 'react'
import { Link } from 'react-router'
import Api from './services/api'

class Venue extends Component {
	constructor(props) {
		super(props);
		this.state = {
			venue: null
		}
	}

	componentWillMount() {
		this.getVenues()
	}

	getVenues() {
		const api = new Api();
		api.getVenues()
			.then(venues => {
				this.setVenue(venues)
			});
	}

	setVenue(venues) {
		venues.forEach(venue => {
			if (this.props.params.venueName === venue.name) {
				this.setState({
					venue: venue
				})
				return
			}
		})
	}

	render() {
		const { venue } = this.state

		if (!venue) {
			return (
				<div>
					No venue selected. Please return to the home page to select a venue.<br />
					<Link to="/venues">Back to Venues</Link>
				</div>
			)
		}
		return (
			<div className="venue">
				<Link to="/venues">Back to Venues</Link>
				<div>
					{venue.name}<br/>
					{venue.capacity}<br/>
					{venue.type}
				</div>
			</div>
		)
	}
}

export default Venue