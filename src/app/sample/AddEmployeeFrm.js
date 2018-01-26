import React,{Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Field, reduxForm, SubmissionError,reset} from 'redux-form';
import {connect} from 'react-redux';
import  { saveEmployee }  from '../../actions/employeeAction';

export const formName = 'entry-form';
const validate = values => {
    const errors = {}
    if (!values.first_name) {
      errors.first_name = 'Required'
    } else if (values.first_name.length > 15) {
      errors.first_name = 'Must be 15 characters or less'
    }
    if (!values.last_name) {
      errors.last_name = 'Required'
    } else if (values.last_name.length > 15) {
      errors.age = 'Must be 15 characters or less'
    } 
    if (!values.email) {
        errors.email = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
    return errors
}
const afterSubmit = (result, dispatch) => dispatch(reset(formName));
class ContactForm extends Component{
    constructor(props){
        super(props);
    }
    onSubmit(values){
        this.props.saveEmployee(values);
    }
    
    
    render(){
        const renderField = ({type, label, input,meta:{touched, error, warning}}) => (
            <div className="form-group">
            <label>{label}</label> 
            <br/>
            <input {...input} type={type} className="form-control"/>
              {touched &&
                ((error && <span>{error}</span>) ||
                  (warning && <span>{warning}</span>))}
            </div>
        )
        const { handleSubmit} = this.props
        return(
            <div className="cBox boxTools col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
            <h1>Add Employee</h1>
            <form onSubmit={this.props.handleSubmit((event)=>this.onSubmit(event))}>
                <Field name="first_name" label="First Name" component={renderField} type="text"/>
                <Field name="last_name" label="Last Name" component={renderField} type="text"/>
                <Field name="email" label="email" component={renderField} type="email"/>
                <button type="submit" className="btn btn-primary">Add Employee</button>
            </form>
            </div>
        )
    }
}
// Decorate the form component
export default reduxForm({
    form: formName, // a unique name for this form
    validate, // <--- validation function given to redux-form
    onSubmitSuccess: afterSubmit
})(connect(null,{saveEmployee})(ContactForm))