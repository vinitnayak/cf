import React from 'react'
import { connect } from 'react-redux'
import ImportFormComponent from './ImportFormComponent'
import { reduxForm } from 'redux-form'
import * as formValidations from '../employee/formValidations'
import  { saveImport ,loadImportData}  from './importAction';

export const formName1 = 'entry-formxx';
const afterSubmit = (result, dispatch) => dispatch(reset(formName1));
const afterSubmitxx = () => test();
let ImportFormContainer = reduxForm({
	form: formName1,
	onSubmitSuccess: afterSubmit,
	validate: formValidations.createValidator({
	importfile: formValidations.required,
	importfile:formValidations.isXmlFile

	})
})(ImportFormComponent)

const mapStateToProps = null;
const mapDispatchToProps = dispatch => {
	return {
		// This is just an example of an action that your submit handler might
		// fire. You can see I'm dispatching an action, just for example sake
		// to make it more realistic, but there's not even a reducer for the
		// action.
		onSave: importobject => {
			console.log('Now running onSave action');
			return new Promise(resolve => {
				setTimeout(() => {
					console.log('Now dispatching action with type FORM_SUBMIT')
					let fileNM = importobject.imp_file_nm[0].name;
					console.log(fileNM);
					var importtext= {"custid":"10102" ,"importdt": "2017-10-10","importtm":"10:10:10","type":"Import","importdata": "Garnishment","filename":fileNM}
					console.log(importtext);
					importobject = JSON.stringify(importtext);
					importobject = JSON.parse(importobject)
					console.log(importobject);
					dispatch(saveImport(importobject));
					resolve();
				}, 1000)
			})
		}
	}
}
onSave: importobject => {
	alert(importobject);
}
// We'll pass this mergeProps parameter to redux's connect is what allows us
// to override as we please during testing. In this container,
// mapDispatchToProps provides an onSave prop to our component, but we want to
// override onSave during testing (e.g. so we know if it's called or not).

//const mergeProps = (stateProps, dispatchProps, ownProps) =>
//	Object.assign({}, stateProps, dispatchProps, ownProps)
ImportFormContainer = connect(mapStateToProps, mapDispatchToProps)(ImportFormContainer)

export default ImportFormContainer