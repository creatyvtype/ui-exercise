import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class VenueListItem extends Component {

	render() {
		const {venue} = this.props
		return(
			<div className="venue-list-item">
				<Link to={"/venue/" + venue.name}>{venue.name}</Link>
			</div>
		)
	}
}

VenueListItem.propTypes = {
	venue: PropTypes.object.isRequired
}

export default VenueListItem