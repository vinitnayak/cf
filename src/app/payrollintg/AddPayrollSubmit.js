import React from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import {Button} from 'reactstrap';
const AddPayrollSubmit = ({ dispatch }) => (
  <Button  onClick={() => dispatch(submit('addPayrollRecordForm'))} color="success">Save</Button>
);
export default connect()(AddPayrollSubmit);