import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../deps/jqwidgets-react/react_jqxgrid.js';

class ImportGridComponentx extends React.Component {
    constructor(props) {
        super(props);
        console.log('this.props.importdata');
        console.log(this.props.importdata);
        let source =
        {
            datatype: "json",
            datafields: [
                { name: 'id', type: 'int' },
                { name: 'custid', type: 'string' },
                { name: 'importdt', type: 'timestamp' },
                { name: 'importtm', type: 'timestamp' },
                { name: 'type', type: 'string' },
                { name: 'importdata', type: 'string' },
                { name: 'filename', type: 'string' }
            ],
            localdata:this.props.importdata
           
        };
        this.state = {
            source: source
        };
    }

    componentDidMount() {
       //console.log(this.refs.importGrid);
    }
    componentDidUpdate(){
        console.log(this.refs.importGrid);
        console.log(this.props.importdata);
        this.state.source.localdata=this.props.importdata;
        this.refs.importGrid.updatebounddata();
    }
    
    render() {
        const deleteImport = (id)=>{
        console.log(id);
          //alert(this.refs.importGrid.getrowdata(id));
        }
        let dataAdapter = new $.jqx.dataAdapter(this.state.source);

        let columns =
        [
            { text: 'Import Id', datafield: 'id', width: '13%' },
            { text: 'Cust Id', datafield: 'custid', width: '20%' },
            { text: 'File Name', datafield: 'filename', align: 'left', cellsalign: 'left', width: '25%' },
            { text: 'Import Date',  datafield: 'importdt', cellsalign: 'left', align: 'left', width: '25%' },
            { text: 'Import Time', datafield: 'importtm', align: 'left', cellsalign: 'left', width: '25%' },
            { text: 'Type', datafield: 'type', align: 'left', cellsalign: 'left', width: '25%' },
            { text: 'Import Data', datafield: 'importdata', align: 'left', cellsalign: 'left', width: '25%' },
           
            { text: '          ', datafield: 'Delete', columntype: 'button', cellsrenderer: function () {
                return "Delete";
               }, buttonclick: function (rowdata) {
                    deleteImport(rowdata);
               }
               }
        ];

         return (
                <JqxGrid ref='importGrid'
                    width={'100%'} source={dataAdapter} pageable={true}
                    sortable={true} altrows={true} enabletooltips={true}
                    autoheight={true} editable={true} columns={columns}
                    selectionmode={'multiplecellsadvanced'}
                />
            );
    }
}
export default ImportGridComponentx;