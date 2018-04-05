import React from 'react';
import ReactDOM from 'react-dom';
import JqxChart from '../../deps/jqwidgets-react/react_jqxchart.js';
import {divPrnStyle} from '../../base/constants/AppConstants';
import {Tooltip} from 'reactstrap';
class VarianceChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            printtt: false
        }
        this.togglePrint=this.togglePrint.bind(this);
    }
    togglePrint() {
        this.setState({
            printtt: !this.state.printtt
        });
    }
    printMe(){
        let content = window.document.getElementsByClassName('varianceChart')[0].outerHTML;
        let newWindow = window.open('', '', 'width=800, height=500'),
            document = newWindow.document.open(),
            pageContent =
                '<!DOCTYPE html>' +
                '<html>' +
                '<head>' +
                '<meta charset="utf-8" />' +
                '<title>Variance data by Authority/Tax Type</title>' +
                '</head>' +
                '<body>' + content + '</body></html>';
        try {
            document.write(pageContent);
            document.close();
            newWindow.print();
            newWindow.close();
        }
        catch (error) {
        }
    }
    render() {
        let variancechartdata = this.props.variancechartdata;
        let source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'authttype' },
                    { name: 'variance' }
                ],
                localdata: variancechartdata
            };
           // let dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + source.url + '" : ' + error); } });
            let dataAdapter = new $.jqx.dataAdapter(source);
            let legendLayout = { left: 0, top: 0, width: 300, height: 200, flow: 'vertical' };
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
                                dataField: 'variance',
                                displayText: 'authttype',
                                labelRadius: 170,
                                initialAngle: 15,
                                centerOffset: 0,
                                formatFunction: (value) => {
                                    if (isNaN(value))
                                        return value;
                                    return parseFloat(value);
                                },
                            }
                        ]
                    }
                ];
            return (
                <div class="h-100 w-100">
                <JqxChart style={{ width: '100%', height: 500 }}
                    className='varianceChart'
                    title={'Variance Data For Bailey\'s Baskets - Kronos'} description={'Variance data by Authority/Tax Type'}
                    showLegend={true} enableAnimations={true} padding={padding} showBorderLine={false}
                    titlePadding={titlePadding} source={dataAdapter} legendLayout={legendLayout}
                    colorScheme={'scheme02'} seriesGroups={seriesGroups}
                />
                <a href="#"  style={divPrnStyle} onClick={() => this.printMe()} id="vprintid"> <i class="fas fa-print"></i></a>
                <Tooltip placement="left" isOpen={this.state.printtt} target="vprintid" toggle={this.togglePrint}>
                    Print Variance Data Chart
                </Tooltip>
                </div>
            )
    }
}
export default VarianceChart