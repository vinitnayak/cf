import {combineReducers} from 'redux';
import chartdata from '../../app/payments/paymentsReducer';
import { reducer as formReducer } from 'redux-form';
import periodicReducer from '../../app/payrollintg/periodicReducer';
import varianceReducer from '../../app/variance/varianceReducer';

const rootReducer = combineReducers({
  form:formReducer,
  monthlychartdata:chartdata,
  periodicdata: periodicReducer,
  variancechartdata:varianceReducer,
})
export default rootReducer;