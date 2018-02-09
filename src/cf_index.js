import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './base/config/configureStore';

import GrdReportComponent from './app/employee/GrdReportComponent.jsx';
import EmployeeFormContainer from './app/employee/EmployeeFormContainer';
import EmployeeListContainer from './app/employee/EmployeeListContainer.jsx';

import {loadEmployees} from './app/employee/employeeAction';
import {loadMonthlyChartData} from './app/payments/paymentsAction';

import MonthlyPaymentChartContainer from './app/payments/MonthlyPaymentChartContainer';

import {loadImportData} from './app/import/importAction';
import ImportContainer from './app/import/ImportContainer.js';

import TestCss from './app/sample/TestCss';
import FilterPayrollData from './app/payrollintg/FilterPayrollData';
import PeriodicByCompanyGrid from './app/payrollintg/PeriodicByCompanyGrid.jsx';
import PeriodicByAuthorityGrid from './app/payrollintg/PeriodicByAuthorityGrid.jsx';

import {getApiUrl} from './base/config/confAPI';
import {getAppConf} from './base/config/confAction';

let store = configureStore();

getApiUrl().then(appconf => {
    store.dispatch(getAppConf(appconf));
    store.dispatch(loadEmployees());
    store.dispatch(loadMonthlyChartData());
    store.dispatch(loadImportData());
}).catch(error => {
    throw (error);
});
/**
 * renderApplication 
 * master branch
 * @param {*} elem 
 * @param {*} path 
 */
function renderApplication(elem,path){
     store.dispatch(loadEmployees());
    if(path==='employeelist'){
        renderEmployeeList(elem);
    }else if(path==='addemployee'){
        renderAddEmployeeForm(elem);
    }else if(path==='employeegrid'){
        renderEmployeeGrid(elem);
    }else if(path==='main'){
        renderApplicationMain(elem);
    }else if(path==='monthlypaymentschart'){
        renderMonthlyPaymentsChart(elem);
    }else if(path==='importupload'){
        renderImportUI(elem);
    }else if(path==='testcss'){
        renderTestCss(elem);
    }else if(path==='periodiccomp'){
        renderPeriodicByCompany(elem);
    }else if(path==='periodicauth'){
        renderPeriodicByAuthority(elem);
    }else if(path==='filterpayrolldata'){
        renderFilterPayrollData(elem);
    }
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
        document.getElementById(elem));
}
/**
 * renderMpd
 * @param {*} elem 
 */
function renderMpd(elem) {
    ReactDOM.render(
        <Provider store={store}>
        <Mpd/>
        </Provider>,
        document.getElementById(elem));
}
/**
 * renderPeriodicByCompany
 * @param {*} elem 
 */
function renderPeriodicByCompany(elem) {
    ReactDOM.render(
        <Provider store={store}>
        <PeriodicByCompanyGrid/>
        </Provider>,
        document.getElementById(elem));
}
/**
 * renderPeriodicByAuthority
 * @param {*} elem 
 */
function renderPeriodicByAuthority(elem) {
    ReactDOM.render(
        <Provider store={store}>
        <PeriodicByAuthorityGrid/>
        </Provider>,
        document.getElementById(elem));
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
        document.getElementById(elem));
}
/**
 * renderEmployeeGrid
 * @param {*} elem 
 */
function renderEmployeeGrid(elem) {
    ReactDOM.render(<Provider store={store}>
        <GrdReportComponent/>
        </Provider>,
        document.getElementById(elem));
}
/**
 * renderAddEmployeeForm
 * @param {*} elem 
 */
function renderAddEmployeeForm(elem) {
    ReactDOM.render(
        <Provider store={store}>
        <EmployeeFormContainer/>
        </Provider>,
        document.getElementById(elem));
}
/**
 * renderEmployeeList
 * @param {*} elem 
 */
function renderEmployeeList(elem) {
    ReactDOM.render(<Provider store={store}>
        <EmployeeListContainer/>
        </Provider>,
        document.getElementById(elem));
}
/**
 * renderImportUI
 * @param {*} elem 
 */
function renderImportUI(elem) {
    ReactDOM.render(<Provider store={store}>
        <ImportContainer/>
        </Provider>,
        document.getElementById(elem));
}
function renderTestCss(elem) {
    ReactDOM.render(<TestCss/>,
        document.getElementById(elem));
}
module.exports = renderApplication;
window.renderApplication = renderApplication;