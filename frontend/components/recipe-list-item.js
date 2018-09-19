import React, { Component } from 'react';

const RecipeListItem = (props) => {
	return (
		<div>
			<p>{props.recipe.text}</p>
		</div>
	);
}

export default RecipeListItem;