import {combineReducers} from 'redux';
import employees from '../../app/employee/employeeReducer';
import chartdata from '../../app/payments/paymentsReducer';
import { reducer as formReducer } from 'redux-form';
import importfile from '../../app/import/importReducer';

const rootReducer = combineReducers({
  // short hand property names
  emps:employees,
  form:formReducer,
  monthlychartdata:chartdata,
  importdata:importfile
})
export default rootReducer;