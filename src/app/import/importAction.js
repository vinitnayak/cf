import * as types from '../../base/constants/ActionTypes';
import importApi from './importAPI';

export function loadImportData() {
      return function(dispatch,getState) {
          const state = getState();
          return importApi.getAllImportData(state.appconf.SVCS_CONTEXT_URL).then(importdata => {
            dispatch(loadImportSuccess(importdata));
          }).catch(error => {
            throw(error);
          });
    };
  }

export function saveImport(values) {
  return function (dispatch,getState) {
    const state = getState();
    return importApi.saveImport(values,state.appconf.SVCS_CONTEXT_URL).then(values => {
      dispatch(loadImportData());
      return values;
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadImportSuccess(importdata) {
    return {type: types.LOAD_IMPORT_SUCCESS, importdata};
  }

  export function createImportSuccess(values) {
    console.log('createEmployeeSuccess');
    console.log(values);
    return {type: types.CREATE_IMPORT_SUCCESS, values};
  }

  export function deleteImport(importrec) {
    return function(dispatch,getState) {
      const state = getState();
      return importApi.deleteImport(importrec,state.appconf.SVCS_CONTEXT_URL).then(() => {
        console.log(`Deleted ${importrec.id}`)
        dispatch(deleteImportSuccess(importrec));
        return;
      }).catch(error => {
        throw(error);
      })
    }
  }
  export function deleteImportSuccess(importrec) {
    console.log('deleteImportSuccess');
    console.log(importrec);
    return {type: types.DELETE_IMPORT_SUCCESS, importrec};
  }