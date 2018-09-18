import React, { Component } from 'react';

const ListItem = (props) => {
	return (
		<div>
			<p>{props.recipe.text}</p>
		</div>
	);
}

export default ListItem;