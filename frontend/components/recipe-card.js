import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { toggleEditMode } from '../actions';
import { Card, CardHeader, CardContent, Chip, Input, IconButton, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';

const styles = (theme) => ({
	renderNewlines: {
		whiteSpace: "pre"
	}
});

const RecipeCard = (props) => {
	const recipe = props.recipe;
	const actions = props.editing?
	(
		<div>
			<IconButton>
				<DoneIcon/>
			</IconButton>
			<IconButton>
				<CloseIcon/>
			</IconButton>
		</div>
	) :
	(
		<IconButton onClick={() => {props.toggleEditMode(true)}}>
			<EditIcon/>
		</IconButton>
	);
	const chips = recipe.tags.map((tag, index) => {
		return (
			<Chip label={tag} key={index} onDelete={props.editing? () => {console.log(tag)} : undefined}/>
		);
	});
	const chipsInput = (
		props.editing ? <Input/> : undefined
	);
	
	return (
		<Card>
			<CardHeader
				action={
					actions
				}
				title={<Typography variant="title">{recipe.title}</Typography>}
			/>
			<CardContent>
				<Typography variant="body1" className={props.classes.renderNewlines}>
					{recipe.text}
				</Typography>
				{chips}
				{chipsInput}
			</CardContent>
		</Card>
	);
}

const mapStateToProps = (state) => {
	return {
		editing: state.editing
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleEditMode: (value) => {dispatch(toggleEditMode(value))}
	};
}

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(RecipeCard));