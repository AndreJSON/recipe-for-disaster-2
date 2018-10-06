import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDraftTag } from '../actions';
import { Input } from '@material-ui/core';

class TagInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ""
		}
	}
	onChange(e) {
		var text = e.target.value;
		if(text.length === 0)
			return;
		if(" ,".includes(text.slice(-1)) && text.length > 1) {
			this.props.addDraftTag(text.slice(0,-1));
			this.setState({text: ""});
		} else {
			this.setState({text: text});
		}
	}
	onSubmit(e) {
		e.preventDefault();
		if (this.state.text.length === 0)
			return;
		this.props.addDraftTag(this.state.text);
		this.setState({text:""});
	}
	render() {
		return (
			<form onSubmit={(e) => this.onSubmit(e)}>
				<Input value={this.state.text} onChange={(e) => this.onChange(e)} spellCheck={false}/>
			</form>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addDraftTag: (tag) => {dispatch(addDraftTag(tag))}
	};
}

export default connect(null,mapDispatchToProps)(TagInput);