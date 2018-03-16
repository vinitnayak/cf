import React from 'react';
import ReactDOM from 'react-dom';
import { Alert,Tooltip} from 'reactstrap';
import JqxGrid from '../../deps/jqwidgets-react/react_jqxgrid.js';
import JqxButton from '../../deps/jqwidgets-react/react_jqxbuttons.js';
import JqxButtonGroup from '../../deps/jqwidgets-react/react_jqxbuttongroup.js';
import { RN_FILTER_PAYROLL_DATA } from '../../base/constants/RenderNames';
import {divStyle,divStyleFirst,divStyleBot,divStyleFirstBot,divStyleR} from '../../base/constants/AppConstants';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UIAlert from '../common/UIAlert';
import UIConfirm from '../common/UIConfirm';
class CompanyTotalGrid extends React.Component {
    constructor(props) {
        super(props);
        let data = this.props.periodicdata
        let source =
            {
                datatype: "json",
                datafields: [
                    { name: 'id', type: 'int' },
                    { name: 'companyname', type: 'string' },
                    { name: 'checkdate', type: 'date' },
                    { name: 'payrolldate', type: 'date' },
                    { name: 'payrollname', type: 'string' },
                    { name: 'grosswages', type: 'float' },
                    { name: 'taxablegrosswages', type: 'float' },
                    { name: 'taxableamount', type: 'float' },
                    { name: 'taxamount', type: 'float' },
                    { name: 'status', type: 'string' }
                ],
                localdata: data

            };
            this.toggleExpExl=this.toggleExpExl.bind(this);
            this.toggleExpCsv=this.toggleExpCsv.bind(this);
            this.toggleSelAll=this.toggleSelAll.bind(this);
            this.toggleRstAll=this.toggleRstAll.bind(this);
            this.togglePstSel=this.togglePstSel.bind(this);
            this.toggleDelSel=this.toggleDelSel.bind(this);
            this.toggleFilDat=this.toggleFilDat.bind(this);
            this.hoverOff=this.hoverOff.bind(this);
            this.hoverOn=this.hoverOn.bind(this);
            this.hideUIAlert=this.hideUIAlert.bind(this);
            this.handleConfirmOk = this.handleConfirmOk.bind(this);
            this.handleConfirmCancel = this.handleConfirmCancel.bind(this);
        this.state = {
            source: source,
            exptoExlTip:false,
            exptoCsvTip:false,
            selectAll:false,
            resetAll:false,
            postSelected:false,
            deleSelected:false,
            filterData:false,
            hover: false,
            showAlert:false,
            aheader:'',
            abody:'',
            abtnlbl:'',
            showConfirm:false,
            cheader:'',
            cbody:''
        };
    }
    hoverOn(){
        this.setState({ hover: true });
    }
    hoverOff(){ 
        this.setState({ hover: false });    
    }
    goToFilterPage() {
        renderCFApplication(appAnchor(), RN_FILTER_PAYROLL_DATA);
    }
    exportToExcel(){
        this.refs.companyTotalGrid.exportdata('xls', 'PeriodicCompanyTotal');
    }
    exportToCsv(){
        this.refs.companyTotalGrid.exportdata('csv', 'PeriodicCompanyTotal');
    }
    selectAllClk(){
        this.refs.companyTotalGrid.selectallrows(); 
    }
    resetAll(){
        this.refs.companyTotalGrid.clearselection();
    }
    postSelected(){
        let selIndexes = this.refs.companyTotalGrid.getselectedrowindexes();
        if(selIndexes.length >0){
            selIndexes.forEach(index => {
                let data = this.refs.companyTotalGrid.getrowdata(index);
                alert('Selected for Post : '+ Object.values(data));
            });
        }else{
            this.showAlert(true,'Delete','Please select at least one payroll record to delete.');
        }
    }
    deleteSelected(){
        let selIndexes = this.refs.companyTotalGrid.getselectedrowindexes();
        if(selIndexes.length >0){
            this.showConfirm(true,'Confirm?', 'Are you sure you want to delete payroll record(s)?');
        }else{
            this.showAlert(true,'Delete','Please select at least one payroll record to delete.');
        }
    }
    showConfirm(cshow, cheader, cbody){
        this.setState({
            showConfirm: cshow,
            cheader:cheader,
            cbody:cbody
        });
    }
    showAlert(ashow,aheader,abody){
        this.setState({
            showAlert: ashow,
            aheader:aheader,
            abody:abody
        });
    }
    toggleExpExl() {
        this.setState({
            exptoExlTip: !this.state.exptoExlTip
        });
    }
    toggleExpCsv() {
        this.setState({
            exptoCsvTip: !this.state.exptoCsvTip
        });
    }
    toggleSelAll(){
        this.setState({
            selectAll: !this.state.selectAll
        });
    }
    toggleRstAll(){
        this.setState({
            resetAll: !this.state.resetAll
        });
    }
    togglePstSel(){
        this.setState({
            postSelected: !this.state.postSelected
        });
    }
    toggleDelSel(){
        this.setState({
            deleSelected: !this.state.deleSelected
        });
    }
    toggleFilDat(){
        this.setState({
            filterData: !this.state.filterData
        }); 
    }
    componentDidMount() {

    }
    hideUIAlert(){
        this.setState({
            showAlert: !this.state.showAlert
        });
    }
    handleConfirmOk(){
        console.log('hideUIConfirmOk');
        this.handleConfirmCancel();
        let selIndexes = this.refs.companyTotalGrid.getselectedrowindexes();
        if(selIndexes.length >0){
            selIndexes.forEach(index => {
                let data = this.refs.companyTotalGrid.getrowdata(index);
                alert('Selected for Delete : '+ Object.values(data));
            });
        }
    }
    handleConfirmCancel(){
        console.log('hideUIConfirmCancel');
        this.setState({
            showConfirm: !this.state.showConfirm
        });
    }
    render() {
        let dataAdapter = new $.jqx.dataAdapter(this.state.source);
        let uiAlert    =   <UIAlert handleClick={this.hideUIAlert}  showAlert={this.state.showAlert} aheader={this.state.aheader} abody={this.state.abody} abtnlbl={'Ok'}/>;
        let uiDelConfirm = <UIConfirm handleOk={this.handleConfirmOk} handleCancel={this.handleConfirmCancel}  showConfirm={this.state.showConfirm} cheader={this.state.cheader} cbody={this.state.cbody} okbtnlbl={'Ok'} cancelbtnlbl={'Cancel'}/>;
        let data = this.props.periodicdata;
        let columns =
            [
                { text: 'Company Name', datafield: 'companyname', width: 'auto', filtertype: 'input'},
                { text: 'Check Date', datafield: 'checkdate', width: 'auto', cellsformat: 'MM-dd-yyyy' ,filtertype: 'range'},
                { text: 'Payroll Run Date/Time', datafield: 'payrolldate', width: 'auto', cellsformat: 'MM-dd-yyyy hh:mm:00 tt', filtertype: 'range' },
                { text: 'Payroll Name', datafield: 'payrollname', width: 'auto',filtertype: 'input'},
                { text: 'Gross Wages', datafield: 'grosswages', align: 'right', cellsalign: 'right', width: 'auto', cellsformat: 'c2',filtertype: 'number' },
                { text: 'Taxable Gross Wages', datafield: 'taxablegrosswages', align: 'right', cellsalign: 'right', width: 'auto', cellsformat: 'c2',filtertype: 'number', },
                { text: 'Taxable Amount', datafield: 'taxableamount', align: 'right', cellsalign: 'right', width: 'auto', cellsformat: 'c2',filtertype: 'number', },
                { text: 'Tax Amount', datafield: 'taxamount', align: 'right', cellsalign: 'right', width: 'auto', cellsformat: 'c2',filtertype: 'number', },
                { text: 'Status', datafield: 'status', align: 'left', cellsalign: 'left', width: 'auto',filtertype: 'checkedlist'}
            ];
        return (
            <div>
                <h1>Maintain Payroll Data 
                    <a href="#" onClick={() => this.goToFilterPage()} id="filterDataId"><i class="fas fa-filter fa-xs" title="Filter Payroll Data"></i></a>
                    <Tooltip placement="right" isOpen={this.state.filterData} target="filterDataId" toggle={this.toggleFilDat}>
                    Filter Payroll Data
                    </Tooltip>
                </h1>
                <Alert color="primary">
                    {data.filterlabel}
                </Alert>
                <a href="#"  style={divStyleFirst}  onClick={() => this.selectAllClk()} id="selectAllid"><i class='fas fa-check-square fa-lg'></i></a>
                <Tooltip placement="top" isOpen={this.state.selectAll} target="selectAllid" toggle={this.toggleSelAll}>
                    Select All
                </Tooltip>
                <a href="#"  style={divStyle} onClick={() => this.resetAll()} id="resetAll"><i class='fas fa-redo-alt fa-lg'></i></a>
                <Tooltip placement="right" isOpen={this.state.resetAll} target="resetAll" toggle={this.toggleRstAll}>
                    Reset Selection
                </Tooltip>
                <a href="#" style={divStyleR} onClick={() => this.deleteSelected()} id="deleteSelected"><i class='fas fa-minus-square fa-lg'></i></a>
                <Tooltip placement="top" isOpen={this.state.deleSelected} target="deleteSelected" toggle={this.toggleDelSel}>
                    Delete Selected
                </Tooltip> 
                <a href="#" style={divStyleR} onClick={() => this.postSelected()} id="postSelected"><i class='fas fa-envelope-square fa-lg'></i></a>
                <Tooltip placement="right" isOpen={this.state.postSelected} target="postSelected" toggle={this.togglePstSel}>
                    Post Selected
                </Tooltip>
                <JqxGrid ref='companyTotalGrid'
                    width={'100%'} source={dataAdapter} pageable={true}
                    sortable={false} altrows={false} enabletooltips={false}
                    autoheight={true} editable={false} columns={columns}
                    filterable={true} showfilterrow={true}
                    theme={'energyblue'}
                    selectionmode={'multiplerowsextended'}/>
                <a href="#"  style={divStyleFirstBot} onClick={() => this.exportToExcel()} id="exportToExcel"><i class='fas fa-table fa-lg'></i></a>
                <Tooltip placement="bottom" isOpen={this.state.exptoExlTip} target="exportToExcel" toggle={this.toggleExpExl}>
                    Export To Excel
                </Tooltip>
                <a href="#"  style={divStyleBot} onClick={() => this.exportToCsv()} id="exportToCsv"><i class='fas fa-pen-square fa-lg'></i></a>
                <Tooltip placement="right" isOpen={this.state.exptoCsvTip} target="exportToCsv" toggle={this.toggleExpCsv}>
                    Export To CSV
                </Tooltip>
                {uiAlert}
                {uiDelConfirm}
            </div>
        );
    }
}
export default CompanyTotalGrid;