import * as svcs from '../../base/constants/ServiceUrls'
class paymentsAPI {
  static getMonthlyChartData() {
    var svcs_url = `${svcs.MONTHLYCHART_DATA_URL}`;
    return fetch(svcs_url).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
export default paymentsAPI;