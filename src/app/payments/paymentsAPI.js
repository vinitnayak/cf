import * as svcs from '../../base/constants/ServiceUrls'
class paymentsAPI {
  static getMonthlyChartData() {
    return fetch(svcs.MONTHLYCHART_DATA_URL).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
export default paymentsAPI;