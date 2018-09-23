import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Input } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import BackIcon from '@material-ui/icons/NavigateBefore'
import ListIcon from '@material-ui/icons/FormatListBulleted';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

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
	searchDiv: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.13),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		marginRight: "15px",
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing.unit,
			width: 'auto',
		}
	},
	searchIconDiv: {
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
	const { classes } = props;
	return (
		<div>
			<AppBar position="static" color="primary">
				<Toolbar disableGutters={true}>
					<IconButton className={classes.largeButton} color="inherit" aria-label="Back"
						onClick={() => {props.history.goBack();}} disabled={!props.location.pathname.startsWith("/recipe")}>
						<BackIcon className={classes.largerIcon} />
					</IconButton>
					<IconButton className={classes.largeButton} color="inherit" aria-label="List recipes"
						component={NavLink} to="/">
						<ListIcon className={classes.largeIcon} />
					</IconButton>
					<IconButton className={classes.largeButton} color="inherit" aria-label="Add recipe"
						component={NavLink} to="/edit">
						<AddIcon className={classes.largeIcon} />
					</IconButton>
					<div className="flex"/>
					<div className={classes.searchDiv}>
						<div className={classes.searchIconDiv}>
							<SearchIcon color="inherit" aria-label="Filter recipes" />
						</div>
						<Input classes={{ root: classes.inputRoot, input: classes.inputInput }} placeholder="Filter…" disableUnderline />
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default withRouter(withStyles(styles)(Navbar));