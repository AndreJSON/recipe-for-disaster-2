import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Input, Fade } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import ListIcon from '@material-ui/icons/FormatListBulleted';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

const styles = (theme) => ({
	largeIcon: {
		fontSize: "40px"
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
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing.unit,
			width: 'auto',
		},
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
				<Toolbar>
					<IconButton className={classes.largeButton} color="inherit" aria-label="List recipes">
						<ListIcon className={classes.largeIcon} />
					</IconButton>
					<IconButton className={classes.largeButton} color="inherit" aria-label="Add recipe">
						<AddIcon className={classes.largeIcon} />
					</IconButton>
					<div className="flex" />
					<div className={classes.searchDiv}>
						<div className={classes.searchIconDiv}>
							<SearchIcon color="inherit" aria-label="Search recipes" />
						</div>
						<Input classes={{ root: classes.inputRoot, input: classes.inputInput }} placeholder="Search…" disableUnderline />
					</div>
				</Toolbar>
			</AppBar>
			<li><NavLink to="/edit">Edit</NavLink></li>
		</div>
	);
}

export default withStyles(styles)(Navbar);