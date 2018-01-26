import React, {Component} from 'react';
import EmployeeRows from './EmployeeRowContainer';
import {connect} from 'react-redux';

class EmployeeList extends Component {
    constructor(props){
        super(props);
    }
    render(){
        if(!this.props.emps){
          return(<div>...Loaidng</div>)
        }
        return(
          <div className="cBox boxTools col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
          <h1>Employee List</h1>  
          <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <EmployeeRows/>
        </table>
        </div>
        );
    }
}
function mapStateToProps(state) {
    return {
      emps: state.emps
    }
}
export default connect(mapStateToProps)(EmployeeList);