import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';
import { Grid, List} from '@material-ui/core';
import RecipeListItem from './recipe-list-item';
import Spinner from './spinner';

const stringInStrings = (str, arr) => {
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase().includes(
			str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase()))
			return true;
	}
	return false;
} 

class RecipeList extends Component {
	componentDidMount() {
		this.props.fetchRecipes();
	}
	
	render() {
		var content;
		if(this.props.fetching) {
			content = (
				<Spinner/>
			);
		} else {
			const filteredRecipes = this.props.recipes.filter(recipe => {
				return stringInStrings(this.props.filter,[recipe.title,...recipe.tags])
			});
			const recipeList = filteredRecipes.map(recipe => {
				return (
					<RecipeListItem recipe={recipe} key={recipe._id}/>
				)
			});
			content = (
				<Grid item xs={12} md={10} lg={8}>
					<List>
						{recipeList}
					</List>
				</Grid>
			);
		}
		return (
			<Grid container>
				<Grid item xs/>
				{content}
				<Grid item xs/>
			</Grid>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		fetching: state.fetching,
		recipes: state.recipes,
		filter: state.filter
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchRecipes: () => {dispatch(fetchRecipes())}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(RecipeList);