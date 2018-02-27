import redux from 'redux'
import React, { Component, PropTypes } from 'react'
import { Field, SubmissionError } from 'redux-form'
import {Alert, Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Col, Form,Input } from 'reactstrap';
import { reduxForm } from 'redux-form'
import {connect} from 'react-redux';
import * as formValidations from './formValidations'
export const renderField = field => {
	const { type, label, input, meta: { touched, error, warning } } = field
	return (
		<div className="form-group">
			<label>{label}</label>
			<br />
			<input {...input} type={type} className="form-control" />
			{touched &&
				((error && <span>{error}</span>) ||
					(warning && <span>{warning}</span>))}
		</div>
	)
}
export const renderFieldRs = field => {
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

class PeriodicPayrollRecordForm extends Component {
	constructor(props) {
        super(props);
        this.state = {
            showAddPayrollRecordModal: false,
        };
        this.toggleAddPayrollRecordModal = this.toggleAddPayrollRecordModal.bind(this);
    }
    toggleAddPayrollRecordModal() {
        this.setState({
            showAddPayrollRecordModal: !this.state.showAddPayrollRecordModal,
          closeAll: false
        });
    }
	mySubmit(values) {
		console.log(values);
	}
	render() {
		return (
			<Modal size="lg" isOpen={this.state.showAddPayrollRecordModal} toggle={this.toggleAddPayrollRecordModal} onClosed={this.toggleAddPayrollRecordModal}>
				<ModalHeader>Add Periodic Record</ModalHeader>
				<ModalBody>
				<div className="cBox boxTools col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
            <h1>Add Employee</h1>
            <form onSubmit={this.props.handleSubmit((event)=>this.mySubmit(event))}>
                <Field name="first_name" label="First Name" component={renderField} type="text"/>
                <Field name="last_name" label="Last Name" component={renderField} type="text"/>
                <Field name="email" label="email" component={renderField} type="email"/>
                <button type="submit" className="btn btn-primary">Add Employee</button>
            </form>
            </div>
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={this.toggleAddPayrollRecordModal}>Save</Button>{' '}
					<Button color="secondary" onClick={this.toggleAddPayrollRecordModal}>Cancel</Button>
				</ModalFooter>
			</Modal>
		)
	}
}
let FormContainer = reduxForm({
	form: 'formName',
	withRef: true,
	validate: formValidations.createValidator({
		first_name: formValidations.required,
		last_name: formValidations.required,
		email: formValidations.required
	})
})(PeriodicPayrollRecordForm)
export default connect(null,null, null, { withRef: true })(FormContainer);