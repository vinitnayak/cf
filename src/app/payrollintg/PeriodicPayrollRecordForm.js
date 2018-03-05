import redux from 'redux';
import React, { Component, PropTypes } from 'react';
import { Field, SubmissionError } from 'redux-form';
import {Alert, Button,Card, CardBody,ButtonGroup, Collapse ,Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Col, Form,Input } from 'reactstrap';
import { reduxForm } from 'redux-form'
import {connect} from 'react-redux';
import * as formValidations from './formValidations'
export const renderField = field => {
	const { type, label, input, meta: { touched, error, warning } } = field
	return (
		<div className="form-group row">
			<label className="col-sm-3 col-form-label">{label}</label>
			<div className="col-sm-9">
			<input {...input} type={type} className="form-control" />
			{touched &&
				((error && <span>{error}</span>) ||
					(warning && <span>{warning}</span>))}
		 	</div>
		</div>
	)
}

//const companies = [ 'Baileys Baskets - Kronos (237654321)', 'Transmitter 00DENNYS _REST (TRANSMITTER)'];
const companies = [{'id':'1', 'company': 'Baileys Baskets - Kronos (237654321)'},{'id':'2','company':'Transmitter 00DENNYS _REST (TRANSMITTER)'}];

const rescodes  = [ 'Resident', 'Nonresident','Default Resident','Live and Work','Resident as of Jan 1','Nonresident as of Jan 1','Live and Work as of Jan 1','Resident Territories','Resident Puerto Rico']
const nonrecvals=['No','Yes'];
const renderSelectField = ({ input, label, type,placeholder, meta: { touched, error }, children }) => (
	<div class="form-group row">
	  <label className="col-sm-3 col-form-label">{label}</label>
	  <div className="col-sm-9">
		<select {...input} class="form-control">
		  <option value="-1">{placeholder}</option>
		  {children}
		</select>
		{touched && error && <span>{error}</span>}
	  </div>
	</div>
  )
class PeriodicPayrollRecordForm extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
    	this.state = { collapse: false };
    }
    toggle() {
		this.setState({ collapse: !this.state.collapse });
	}
	render() {
		const {
			handleSubmit
		} = this.props;
		return (
			<div>
			<form onSubmit={handleSubmit.bind(this)}>
			<Card>
				<CardBody>
						<Field name="companyname" component={renderSelectField} label="Company Name"  placeholder="Select a company..." >
						 { companies.map(comp => <option value={comp.company}>{comp.company}</option>) }
						</Field>
						<Field name="payrollid" label="Payroll ID" component={renderField} type="text" />
						<Field name="payrollname" label="Payroll Name" component={renderField} type="text" />
						<Field name="checkdate" label="Check Date" component={renderField} type="date" />
						<Field name="taxcode" label="Tax Code" component={renderField} type="text" />
						<Field name="rescode" label="Resident Code" placeholder="Select a resident code..." component={renderSelectField}>
						{ rescodes.map(rescodes => <option value={rescodes}>{rescodes}</option>) }
						</Field>
						<Field name="grosswages" label="Gross Wages" component={renderField} type="text" />
						<Field name="taxablegrosswages" label="Taxable Gross Wages" component={renderField} type="text" />
						<Field name="taxableamount" label="Taxable Amount" component={renderField} type="text" />
						<Field name="taxamount" label="Tax Amount" component={renderField} type="text" />
						<Field name="empcount" label="Employee Count" component={renderField} type="text" />
						<Field name="empcountday12" label="Employee Count - Day 12" component={renderField} type="text" />
						<Button onClick={this.toggle} color="link">Enter Non-Required Fields</Button>
				</CardBody>
			</Card>
			<Collapse isOpen={this.state.collapse}>
			 <Card>
			   <CardBody>
					<Field name="grosswagesqtrly" label="Gross Wages Quarterly" component={renderField} type="text" />
					<Field name="grosswagesyrly" label="Gross Wages Yearly" component={renderField} type="text" />
					<Field name="grosswagesmon1to12" label="Gross Wages Month 1 Day 12" component={renderField} type="text" />
					<Field name="grosswagesmon2to12" label="Gross Wages Month 2 Day 12" component={renderField} type="text" />
					<Field name="grosswagesmon3to12" label="Gross Wages Month 3 Day 12" component={renderField} type="text" />
					<Field name="grosswagesmon1" label="Gross Wages Month 1" component={renderField} type="text" />
					<Field name="grosswagesmon2" label="Gross Wages Month 2" component={renderField} type="text" />
					<Field name="grosswagesmon3" label="Gross Wages Month 3" component={renderField} type="text" />
					<Field name="taxablegwq" label="Taxable Gross Wages Quarterly" component={renderField} type="text" />
					<Field name="taxablegwy" label="Taxable Gross Wages Yearly" component={renderField} type="text" />
					<Field name="taxablegwmon1to12" label="Taxable Gross Wages Month 1 Day 12" component={renderField} type="text" />
					<Field name="taxablegwmon2to12" label="Taxable Gross Wages Month 2 Day 12" component={renderField} type="text" />
					<Field name="taxablegwmon3to12" label="Taxable Gross Wages Month 3 Day 12" component={renderField} type="text" />
					<Field name="taxablegwm1" label="Taxable Gross Wages Month 1" component={renderField} type="text" />
					<Field name="taxablegwm2" label="Taxable Gross Wages Month 2" component={renderField} type="text" />
					<Field name="taxablegwm3" label="Taxable Gross Wages Month 3" component={renderField} type="text" />
					<Field name="taxamtq" label="Taxable Amount Quarterly" component={renderField} type="text" />
					<Field name="taxamty" label="Taxable Amount Yearly" component={renderField} type="text" />
					<Field name="taxamtm1to12" label="Taxable Amount Month 1 Day 12" component={renderField} type="text" />
					<Field name="taxamtm2to12" label="Taxable Amount Month 2 Day 12" component={renderField} type="text" />
					<Field name="taxamtm3to12" label="Taxable Amount Month 3 Day 12" component={renderField} type="text" />
					<Field name="taxamtm1" label="Taxable Amount Month 1" component={renderField} type="text" />
					<Field name="taxamtm2" label="Taxable Amount Month 2" component={renderField} type="text" />
					<Field name="taxamtm3" label="Taxable Amount Month 3" component={renderField} type="text" />
					<Field name="txamtq" label="Tax Amount Quarterly" component={renderField} type="text" />
					<Field name="txamt1" label="Tax Amount Month 1" component={renderField} type="text" />
					<Field name="txamt2" label="Tax Amount Month 2" component={renderField} type="text" />
					<Field name="txamt3" label="Tax Amount Month 3" component={renderField} type="text" />
					<Field name="hoursworked" label="Hours Worked" component={renderField} type="text" />
					<Field name="weeksworked" label="Weeks Worked" component={renderField} type="text" />
					<Field name="weeksworkedyrly" label="Weeks Worked Yearly" component={renderField} type="text" />
					<Field name="workedmon1" label="Worked Month 1" values={nonrecvals} component={renderSelectField} type="select" />
					<Field name="workedmon2" label="Worked Month 2" values={nonrecvals} component={renderSelectField} type="select" />
					<Field name="workedmon3" label="Worked Month 3" values={nonrecvals} component={renderSelectField} type="select" />
					<Field name="paidbytp" label="Paid By Third-Party" values={nonrecvals} component={renderSelectField} type="select" />
					<Field name="exempt" label="Exempt" values={nonrecvals} component={renderSelectField} type="select" />
			   </CardBody>
			 </Card>
		   </Collapse>

		   </form>
		   </div>
		)
	}
}
let FormContainer = reduxForm({
	form: 'addPayrollRecordForm',
	withRef: true,
	validate: formValidations.createValidator({
		companyname:formValidations.requiredSelect,
		payrollid: formValidations.required,
		payrollname: formValidations.required,
		checkdate:formValidations.required,
		taxcode: formValidations.required,
		rescode:formValidations.requiredSelect,
		grosswages:formValidations.required,
		taxablegrosswages:formValidations.required,
		taxableamount:formValidations.required,
		taxamount:formValidations.required,
		empcount:formValidations.required,
		empcountday12:formValidations.required
	})
})(PeriodicPayrollRecordForm)
export default connect(null,null, null, { withRef: true })(FormContainer);