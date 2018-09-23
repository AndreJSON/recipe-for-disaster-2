import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';
import { Grid } from '@material-ui/core';
import Spinner from './spinner';

class RecipeView extends Component {
	componentDidMount() {
		this.props.fetchRecipes();
	}

	render() {
		var content;
		if(this.props.isFetching || this.props.recipe === undefined) {
			content = (
				<Spinner/>
			);
		} else {
			content = (
				<Grid item xs={12} md={10} lg={8}>
					<p>{this.props.recipe._id}</p>
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
		isFetching: state.isFetching,
		recipe: state.recipes.find((x) => x._id === ownProps.match.params.id)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchRecipes: () => {dispatch(fetchRecipes())}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(RecipeView);