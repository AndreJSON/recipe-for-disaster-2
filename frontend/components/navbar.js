import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Input } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { setFilterText, createRecipe } from '../actions';
import BackIcon from '@material-ui/icons/NavigateBefore'
import ListIcon from '@material-ui/icons/FormatListBulleted';
import AddIcon from '@material-ui/icons/Add';
import FilterIcon from '@material-ui/icons/Search';

const styles = (theme) => ({
	largeIcon: {
		fontSize: "40px"
	},
	largerIcon: {
		fontSize: "50px"
	},
	largeButton: {
		height: "56px",
		width: "56px"
	},
	filterDiv: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.13),
		marginLeft: 0,
		marginRight: "15px",
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing.unit,
			width: 'auto',
		}
	},
	filterDivHoverChange: {
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		}
	},
	filterIconDiv: {
		width: theme.spacing.unit * 8,
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
		width: '100%',
	},
	inputInput: {
		paddingLeft: 60,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: 120,
			'&:focus': {
				width: 220,
			},
		},
	}
});

const Navbar = (props) => {
	const { classes, filter, editing } = props;
	const onRecipeListPage = props.location.pathname !== "/";
	var filterRef = React.createRef();
	return (
		<div>
			<AppBar position="static" color="primary">
				<Toolbar disableGutters={true}>
					<IconButton className={classes.largeButton} color="inherit" aria-label="Back"
						onClick={() => props.history.goBack()} disabled={!props.location.pathname.startsWith("/recipe") || editing}>
						<BackIcon className={classes.largerIcon} />
					</IconButton>
					<IconButton className={classes.largeButton} color="inherit" aria-label="List recipes"
						component={NavLink} to="/" onClick={() => props.setFilterText("")} disabled={editing}>
						<ListIcon className={classes.largeIcon} />
					</IconButton>
					<IconButton className={classes.largeButton} color="inherit" aria-label="Add recipe"
						onClick={props.createRecipe} disabled={editing}>
						<AddIcon className={classes.largeIcon} />
					</IconButton>
					<div className="flex"/>
					<div className={classes.filterDiv + (onRecipeListPage? "": " "+classes.filterDivHoverChange)}>
						<div className={classes.filterIconDiv}>
							<FilterIcon color={onRecipeListPage? "disabled":"inherit"} aria-label="Filter recipes"/>
						</div>
						<form onSubmit={(e) => {e.preventDefault(); filterRef.current.inputRef.blur();}}>
							<Input classes={{ root: classes.inputRoot, input: classes.inputInput }} innerRef={filterRef}
								onChange={(e) => props.setFilterText(e.target.value)} placeholder="Filter…"
								spellCheck={false} value={filter} disableUnderline disabled={onRecipeListPage}/>
						</form>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		filter: state.filter,
		editing: state.editing
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		setFilterText: (text) => {dispatch(setFilterText(text))},
		createRecipe: () => {dispatch(createRecipe())}
	}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Navbar)));