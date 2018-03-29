import * as svcs from '../../base/constants/ServiceUrls'
class periodicAPI {
  static getPeriodicCompanyTotalData() {
    var svcs_url = `${svcs.COMPANYTOTAL_URL}`;
    return fetch(svcs_url).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  static getPeriodicAuthTaxTypeTotalData() {
    var svcs_url = `${svcs.AUTHTAXTYPETOTAL_URL}?_sort=id&_order=DESC`;
    return fetch(svcs_url).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  static addPayrollRecord(values) {
    var svcs_url = `${svcs.AUTHTAXTYPETOTAL_URL}`;
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
}

export default periodicAPI;