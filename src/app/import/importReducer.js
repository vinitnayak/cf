import * as types from '../../base/constants/ActionTypes';
import initialState from '../../base/config/initialState';

export default function importReducer(state = initialState.importdata,action) {
  // state variable here reps just an array of courses
  switch(action.type) {
    case types.LOAD_IMPORT_SUCCESS:
      // return action.cats;
     // return action.cats.map(cat => Object.assign({}, cat, Object.assign([], cat.hobby_ids)))
     return Object.assign([], state, action.importdata)
    
    case types.CREATE_IMPORT_SUCCESS:
      console.log('CREATE_IMPORT_SUCCESS');
      console.log(action.values);
      return [
        state.filter(importfile => importfile.id === action.values.id),
        Object.assign(state, action.values)
      ]
      case types.DELETE_IMPORT_SUCCESS:
      console.log('state');
      console.log(state);
      const newState = Object.assign([], state);
      const indexOfEmpToDelete = state.findIndex(importrec => {
      return importrec.id == action.importrec.id
      })
      newState.splice(indexOfEmpToDelete, 1);
      console.log('newState');
      console.log(newState);
      return newState;
    default: 
      return state;
  }
}