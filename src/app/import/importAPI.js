import * as svcs from '../../base/constants/ServiceUrls';
class importAPI {
  static getAllImportData(apiUrl) {
    var svcs_url = `${apiUrl}${svcs.IMPORT_URL}`;
    return fetch(svcs_url).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  
  static saveImport(values,apiUrl) {
    var svcs_url = `${apiUrl}${svcs.IMPORT_URL}`;
    return fetch(svcs_url, {
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

  static deleteImport(importrec,apiUrl) {
    var svcs_url = `${apiUrl}${svcs.IMPORT_URL}${importrec.id}`;
    return fetch(svcs_url, {
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
}
export default importAPI;