import React, { Component } from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import App from './App'
import VenueList from './venue_list'
import Venue from './venue'

export default class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                	<IndexRedirect to="venues" />
                    <Route path="venues" component={VenueList} />
                	<Route path="venue/:venueName" component={Venue} />
                </Route>
            </Router>
        )
    }
}