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

const App = () => {
	return (
		<React.Fragment>
			<MuiThemeProvider theme={Theme}>
				<CssBaseline/>
				<BrowserRouter>
					<div>
						<Navbar/>
						<Route exact path='/' component={List}/>
						<Route path='/recipe' component={Recipe}/>
						<Route path='/edit' component={Edit}/>
					</div>
				</BrowserRouter>
			</MuiThemeProvider>
		</React.Fragment>
	);
};

export default App;