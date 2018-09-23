import React, { Component } from 'react';
import { CircularProgress } from '@material-ui/core';

const Spinner = () => {
	return (
		<CircularProgress color="secondary" thickness={5}/>
	)
}

export default Spinner;