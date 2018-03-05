import * as svcs from '../../base/constants/ServiceUrls'
class varianceAPI {
  static getVarianceChartData(apiUrl) {
    var svcs_url = `${apiUrl}${svcs.VARIANCECHART_DATA_URL}`;
    return fetch(svcs_url).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
export default varianceAPI;