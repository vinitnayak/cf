import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../deps/jqwidgets-react/react_jqxgrid.js';
import JqxButton from '../../deps/jqwidgets-react/react_jqxbuttons.js';
import JqxCheckBox from '../../deps/jqwidgets-react/react_jqxcheckbox.js';
import JqxPanel from '../../deps/jqwidgets-react/react_jqxpanel.js';
import JqxButtonGroup from '../../deps/jqwidgets-react/react_jqxbuttongroup.js';


class PeriodicByAuthorityGrid extends React.Component {
    constructor(props) {
        super(props);
        console.log('this.props.importdata');
        console.log(this.props.importdata);
        let source =
        {
            datatype: 'array',
            datafields: [
                { name: 'companyname', type: 'string' },
                { name: 'checkdate', type: 'date' },
                { name: 'rundate', type: 'date' },
                { name: 'payrollname', type: 'string' },
                { name: 'taxcode', type: 'string' },
                { name: 'authorityname', type: 'string' },
                { name: 'taxname', type: 'string' },
                { name: 'residentcode', type: 'string' },
                { name: 'payrollsource', type: 'string' },
                { name: 'grosswages', type: 'number' },
                { name: 'taxgrosswages', type: 'number' },
                { name: 'taxableamt', type: 'number' },
                { name: 'taxamt', type: 'number' },
                { name: 'status', type: 'string' }
                    
            ],
            localdata: this.props.importdata
        };
        this.state = {
            source: source
        };
    }

    componentDidMount() {
        this.refs.Button.on('click', () => {
            this.refs.Grid.clearfilters();
        });
    }
  
    
    render() {
        let marginFloat = { float: 'left', marginLeft: 4 }; 
        const deleteImport = (id)=>{
        console.log(id);
          alert(this.refs.myGrid.getrowdata(id));
        }
        let dataAdapter = new $.jqx.dataAdapter(this.state.source);

        let columns =
        [
            { text: 'Company Name', datafield: 'companyname', filtertype: 'list', width: '20%' },
            { text: 'Check Date', datafield: 'checkdate',filtertype: 'list',cellsformat: 'MM-dd-yyyy', width: '20%' },
            { text: 'Payroll RunDate/Time', datafield: 'rundate', filtertype: 'list', cellsformat: 'MM-dd-yyyy', align: 'left', cellsalign: 'left', width: '25%' },
            { text: 'Payroll Name',  datafield: 'payrollname',filtertype: 'list', cellsalign: 'left', align: 'left', width: '25%' },
            { text: 'Tax Code',  datafield: 'taxcode',filtertype: 'list', cellsalign: 'left', align: 'left', width: '25%' },
            { text: 'Authority Name',  datafield: 'authorityname',filtertype: 'list', cellsalign: 'left', align: 'left', width: '25%' },
            { text: 'Tax Name',  datafield: 'taxname',filtertype: 'list', cellsalign: 'left', align: 'left', width: '25%' },
            { text: 'Resident Code',  datafield: 'residentcode',filtertype: 'list', cellsalign: 'left', align: 'left', width: '25%' },
           { text: 'Payroll Source',  datafield: 'payrollsource', cellsalign: 'left', align: 'left', width: '25%' },
            { text: 'Gross Wages', datafield: 'grosswages', align: 'left', cellsalign: 'left', width: '25%' },
            { text: 'Taxable Gross Wages', datafield: 'taxgrosswages', align: 'left', cellsalign: 'left', width: '25%' },
            { text: 'Taxable Amt', datafield: 'taxableamt', align: 'left', cellsalign: 'left', width: '25%' },
            { text: 'Tax Amt', datafield: 'taxamt', align: 'left', cellsalign: 'left', width: '25%' },
            { text: 'Status', datafield: 'status', filtertype: 'list', align: 'left', cellsalign: 'left', width: '13%' }
          
        ];

         return (
            <div className="cBox boxTools col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                <div >
                
                
                <JqxButton value='Select All' template={'primary'} width={100}  style={{ float: 'left' }} />
                <JqxButton value='XLS' template={'primary'} width={60} style={marginFloat} />
                <JqxButton value='CSV'  template={'primary'} width={60} style={marginFloat}  />
                <JqxButton value='Post'  template={'primary'} width={60} style={marginFloat}  />
                <JqxButton value='Delete'  template={'primary'} width={60} style={marginFloat}  /> 
                <JqxButton value='MarkAsMigrated'  template={'primary'} width={120} height={25}style={marginFloat}  />
                <JqxButton value='MarkAsReceived'  template={'primary'} width={120}  height={25}style={marginFloat}  /> 
                <JqxButton ref='Button' value='Reset'  template={'primary'} width={60}  style={{float: 'right', marginRight: 5 }} />  
            </div>
            <br/>
            <div>
            
            <label >Periodic Authority Data by checkDate through 01/01/2018 to 01/03/2018</label>
		        
              
            <JqxGrid ref='myGrid'
              
                    width={'100%'} source={dataAdapter} pageable={true}
                    sortable={true} altrows={true} enabletooltips={true}
                    autoheight={true}  columns={columns}
                    selectionmode={'multiplecellsadvanced'} filterable={true} showfilterrow={true} a
                    theme={ 'energyblue'} verticalscrollbarstep={200}
                />
               </div> 
               <div>
               <a href="#" onClick={this.click} style={{float: 'right', marginRight: 5 }}><span className="nav-label"><i className="far fa-eject"></i>Back</span></a>
                   </div>
              
                </div>
            );
    }
}
export default PeriodicByAuthorityGrid;