import * as svcs from '../../base/constants/ServiceUrls'
class employeeAPI {
  static getAllEmployee() {
    return fetch(svcs.EMPLOYEES_URL).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  static deleteEmployee(emp) {
    var url = `${svcs.EMPLOYEES_URL}${emp.id}`;
    return fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    });
  }
  static saveEmployee(values) {
    return fetch(svcs.EMPLOYEES_URL, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    });
  }
}
export default employeeAPI;