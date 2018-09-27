import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';
import { Grid } from '@material-ui/core';
import Spinner from './spinner';
import RecipeCard from './recipe-card';

class RecipeView extends Component {
	componentDidMount() {
		this.props.fetchRecipes();
	}

	render() {
		var content;
		if(this.props.fetching || this.props.recipe === undefined) {
			content = (
				<Spinner/>
			);
		} else {
			content = (
				<Grid item xs={12} md={10} lg={8}>
					<RecipeCard recipe={this.props.recipe}/>
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

const mapStateToProps = (state, ownProps) => {
	return {
		fetching: state.fetching,
		recipe: state.recipes.find((x) => x._id === ownProps.match.params.id)
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchRecipes: () => {dispatch(fetchRecipes())}
	};
}

export default connect(mapStateToProps,mapDispatchToProps)(RecipeView);