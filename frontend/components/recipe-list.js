import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { fetchRecipes } from '../actions';
import RecipeListItem from './recipe-list-item';

class RecipeList extends Component {
	componentDidMount() {
		this.props.fetchRecipes();
	}
	render() {
		const recipeList = this.props.recipes.map(recipe => {
			return (
				<RecipeListItem recipe={recipe} key={recipe._id}/>
			)
		});
		return (
			<div>
				{recipeList}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const qs = queryString.parse(ownProps.location.filter);
	return {
		filter: qs.filter,
		recipes: state.recipes
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchRecipes: () => {dispatch(fetchRecipes())}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(RecipeList);