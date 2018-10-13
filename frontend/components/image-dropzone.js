import React from 'react';
import Dropzone from 'react-dropzone';
import UploadIcon from '@material-ui/icons/CloudUpload';
import { connect } from 'react-redux';
import { uploadImage } from '../actions';

const onDrop = (acceptedFiles, rejectedFiles, _id, uploadImage) => {
	if(rejectedFiles.length > 0)
		console.log(rejectedFiles);
	acceptedFiles.forEach(file => {
		uploadImage(file,_id);
	});
};

const ImageDropzone = (props) => {
	return (
		<Dropzone accept="image/png, image/jpeg"
			onDrop={(acceptedFiles,rejectedFiles) => onDrop(acceptedFiles,rejectedFiles,props.draftRecipe._id,props.uploadImage)}>
			<UploadIcon/>
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
		uploadImage: (file,_id) => dispatch(uploadImage(file,_id))
	};
}

export default connect(mapStateToProps,mapDispatchToProps)(ImageDropzone);