import React from 'react';
import ReactDOM from 'react-dom';
import JqxChart from '../../deps/jqwidgets-react/react_jqxchart.js';
class VarianceChart extends React.Component {
    render() {
        let variancechartdata = this.props.variancechartdata;
        let source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'Browser' },
                    { name: 'Share' }
                ],
                localdata: variancechartdata
            };
           // let dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + source.url + '" : ' + error); } });
            let dataAdapter = new $.jqx.dataAdapter(source);
            let legendLayout = { left: 700, top: 160, width: 300, height: 200, flow: 'vertical' };
            let padding = { left: 5, top: 5, right: 5, bottom: 5 };
            let titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };
            let seriesGroups =
                [
                    {
                        type: 'pie',
                        showLabels: true,
                        series:
                        [
                            {
                                dataField: 'Share',
                                displayText: 'Browser',
                                labelRadius: 170,
                                initialAngle: 15,
                                radius: 145,
                                centerOffset: 0,
                                formatFunction: (value) => {
                                    if (isNaN(value))
                                        return value;
                                    return parseFloat(value) + '%';
                                },
                            }
                        ]
                    }
                ];
            return (
                <JqxChart style={{ width: 850, height: 500 }}
                    title={'Variance Data'} description={'Browser variance data by browser share'}
                    showLegend={true} enableAnimations={true} padding={padding} showBorderLine={true}
                    titlePadding={titlePadding} source={dataAdapter} legendLayout={legendLayout}
                    colorScheme={'scheme02'} seriesGroups={seriesGroups}
                />
            )
    }
}
export default VarianceChart