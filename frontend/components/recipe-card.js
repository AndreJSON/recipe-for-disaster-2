import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
	editRecipe, setDraftTitle, setDraftText, deleteDraftTag,
	showDiscardDialog, saveDraft
} from '../actions';
import { Card, CardHeader, CardContent, Chip, Input, IconButton, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import TagInput from './tag-input';
import ImageDropzone from './image-dropzone';

const styles = (theme) => ({
	renderNewlines: {
		whiteSpace: "pre"
	},
	topPadded: {
		paddingTop: "16px"
	},
	rightPadded: {
		paddingRight: "8px"
	},
	chipDiv: {
		display: "flex"
	}
});

const RecipeCard = (props) => {
	const { editing, recipe, draftRecipe } = props;
	const actions = editing?
	(
		<div>
			<IconButton color="primary" onClick={() => props.saveDraft(draftRecipe)}>
				<DoneIcon/>
			</IconButton>
			<IconButton color="secondary" onClick={() => props.showDiscardDialog(true)}>
				<CloseIcon/>
			</IconButton>
		</div>
	) :
	(
		<IconButton onClick={() => {props.editRecipe(recipe._id)}}>
			<EditIcon/>
		</IconButton>
	);
	const title = editing?
	(
		<Input value={draftRecipe.title} onChange={(e) => props.setDraftTitle(e.target.value)}
			fullWidth={true} spellCheck={false} placeholder="Title"/>
	) :
	(
		<Typography variant="title">{recipe.title}</Typography>
	);
	const text = editing?
	(
		<Input value={draftRecipe.text} onChange={(e) => props.setDraftText(e.target.value)}
			multiline={true} fullWidth={true} spellCheck={false} placeholder="Text"/>
	) :
	(
		<Typography variant="body1" className={props.classes.renderNewlines}>
			{recipe.text}
		</Typography>
	)
	const tags = editing?
	(
		<div className={props.classes.chipDiv}>
			<div className={draftRecipe.tags.length > 0? props.classes.rightPadded:""}>
				{draftRecipe.tags.map((tag, index) => {
					return (
						<Chip color="secondary" label={tag} key={index} onDelete={() => props.deleteDraftTag(tag)}/>
					);
				})}
			</div>
			<TagInput/>
		</div>
	) :
	(
		recipe.tags.map((tag, index) => {
			return (
				<Chip label={tag} key={index}/>
			);
		})
	);
	
	return (
		<Card>
			<CardHeader
				action={
					actions
				}
				title={title}
			/>
			<CardContent>
				<ImageDropzone/>
				{text}
				<div className={props.classes.topPadded}>
					{tags}
				</div>				
			</CardContent>
		</Card>
	);
}

const mapStateToProps = (state) => {
	return {
		editing: state.editing,
		draftRecipe: state.draftRecipe
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		editRecipe: (id) => {dispatch(editRecipe(id))},
		setDraftTitle: (title) => {dispatch(setDraftTitle(title))},
		setDraftText: (text) => {dispatch(setDraftText(text))},
		deleteDraftTag: (tag) => {dispatch(deleteDraftTag(tag))},
		showDiscardDialog: (bool) => dispatch(showDiscardDialog(bool)),
		saveDraft: (recipe) => dispatch(saveDraft(recipe))
	};
}

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(RecipeCard));