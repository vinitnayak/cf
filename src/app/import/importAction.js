import * as types from '../../base/constants/ActionTypes';
import importApi from './importAPI';
import axios from 'axios';
import ajax from 'superagent';

export function loadImportData() {
      return function(dispatch) {
          return importApi.getAllImportData().then(importdata => {
            dispatch(loadImportSuccess(importdata));
          }).catch(error => {
            throw(error);
          });
    };
  }

export function saveImport(values) {
  return function (dispatch) {
    console.log(values);
    return importApi.saveImport(values).then(values => {
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
    return function(dispatch) {
      return importApi.deleteImport(importrec).then(() => {
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