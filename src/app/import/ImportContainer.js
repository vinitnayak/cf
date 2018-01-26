import React, {Component} from 'react';
import ImportFormContainer from './ImportFormContainer';
import ImportGridComponentx from './ImportGridComponentx.jsx';
import {connect} from 'react-redux';
import {loadImportData} from './importAction';
import {bindActionCreators} from 'redux';

class ImportContainer extends Component {
 
    constructor(props){
        super(props);
    }
   
    renderGrid(importdata){
        console.log('Inside renderGrid');
        console.log(importdata);
        if(importdata && importdata.length >0){
            return(<div className="cBox boxTools col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
            <h1>Import</h1>
            <ImportFormContainer/>
            <div>
                <ul>
                {importdata.map((imp) =>
                <li key={imp.id}>
                {imp.filename}
                </li>
                )}
                </ul>
            </div>
            <ImportGridComponentx importdata={importdata}/>
            </div>);
        }else {
            return(<div className="cBox boxTools col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
            <h1>Import</h1>
            <ImportFormContainer/>
            <p/>
            <div>No data available</div>
            </div>
            );
        };
    }
    render(){
        return (<div>
            {this.renderGrid(this.props.importdata)}
            </div>);
    }
}

function mapStateToProps(state) {
    console.log('mapStateToProps');
    console.log(state.importdata);
    return {
        importdata: state.importdata
    }
}

export default connect(mapStateToProps)(ImportContainer);