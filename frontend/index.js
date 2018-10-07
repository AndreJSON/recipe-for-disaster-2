import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/root-reducer';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import './app.css';
import theme from './theme.js';
import Navbar from './components/navbar';
import RecipeList from './components/recipe-list';
import RecipeView from './components/recipe-view';
import history from './history';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<CssBaseline/>
			<Router history={history}>
				<div>
					<Navbar/>
					<div className="padded">
						<Route exact path='/' component={RecipeList}/>
						<Route path='/recipe/:id' component={RecipeView}/>
					</div>
				</div>
			</Router>
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);