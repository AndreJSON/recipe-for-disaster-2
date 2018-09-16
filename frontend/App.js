import './app.css';
import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Theme from './theme.js';
import Navbar from './components/Navbar';
import List from './components/List';
import Recipe from './components/Recipe';
import Edit from './components/Edit';

export default class App extends Component {
	render() {
		return (
			<MuiThemeProvider theme={Theme}>
			<React.Fragment>
				<CssBaseline/>
				<BrowserRouter>
					<div>
						<Navbar/>
						<Route exact path='/' component={List}/>
						<Route path='/recipe' component={Recipe}/>
						<Route path='/edit' component={Edit}/>
					</div>
				</BrowserRouter>
			</React.Fragment>
			</MuiThemeProvider>
		);
	}
}