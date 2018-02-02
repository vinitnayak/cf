import React, { Component, PropTypes } from 'react'
import { Field, SubmissionError} from 'redux-form'
import redux from 'redux'
//import Dropzone from 'react-dropzone';

export const renderField = field => {
	const {type, label, input,meta:{touched, error, warning}} = field
	return (
		<div className="form-group">
		<label>{label}</label> 
		<br/>
		<input {...input} type={type} className="form-control"/>
		{touched &&
			((error && <span>{error}</span>) ||
			(warning && <span>{warning}</span>))}
		</div>
	)
}
export const customFileInput = field => {
	delete field.input.value; // <-- just delete the value property
	const {type, label, input,meta:{touched, error, warning}} = field
	return (
		<div className="form-group">
		<label>{label}</label>
    <br/>
    <input type={type} id="imp_file_nm" {...field.input} className="form-control"/>
		{touched &&
			((error && <span>{error}</span>) ||
			(warning && <span>{warning}</span>))}
		</div>
	)
}
const FILE_FIELD_NAME = 'importfile';

/*const renderDropzoneInput = (field) => {
  const files = field.input.value;
  console.log(field.input.value);
  return (
    <div>
      <Dropzone
        name={field.name}
        onDrop={
          ( filesToUpload, e ) => field.input.onChange(filesToUpload)
          }
        multiple={false}
        //accept=".xml"
        
      >
        <div>Try dropping some files here, or click to select files to upload.</div>
      </Dropzone>
      
      {
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
      {files && Array.isArray(files) && (
        <ul>
          { files.map((file, i) => <li key={i}>{file.name}</li>) }
        </ul>
      )}
    </div>
  );
}*/
class ImportFormComponent extends Component {

  constructor(props){
    super(props);
  }
    mySubmit(values) {
    var body = new FormData();
    Object.keys(values).forEach(( key ) => {
        body.append(key, values[ key ]);
      });
     console.log(values.imp_file_nm[0]);
		return this.props.onSave(values).then(response => {
      this.props.reset()
     	return response
		}).catch(error => {
			throw new SubmissionError(error)
		})
	}
    render() {
		const { handleSubmit} = this.props
		return (
			<div>
            <h1>Import/Upload</h1>
            <form onSubmit={handleSubmit((event)=>this.mySubmit(event))}>
            <Field name="imp_file_nm" label="Select File For Import" type="file" component={customFileInput}/>
            <button type="submit" className="btn btn-primary">Import Employee</button>
            </form>
            </div>
		)
	}
}

export default ImportFormComponent;