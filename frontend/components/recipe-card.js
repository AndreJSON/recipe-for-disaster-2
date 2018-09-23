import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, IconButton, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const styles = (theme) => ({
	renderNewlines: {
		whiteSpace: "pre"
	}
});

const RecipeCard = (props) => {
	const recipe = props.recipe;
	return (
		<Card>
			<CardHeader
				action={
					<IconButton>
						<EditIcon/>
					</IconButton>
				}
				title={<Typography variant="title">{recipe.title}</Typography>}
			/>
			<CardContent>
				<Typography variant="body1" className={props.classes.renderNewlines}>
					{recipe.text}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default withStyles(styles)(RecipeCard);