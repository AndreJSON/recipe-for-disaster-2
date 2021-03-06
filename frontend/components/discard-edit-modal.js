import React from 'react';
import history from '../history';
import { connect } from 'react-redux';
import { discardDraft, showDiscardDialog } from "../actions";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';

const DiscardEditModal = (props) => {
	const { discardDialogOpen } = props;
	const onDiscard = () => {
		props.discardDraft();
		if (props.draftRecipe.createdAt === undefined)
			history.push('/');
	}
	return (
		<Dialog open={discardDialogOpen}>
			<DialogContent>
				<DialogContentText>
					Discard changes made to this recipe?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button color="primary" variant="raised" aria-label="Keep editing"
					className="flex" onClick={() => props.showDiscardDialog(false)}>
					Keep editing
				</Button>
				<Button color="secondary" variant="raised" aria-label="Discard changes"
					className="flex" onClick={onDiscard}>
					Discard
				</Button>
			</DialogActions>
		</Dialog>
	);
}

const mapStateToProps = (state) => {
	return {
		discardDialogOpen: state.discardDialogOpen,
		draftRecipe: state.draftRecipe
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		discardDraft: () => dispatch(discardDraft()),
		showDiscardDialog: (bool) => dispatch(showDiscardDialog(bool))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(DiscardEditModal);