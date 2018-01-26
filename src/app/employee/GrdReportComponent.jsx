import React, { Component } from 'react';
import JqGridReport from './GrdReportContainer';
import {connect} from 'react-redux';
class ReportComponent extends Component {
    render(){
        return (
            <div className="cBox boxTools col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
            <h1>Employee List Grid</h1>
            <JqGridReport/>
            </div>
        );
    }
}
export default ReportComponent;