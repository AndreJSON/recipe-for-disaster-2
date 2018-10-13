import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { uploadImage } from '../actions';
import Dropzone from 'react-dropzone';
import UploadIcon from '@material-ui/icons/CloudUpload';

const styles = (theme) => ({
	dropzone: {
		width: "100%",
		backgroundColor: "rgba(0,0,0,0.07)",
		outline: "4px dashed",
		outlineColor: "rgba(0,0,0,0.35)",
		outlineOffset: "-4px",
		minHeight: "150px",
		height: "98%",
		cursor: "pointer"
	},
	uploadIconParent: {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center"
	},
	uploadIcon: {
		fontSize: "70px",
		color: "rgba(0,0,0,0.25)",
		width: "100%"
	}
});

const onDrop = (acceptedFiles, rejectedFiles, _id, uploadImage) => {
	if (rejectedFiles.length > 0)
		console.log(rejectedFiles);
	acceptedFiles.forEach(file => {
		uploadImage(file, _id);
	});
};

const ImageDropzone = (props) => {
	return (
		<Dropzone accept="image/png, image/jpeg" multiple={false} className={props.classes.dropzone}
			onDrop={(acceptedFiles, rejectedFiles) => onDrop(acceptedFiles, rejectedFiles, props.draftRecipe._id, props.uploadImage)}>
			<div className={props.classes.uploadIconParent}>
				<UploadIcon className={props.classes.uploadIcon} />
			</div>
		</Dropzone>
	);
};

const mapStateToProps = (state) => {
	return {
		draftRecipe: state.draftRecipe
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		uploadImage: (file, _id) => dispatch(uploadImage(file, _id))
	};
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ImageDropzone));