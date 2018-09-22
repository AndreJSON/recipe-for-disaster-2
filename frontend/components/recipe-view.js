import React, { Component } from 'react';
import { connect } from 'react-redux';

const RecipeView = (props) => {
	return (
		<div>
			<p>{props.recipe._id}</p>
		</div>
	);
}

const mapStateToProps = (state, ownProps) => {
	return {
		recipe: state.recipes.find((x) => x._id === ownProps.match.params.id)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(RecipeView);