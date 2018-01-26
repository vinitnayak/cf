//import React, {PropTypes,Component} from 'react';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteEmployee} from './employeeAction';

class EmployeeRow extends Component {
  constructor(props){
    super(props);
  }
  handleRemove(emp){
    console.log('fffff'+emp.id);
    console.log(this.props.emps);
    //this.props.actions.deleteEmployee(emp);
    this.props.deleteEmployee(emp);
   
  } 
  renderEmps(emps){
    if(emps && emps.length >0){
    return emps.map((emp, key) =>{
      return(
        <tr key={emp.id}>
        <td>{emp.id}</td>
        <td>{emp.first_name}</td>
        <td>{emp.last_name}</td>
        <td>{emp.email}</td>
        <td><button
          className="btn btn-default"
          onClick={() => this.handleRemove(emp)}>Delete me!</button></td>
        </tr>
      )
    })
  }else{
    return(<tbody><tr><td>Loading..</td></tr></tbody>);
  }
 }
  render(){
    return (<tbody>
    {this.renderEmps(this.props.emps)}
    </tbody>)
  }
};
EmployeeRow.propTypes = {
  emps: PropTypes.array.isRequired
};
function mapStateToProps(state) {
  return {
    emps: state.emps
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({deleteEmployee}, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(EmployeeRow);
