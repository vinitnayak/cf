import * as types from '../../base/constants/ActionTypes'
import employeeApi from './employeeAPI';
export function authenticateWS() {
  console.log('I am authenticateWS...111');
  var username = 'CFWSUSER';
  var password = 'bsi';
  let auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');
  return fetch('https://ssdev01:10443/SampleWS/r/v1/EchoService/echo2', {
          method: 'POST',
          headers: {
              Authorization: auth
          }
      })
      .then(function (res) {
          console.log('result ->', res);
          //console.log('headers ->', res.headers.raw());
          console.log('status ->', res.statusCode + ' ' + res.statusText);
          console.log('text ->', res.text());
          console.log('Done!');
      }).catch(function (err) {
          console.log('Error', err)
      });
};
/*export function testRestfulCall() {
            console.log('I am testRestfulCall...');
            var username = 'CFWSUSER';
            var password = 'bsi';
            var base64 = require('base-64');
            var encodedCredentials = "Basic " + btoa(username + ':' + password);
            var encoded = "Basic " + base64.encode(username + ':' + password);
            var auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
            var tmp ='Basic Q0ZXU1VTRVI6YnNp';
            console.log(auth);
            var options = {
                url: 'https://ssdev01:10443/SampleWS/r/v1/EchoService/echo2',
                headers : {
                  "Authorization" : auth,
                  'Access-Control-Allow-Credentials': true,
                  'withCredentials': true

                 },
                method: "POST"
            };

            let request = require('request');
            request(options, function (err, res, body) {
                if (err) {
                    console.log('Error from echo service --> ' + err);
                    return;
                }
                console.dir('headers', res.headers);
                console.dir('status code', res.statusCode);
                console.dir(body);
                console.log('Done!');
            });
        };

export function lastcc(){
  let url = 'https://ssdev01:10443/SampleWS/r/v1/EchoService/echo2';
  let username = 'CFWSUSER';
  let password = 'bsi';

  ajax.post('https://ssdev01:10443/SampleWS/r/v1/EchoService/echo2')
        .auth('Authorization:Basic ' + username + ":" + password)
    //.set({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + btoa(username + ":" + password)})
    
  .end((error, response) => {
      if (!error && response) {
          console.log(response.body);
      } else {
          console.log('There was an error fetching from http://ssdev01:10443', error);
      }
  }
);
}*/
export function loadEmployees() {
    //authenticateWS();
    return function(dispatch,getState) {
        const state = getState();
        return employeeApi.getAllEmployee(state.appconf.SVCS_CONTEXT_URL).then(emps => {
          dispatch(loadEmployeeSuccess(emps));
        }).catch(error => {
          throw(error);
        });
  };
}

export function loadEmployeeSuccess(emps) {
  return {type: types.LOAD_EMPLOYEES_SUCCESS, emps};
}

export function saveEmployee(values) {
  return function (dispatch,getState) {
    const state = getState();
    return employeeApi.saveEmployee(values,state.appconf.SVCS_CONTEXT_URL).then(values => {
      dispatch(createEmployeeSuccess(values));
      return values;
    }).catch(error => {
      throw(error);
    });
  };
}
export function createEmployeeSuccess(values) {
  console.log('createEmployeeSuccess');
  console.log(values);
  return {type: types.CREATE_EMPLOYEE_SUCCESS, values};
}

export function deleteEmployee(emp) {
  return function(dispatch,getState) {
    const state = getState();
    return employeeApi.deleteEmployee(emp,state.appconf.SVCS_CONTEXT_URL).then(() => {
      console.log(`Deleted ${emp.id}`)
      dispatch(deleteEmployeeSuccess(emp));
      return;
    }).catch(error => {
      throw(error);
    })
  }
}
export function deleteEmployeeSuccess(emp) {
  console.log('deleteEmployeeSuccess');
  console.log(emp);
  return {type: types.DELETE_EMPLOYEE_SUCCESS, emp};
}