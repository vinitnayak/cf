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

import TestCss from './app/sample/TestCss'
import {Route,Switch,BrowserRouter as Router,Redirect,Link,b} from 'react-router-dom';


let store = configureStore();
store.dispatch(loadEmployees());
store.dispatch(loadMonthlyChartData());
store.dispatch(loadImportData());

const anchor = '_compliancefactory_id';
/**
 * render function master
 * This is added for the local testing of application UI. 
 * Please comment this for production or Testing with MAC.
 */
ReactDOM.render(
    <Provider store={store}>
    <Router>
        <div>
            <div><Link to="/">Employee List</Link></div>
            <div><Link to="/employeegrid">Employee List Grid</Link></div>
            <div><Link to="/monthlypaymentschart">Monthly Payments Chart</Link></div>
            <div><Link to="/addemployee">Add Employee</Link></div>
            <div><Link to="/importsample">Import Sample</Link></div>
            <div><Link to="/testcss">Test CSS</Link></div>
            <Switch>
                 <Route exact path='/' render={() => (<Redirect to="/employeelist"/>)}/>
                 <Route exact path='/employeelist' component={EmployeeListContainer}></Route>
                 <Route exact path='/employeegrid' component={GrdReportComponent}></Route>
                 <Route exact path='/monthlypaymentschart' component={MonthlyPaymentChartContainer}></Route>
                 <Route exact path='/addemployee' component={EmployeeFormContainer}></Route>
                 <Route exact path='/importsample' component={ImportContainer}></Route>
                 <Route exact path='/testcss' component={TestCss}></Route>
            </Switch>
        </div>
    </Router>
    </Provider>
    ,
    document.getElementById(anchor));
/**
 * renderApplication
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
    }
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
module.exports = renderApplication;
window.renderApplication = renderApplication;