import './app.css';
import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Theme from './theme.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import RecipeList from './components/recipe-list';
import RecipeView from './components/recipe-view';

const App = () => {
	return (
		<React.Fragment>
			<MuiThemeProvider theme={Theme}>
				<CssBaseline/>
				<BrowserRouter>
					<div>
						<Navbar/>
						<div className="padded">
							<Route exact path='/' component={RecipeList}/>
							<Route path='/recipe/:id' component={RecipeView}/>
						</div>
					</div>
				</BrowserRouter>
			</MuiThemeProvider>
		</React.Fragment>
	);
};

export default App;