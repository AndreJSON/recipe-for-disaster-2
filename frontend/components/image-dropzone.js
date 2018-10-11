import React from 'react';
import Dropzone from 'react-dropzone';
import UploadIcon from '@material-ui/icons/CloudUpload';
import axios from 'axios';

const onDrop = (acceptedFiles, rejectedFiles) => {
	if(rejectedFiles.length > 0)
		console.log(rejectedFiles);
	acceptedFiles.forEach(file => {
		const formData = new FormData();
		formData.append('filename', "123" + file.name.slice(file.name.indexOf(".")));
		formData.append('image',file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
		axios.post('api/images',formData,config)
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
	});
};

const ImageDropzone = (props) => {
	return (
		<Dropzone onDrop={onDrop} accept="image/png, image/jpeg">
			<UploadIcon/>
		</Dropzone>
	);
};

export default ImageDropzone;