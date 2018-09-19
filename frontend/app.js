import './app.css';
import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Theme from './theme.js';
import Navbar from './components/navbar';
import RecipeList from './components/recipe-list';
import RecipeView from './components/recipe-view';
import RecipeEditor from './components/recipe-editor';

const App = () => {
	return (
		<React.Fragment>
			<MuiThemeProvider theme={Theme}>
				<CssBaseline/>
				<BrowserRouter>
					<div>
						<Navbar/>
						<Route exact path='/' component={RecipeList}/>
						<Route path='/recipe' component={RecipeView}/>
						<Route path='/edit' component={RecipeEditor}/>
					</div>
				</BrowserRouter>
			</MuiThemeProvider>
		</React.Fragment>
	);
};

export default App;