/**
 * @author Vinit
 */
var request = require('request');
/**
 * app router constants
 */
const host = 'http://localhost:'
const port = '30024';
const svcpath = '/svc/';
const apiversion = 'v1';
const post = 'POST';
const get = 'GET';
const MONTHLYCHART_DATA_URL = '/monthlyChartdata'
const COMPANYTOTAL_URL = '/companytotaldata'
const AUTHTAXTYPETOTAL_URL = '/authtaxtypetotaldata'
const VARIANCECHART_DATA_URL = '/variancedata'
/**
 * approuter
 */
module.exports = {
    approuter: function (app) {
        app.get(COMPANYTOTAL_URL, function (req, res) {
            callServiceRequestGet(req.url, res);
        });
        app.get(MONTHLYCHART_DATA_URL, function (req, res) {
            callServiceRequestGet(req.url, res);
        });
        app.get(VARIANCECHART_DATA_URL, function (req, res) {
            callServiceRequestGet(req.url, res);
        });
        app.get(AUTHTAXTYPETOTAL_URL, function (req, res) {
            callServiceRequestGet(req.url, res);
        });
        app.post(AUTHTAXTYPETOTAL_URL, function (req, res) {
            callServiceRequestPost(req.url, req.body, res);
        });
    },
};
/**
 * callServiceRequestGet
 * @param {*} requrl 
 * @param {*} res 
 */
callServiceRequestGet = (requrl, res) => {
    const options = {
        url: `${host}${port}${svcpath}${apiversion}${requrl}`,
        method: get
    };
    request(options).pipe(res);
}
/**
 * callServiceRequestPost
 * @param {*} requrl 
 * @param {*} postData 
 * @param {*} res 
 */
callServiceRequestPost = (requrl, postData, res) => {
    const options = {
        method: post,
        body: postData,
        json: true,
        url: `${host}${port}${requrl}`,
    };
    request(options, function (err, res, body) {
        if (err) {
            console.error('error posting json: ', err)
            throw err
        }
    }).pipe(res);
}