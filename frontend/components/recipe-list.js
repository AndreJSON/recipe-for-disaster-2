import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';
import { Grid, List} from '@material-ui/core';
import RecipeListItem from './recipe-list-item';
import Spinner from './spinner';

class RecipeList extends Component {
	componentDidMount() {
		this.props.fetchRecipes();
	}
	
	render() {
		var content;
		if(this.props.isFetching) {
			content = (
				<Spinner/>
			);
		} else {
			const recipeList = this.props.recipes.map(recipe => {
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
		isFetching: state.isFetching,
		recipes: state.recipes
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchRecipes: () => {dispatch(fetchRecipes())}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(RecipeList);