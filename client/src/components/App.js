import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import history from '../history';
import { fetchUser } from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends React.Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<Router history={history}>
					<div>
						<Header />
						<div className="container">
							<Route path="/" exact component={Landing} />
							<Route path="/surveys" exact component={Dashboard} />
							<Route path="/surveys/new" component={SurveyNew} />
						</div>
					</div>
				</Router>
			</div>
		);
	}
}

export default connect(
	null,
	{ fetchUser }
)(App);
