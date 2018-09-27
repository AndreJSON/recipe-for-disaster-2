import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText } from '@material-ui/core';

const styles = (theme) => ({
	gutters: {
		paddingLeft: "8px",
		paddingRight: "8px"
	}
});

const RecipeListItem = (props) => {
	const tags = props.recipe.tags.map((item,index,arr) => {
		return item.toUpperCase() + (index === arr.length - 1? "": ", ");
	});

	return (
		<ListItem button={true} onClick={() => {props.history.push("/recipe/" + props.recipe._id)}}
			divider={true} classes={{gutters:props.classes.gutters}}>
			<ListItemText primary={props.recipe.title} secondary={tags}/>
		</ListItem>
	);
}

export default withRouter(withStyles(styles)(RecipeListItem));