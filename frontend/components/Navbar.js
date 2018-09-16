import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Input } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

export default class Navbar extends Component {
	render() {
		return (
			<div>
				<AppBar position="static" color="primary">
					<Toolbar>
						<Typography variant="title" color="inherit" noWrap>
							Recipe For Disaster
          				</Typography>
						<IconButton color="inherit" aria-label="List recipes">
							<ListIcon/>
						</IconButton>
						<IconButton color="inherit" aria-label="Add recipe">
							<AddIcon/>
						</IconButton>
						<div className="flex"/>
						<div>
							<div>
								<SearchIcon color="inherit" aria-label="Search recipes"/>
							</div>
							<Input
								placeholder="Search…"
								disableUnderline
							/>
						</div>
					</Toolbar>
				</AppBar>
				<li><NavLink to="/edit">Edit</NavLink></li>
			</div>
		);
	}
}