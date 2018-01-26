import * as svcs from '../../base/constants/ServiceUrls';
class importAPI {
  static getAllImportData() {
    return fetch(svcs.IMPORT_URL).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  
  static saveImport(values) {
    return fetch(svcs.IMPORT_URL, {
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

  static deleteImport(importrec) {
    var url = `${svcs.IMPORT_URL}${importrec.id}`;
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
}
export default importAPI;