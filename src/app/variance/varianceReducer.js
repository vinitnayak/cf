import * as types from '../../base/constants/ActionTypes';
import initialState from '../../base/config/initialState';

export default function paymentsReducer(state = initialState.variancechartdata,action) {
  switch(action.type) {
    case types.LOAD_VARIANCECHART_DATA_SUCCESS:
    return Object.assign([], ...state, action.variancechartdata)  
    default: 
      return state;
  }
}