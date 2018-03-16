import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './base/config/configureStore';

import VarianceChartContainer from './app/variance/VarianceChartContainer';

import MonthlyPaymentChartContainer from './app/payments/MonthlyPaymentChartContainer';
import FilterPayrollData from './app/payrollintg/FilterPayrollData';

import PeriodicCompanyTotal from './app/payrollintg/PeriodicCompanyTotal';
import PeriodicAuthTaxTypeTotal from './app/payrollintg/PeriodicAuthTaxTypeTotal';

import {getApiUrl} from './base/config/confAPI';
import {getAppConf} from './base/config/confAction';

import {loadMonthlyChartData} from './app/payments/paymentsAction';
import {loadVarianceChartData} from './app/variance/varianceAction';

import * as rname from './base/constants/RenderNames';

let store = configureStore();

getApiUrl().then(appconf => {
    console.log(appconf);
    store.dispatch(getAppConf(appconf));
    store.dispatch(loadVarianceChartData());
    store.dispatch(loadMonthlyChartData());
}).catch(error => {
    throw (error);
});
/**
 * renderCFApplication 
 * master branch
 * @param {*} elem 
 * @param {*} renderName 
 */
function renderCFApplication(elem,renderName){
    setAppAnchor(elem);
    if(renderName===rname.RN_VARIANCE_CHART){
        renderVarianceChart(elem);
    }else if(renderName===rname.RN_LIABILITIES_CHART){
        renderMonthlyPaymentsChart(elem);
    }else if(renderName===rname.RN_FILTER_PAYROLL_DATA){
        renderFilterPayrollData(elem);
    }else if(renderName===rname.RN_PERIODIC_COMPNAY_TOTAL){
        renderPeriodicCompanyTotal(elem)
    }else if(renderName===rname.RN_AUTH_TAXTYPE_TOTAL){
        renderPeriodicAuthTaxTypeTotal(elem)
    }
}
/**
 * renderPeriodicAuthTaxTypeTotal
 * @param {*} elem 
 */
function renderPeriodicAuthTaxTypeTotal(elem){
    ReactDOM.render(
        <Provider store={store}>
        <PeriodicAuthTaxTypeTotal/>
        </Provider>,
       document.querySelector('#'+elem));
}
/**
 * renderPeriodicCompanyTotal
 * @param {*} elem 
 */
function renderPeriodicCompanyTotal(elem){
    ReactDOM.render(
        <Provider store={store}>
        <PeriodicCompanyTotal/>
        </Provider>,
        document.querySelector('#'+elem));
}
/**
 * renderFilterPayrollData
 * @param {*} elem 
 */
function renderFilterPayrollData(elem) {
    ReactDOM.render(
        <Provider store={store}>
        <FilterPayrollData/>
        </Provider>,
       document.querySelector('#'+elem));
}
/**
 * renderMonthlyPaymentsChart
 * @param {*} elem 
 */
function renderMonthlyPaymentsChart(elem) {
    ReactDOM.render(
        <Provider store={store}>
        <MonthlyPaymentChartContainer/>
        </Provider>,
       document.querySelector('#'+elem));
}
var APP_ANCHOR;
function setAppAnchor(elem){
   APP_ANCHOR = elem;
}
function appAnchor(){
   return APP_ANCHOR;
 }
/**
 * renderEmployeeGrid
 * @param {*} elem 
 */
function renderVarianceChart(elem) {
    ReactDOM.render(<Provider store={store}>
        <VarianceChartContainer/>
        </Provider>,
       document.querySelector('#'+elem));
}

module.exports = renderCFApplication;
window.renderCFApplication = renderCFApplication;
module.exports=appAnchor;
window.appAnchor=appAnchor;