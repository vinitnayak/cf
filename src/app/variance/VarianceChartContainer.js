import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import VarianceChart from './VarianceChart';

class VarianceChartContainer extends Component {
    
    renderVarianceChart(variancechartdata){
        if(variancechartdata && variancechartdata.length >0){
            return(
                <VarianceChart variancechartdata={variancechartdata}/>
            )
        }else{
            return(<div>Loading Monthly Chart</div>);
        }
    }
    render(){
        return (
        <div>
            {this.renderVarianceChart(this.props.variancechartdata)}
        </div>
        )
    }
};
VarianceChartContainer.propTypes = {
    variancechartdata: PropTypes.array.isRequired
};
function mapStateToProps(state) {
  return {
    variancechartdata: state.variancechartdata
  }
}
export default connect(mapStateToProps)(VarianceChartContainer);