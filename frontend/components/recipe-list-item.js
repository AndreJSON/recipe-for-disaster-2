import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ListItem, ListItemText } from '@material-ui/core';

const RecipeListItem = (props) => {
	const tags = props.recipe.tags.map((item,index,arr) => {
		return item.toUpperCase() + (index === arr.length - 1? "": ", ");
	});

	return (
		<ListItem button={true} onClick={() => {props.history.push("/recipe/" + props.recipe._id)}}>
			<ListItemText primary={props.recipe.text} secondary={tags}/>
		</ListItem>
	);
}

export default withRouter(RecipeListItem);