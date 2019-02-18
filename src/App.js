import React, { Component } from 'react';
import '../src/css/App.scss';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Routes from '../src/components/routes/Routes';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<main className="main">
					<Routes />
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;
