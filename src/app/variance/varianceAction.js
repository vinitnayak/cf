import * as types from '../../base/constants/ActionTypes'
import varianceApi from './varianceAPI';
export function loadVarianceChartDataSuccess(variancechartdata) {
    return {type:types.LOAD_VARIANCECHART_DATA_SUCCESS, variancechartdata};
}
export function loadVarianceChartData() {
    return function(dispatch,getState) {
        const state = getState();
        return varianceApi.getVarianceChartData(state.appconf.SVCS_CONTEXT_URL).then(variancechartdata => {
        dispatch(loadVarianceChartDataSuccess(variancechartdata));
        }).catch(error => {
        throw(error);
        });
    };
}