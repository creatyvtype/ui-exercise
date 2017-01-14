import React, { Component } from 'react';

class App extends Component {

	render() {
		return (
			<div className="App">
				<h1 className="text-center">Welcome to Venues-Я-Us</h1>
				{this.props.children}
			</div>
		);
	}
}

export default App;
