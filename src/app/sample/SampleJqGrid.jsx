import React, { Component } from 'react';
import DtTimeInput from './DtTimeInputJq';
import Jqgridtest from './GridCompJq';
class SampleJqGrid extends Component {
    
    render(){
        return (<div className="cBox boxTools col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                <h1>JQxGrid/Reports</h1>
                <div>Start Date : <DtTimeInput/> End Date : <DtTimeInput/></div>
                <Jqgridtest/>
                </div>);
    }
}
export default SampleJqGrid;