import * as types from '../../base/constants/ActionTypes';
import initialState from '../../base/config/initialState';

export default function periodicReducer(state = initialState.periodicdata,action) {
  switch(action.type) {
    case types.LOAD_PERIODIC_DATA:{
      return Object.assign({}, ...state, action.periodicdata)  
    }
    case types.PERIODIC_COMPANY_TOTAL_SUCCESS:{
      return Object.assign({}, ...state, action.periodicdata)  
    }
    case types.PERIODIC_AUTHTAXTYPE_TOTAL_SUCCESS:{
      return Object.assign({}, ...state, action.periodicdata)
    }
    case types.PAYROLL_RECORD_CREATE_SUCCESS:{
      console.log('PAYROLL_RECORD_CREATE_SUCCESS')
      const arr2 = state.authtaxtypetotaldata.concat(action.values);
      return Object.assign({}, ...state, {
        filtertype:state.filtertype,
        filterby:state.filterby,
        startdt:state.startdt,
        enddate:state.enddate,
        viewtype:state.viewtype,
        filterlabel:state.filterlabel,
        authtaxtypetotaldata: Object.assign([], ...state.authtaxtypetotaldata, arr2)
      });
     
    }
    case 'TESTACTION':{
      console.log('Inside action...');
      return state;    
    }
    default: 
      return state;
  }
}