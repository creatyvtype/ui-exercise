import React, { Component } from 'react'
import { Link } from 'react-router'

class Venue extends Component {
	render() {
		return (
			<div className="venue">
				<Link to="/venues">Back to Venues</Link>
				Venue here!
			</div>
		)
	}
}

export default Venue