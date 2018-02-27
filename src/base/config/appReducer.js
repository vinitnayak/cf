import {combineReducers} from 'redux';
import chartdata from '../../app/payments/paymentsReducer';
import { reducer as formReducer } from 'redux-form';
import confReducer from '../config/confReducer';
import periodicReducer from '../../app/payrollintg/periodicReducer';

const rootReducer = combineReducers({
  form:formReducer,
  monthlychartdata:chartdata,
  appconf:confReducer,
  periodicdata: periodicReducer,
})
export default rootReducer;