import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import axios from 'axios';
import ListItem from './ListItem';

class List extends Component {
	componentDidMount() {
		axios.get('/api/recipes')
		.then((res) => {
			this.props.setRecipes(res.data.recipes);
		})
		.catch((err) => {
			console.log(err);
		})
	}
	render() {
		const recipeList = this.props.recipes.map(recipe => {
			return (
				<ListItem recipe={recipe} key={recipe._id}/>
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
	const qs = queryString.parse(ownProps.location.search);
	return {
		search: qs.search,
		recipes: state.recipes
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setRecipes: (recipes) => {dispatch({type: 'SET_RECIPES', recipes: recipes})}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(List);