import React from 'react';
import ReactDOM from 'react-dom';
import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';
import * as svcs from '../../constants/ServiceUrls';

class Jqgridtest extends React.Component {
    render() {
        let source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'first_name', type: 'string' },
                    { name: 'last_name', type: 'string' },
                    { name: 'email', type: 'string' }
                ],
                url: svcs.EMPLOYEES_URL
            };
        
        let dataAdapter = new $.jqx.dataAdapter(source);
        
        let columns =
            [
                { text: 'First Name', datafield: 'first_name', width: '33%' },
                { text: 'Last Name',  datafield: 'last_name', cellsalign: 'right', align: 'right', width: '33%' },
                { text: 'Email', datafield: 'email', align: 'right', cellsalign: 'right', cellsformat: 'c2', width: '34%' }
            ];
        return (
            <JqxGrid
                width={'100%'} source={dataAdapter} pageable={true}
                sortable={true} altrows={true} enabletooltips={true}
                autoheight={true} editable={true} columns={columns}
                selectionmode={'multiplecellsadvanced'}
            />
        );
    }
}
export default Jqgridtest;