import React from 'react';
import ReactDOM from 'react-dom';
import {Alert, Modal, ModalHeader, ModalBody, ModalFooter, Button, ButtonGroup,Tooltip} from 'reactstrap';
import JqxGrid from '../../deps/jqwidgets-react/react_jqxgrid.js';
import JqxButton from '../../deps/jqwidgets-react/react_jqxbuttons.js';
import JqxButtonGroup from '../../deps/jqwidgets-react/react_jqxbuttongroup.js';
import { RN_FILTER_PAYROLL_DATA } from '../../base/constants/RenderNames';
import PeriodicPayrollRecordForm from './PeriodicPayrollRecordForm';
import AddPayrollSubmit from "./AddPayrollSubmit";
import { submit } from 'redux-form'
import {divStyle,divStyleFirst,divStyleBot,divStyleFirstBot,divStyleR} from '../../base/constants/AppConstants';
import UIAlert from '../common/UIAlert';
class AuthTaxTypeTotalGrid extends React.Component {
    constructor(props) {
        super(props);
        let data = this.props.periodicdata;
        let source =
            {
                datatype: "json",
                datafields: [
                    { name: 'id', type: 'int' },
                    { name: 'companyname', type: 'string' },
                    { name: 'checkdate', type: 'date' },
                    { name: 'payrolldate', type: 'date' },
                    { name: 'payrollname', type: 'string' },
                    { name: 'taxcode', type: 'string' },
                    { name: 'authname', type: 'string' },
                    { name: 'taxname', type: 'string' },
                    { name: 'rescode', type: 'string' },
                    { name: 'payrollsource', type: 'string' },
                    { name: 'grosswages', type: 'float' },
                    { name: 'taxablegrosswages', type: 'float' },
                    { name: 'taxableamount', type: 'float' },
                    { name: 'taxamount', type: 'float' },
                    { name: 'status', type: 'string' }
                ],
                localdata: data

            };
        this.state = {
            source: source,
            backdrop: 'static',
            showAddPayrollRecordModal: false,
            addSuccess:false,
            selectAll:false,
            resetAll:false,
            exptoExlTip:false,
            exptoCsvTip:false,
            postSelected:false,
            deleSelected:false,
            addpayroll:false,
            migrated:false,
            received:false,
            showAlert:false,
            aheader:'',
            abody:'',
            abtnlbl:''
        };
        this.toggleAddPayrollRecordModal = this.toggleAddPayrollRecordModal.bind(this);
        this.toggleSuccess = this.toggleSuccess.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleSelAllAuth=this.toggleSelAllAuth.bind(this);
        this.toggleRstAllAuth=this.toggleRstAllAuth.bind(this);
        this.toggleExpExlAuth=this.toggleExpExlAuth.bind(this);
        this.toggleExpCsvAuth=this.toggleExpCsvAuth.bind(this);
        this.togglePstSel=this.togglePstSel.bind(this);
        this.toggleDelSel=this.toggleDelSel.bind(this);
        this.togglePrcRec=this.togglePrcRec.bind(this);
        this.togglePrcMig=this.togglePrcMig.bind(this);
        this.toggleAddPrl=this.toggleAddPrl.bind(this);
        this.hideUIAlert=this.hideUIAlert.bind(this);
    }
    goToFilterPage() {
        renderCFApplication(appAnchor(), RN_FILTER_PAYROLL_DATA);
    }
    processReceived(){
        let selIndexes = this.refs.authTaxTypeTotalGrid.getselectedrowindexes();
        if(selIndexes.length >0){
            selIndexes.forEach(index => {
                let data = this.refs.authTaxTypeTotalGrid.getrowdata(index);
                alert('Selected for Mark as Received : '+ Object.values(data));
            });
        }else{
            this.setState({
                showAlert: !this.state.showAlert,
                aheader:'Received',
                abody:'Please select at least one payroll record to mark as received.'
            });
        }
    }
    processMigrated(){
        let selIndexes = this.refs.authTaxTypeTotalGrid.getselectedrowindexes();
        if(selIndexes.length >0){
            selIndexes.forEach(index => {
                let data = this.refs.authTaxTypeTotalGrid.getrowdata(index);
                alert('Selected for Mark as Migrated : '+ Object.values(data));
            });
        }else{
            this.setState({
                showAlert: !this.state.showAlert,
                aheader:'Migrate',
                abody:'Please select at least one payroll record to migrate.'
            });
        }
    }
    addPeriodicPayrollRec(){
        this.toggleAddPayrollRecordModal();
    }
    togglePrcRec(){
        this.setState({
            received: !this.state.received
        });
    }
    togglePrcMig(){
        this.setState({
            migrated: !this.state.migrated
        });
    }
    toggleAddPrl(){
        this.setState({
            addpayroll: !this.state.addpayroll
        });
    }
    toggleSuccess(){
        this.setState({
            addSuccess: !this.state.addSuccess
        });
    }
    toggleExpExlAuth() {
        this.setState({
            exptoExlTip: !this.state.exptoExlTip
        });
    }
    toggleExpCsvAuth() {
        this.setState({
            exptoCsvTip: !this.state.exptoCsvTip
        });
    }
    toggleAddPayrollRecordModal() {
        this.setState({
            showAddPayrollRecordModal: !this.state.showAddPayrollRecordModal,
          closeAll: false
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
    postSelected(){
        let selIndexes = this.refs.authTaxTypeTotalGrid.getselectedrowindexes();
        if(selIndexes.length >0){
            selIndexes.forEach(index => {
                let data = this.refs.authTaxTypeTotalGrid.getrowdata(index);
                alert('Selected for Post : '+ Object.values(data));
            });
        }else{
            this.setState({
                showAlert: !this.state.showAlert,
                aheader:'Post',
                abody:'Please select at least one payroll record to post.'
            });
        }
    }
    deleteSelected(){
        let selIndexes = this.refs.authTaxTypeTotalGrid.getselectedrowindexes();
        if(selIndexes.length >0){
            selIndexes.forEach(index => {
                let data = this.refs.authTaxTypeTotalGrid.getrowdata(index);
                alert('Selected for Delete : '+ Object.values(data));
            });
        }else{
            this.setState({
                showAlert: !this.state.showAlert,
                aheader:'Delete',
                abody:'Please select at least one payroll record to delete.'
            });
        }
    }
    hideUIAlert(){
        this.setState({
            showAlert: !this.state.showAlert
        });
    }
    handleSubmit(values) {
        console.log(values);
        values.payrolldate='03/15/2016 02:58:00 PM';
        values.authname='GEORGIA';
        values.taxname='EMPLOYEE UNEMPLOYMENT TAX';
        values.status='Received';
        this.props.actions.addPayrollRecord(values).then(response => {
            this.state.source.localdata=this.props.periodicdata;
            this.refs.authTaxTypeTotalGrid.updatebounddata('data');
            this.refs.authTaxTypeTotalGrid.sortby('id', 'desc');
            this.toggleSuccess();
            this.toggleAddPayrollRecordModal();
            this.interval = setInterval(this.tick.bind(this), 3000);
			return response
		}).catch(error => {
			throw new SubmissionError(error)
		})
    }
    tick(){
        clearInterval(this.interval);
        this.toggleSuccess();
    }
    selectAllClkAuth(){
        this.refs.authTaxTypeTotalGrid.selectallrows(); 
    }
    toggleSelAllAuth(){
        this.setState({
            selectAll: !this.state.selectAll
        });
    }
    resetAllAuth(){
        this.refs.authTaxTypeTotalGrid.clearselection();
        this.setState({
            showAlert: false
        });
    }
    toggleRstAllAuth(){
        this.setState({
            resetAll: !this.state.resetAll
        });
    }
    exportToExcelAuth(){
        this.refs.authTaxTypeTotalGrid.exportdata('xls', 'PeriodicAuthorityTaxTypeTotal');
    }
    exportToCsvAuth(){
        this.refs.authTaxTypeTotalGrid.exportdata('csv', 'PeriodicAuthorityTaxTypeTotal');
    }  
    componentDidMount() {
       
    }
    render() {
        let dataAdapter = new $.jqx.dataAdapter(this.state.source);
        let uiAlert = <UIAlert handleClick={this.hideUIAlert}  showAlert={this.state.showAlert} aheader={this.state.aheader} abody={this.state.abody} abtnlbl={'Ok'}/>;   
        let data = this.props.periodicdata;
        let columns =
            [
                { text: 'Company Name', datafield: 'companyname', width: 'auto',filtertype: 'input'},
                { text: 'Check Date', datafield: 'checkdate', width: 'auto', cellsformat: 'MM-dd-yyyy',filtertype: 'range' },
                { text: 'Payroll Run Date/Time', datafield: 'payrolldate', width: 'auto', cellsformat: 'MM-dd-yyyy hh:mm:00 tt',filtertype: 'range' },
                { text: 'Payroll Name', datafield: 'payrollname', width: 'auto', filtertype: 'input'},
                { text: 'Tax Code', datafield: 'taxcode', width: 'auto', filtertype: 'input'},
                { text: 'Authority Name', datafield: 'authname', width: 'auto', filtertype: 'input'},
                { text: 'Tax Name', datafield: 'taxname', width: 'auto', filtertype: 'input'},
                { text: 'Resident Code', datafield: 'rescode', width: 'auto', filtertype: 'input'},
                { text: 'Payroll Source', datafield: 'payrollsource', width: 'auto' },
                { text: 'Gross Wages', datafield: 'grosswages', align: 'right', cellsalign: 'right', width: 'auto', cellsformat: 'c2',filtertype: 'number'},
                { text: 'Taxable Gross Wages', datafield: 'taxablegrosswages', align: 'right', cellsalign: 'right', width: 'auto', cellsformat: 'c2',filtertype: 'number'},
                { text: 'Taxable Amount', datafield: 'taxableamount', align: 'right', cellsalign: 'right', width: 'auto', cellsformat: 'c2',filtertype: 'number'},
                { text: 'Tax Amount', datafield: 'taxamount', align: 'right', cellsalign: 'right', width: 'auto', cellsformat: 'c2',filtertype: 'number'},
                { text: 'Status', datafield: 'status', align: 'left', cellsalign: 'left', width: 'auto',filtertype: 'checkedlist'}
            ];
        let addPayrollForm = <PeriodicPayrollRecordForm onSubmit={ this.handleSubmit}/>
        return (
            <div>
                <h1>Maintain Payroll Data <a href="#" onClick={() => this.goToFilterPage()}><i class="fas fa-filter fa-xs" title="Filter Payroll Data"></i></a></h1>
                <Alert color="primary">
                    {data.filterlabel}
                </Alert>
                <Alert color="success" isOpen={this.state.addSuccess}>
                    Periodic Payroll Record Successfully Added!
                </Alert>
                
                    <a href="#"  style={divStyleFirst}  onClick={() => this.selectAllClkAuth()} id="selectAllBtn"><i class='fas fa-check-square fa-lg'></i></a>
                    <Tooltip placement="top" isOpen={this.state.selectAll} target="selectAllBtn" toggle={this.toggleSelAllAuth}>
                        Select All
                    </Tooltip>
                    <a href="#"  style={divStyle} onClick={() => this.resetAllAuth()} id="resetBtn"><i class='fas fa-redo-alt fa-lg'></i></a>
                    <Tooltip placement="right" isOpen={this.state.resetAll} target="resetBtn" toggle={this.toggleRstAllAuth}>
                        Reset Selection
                    </Tooltip>
                    
                    <a href="#" style={divStyleR} onClick={() => this.addPeriodicPayrollRec()} id="addPeriodicPayrollRec"><i class='fas fa-plus-circle fa-lg'></i></a>
                    <Tooltip placement="top" isOpen={this.state.addpayroll} target="addPeriodicPayrollRec" toggle={this.toggleAddPrl}>
                        Add Payroll Record
                    </Tooltip>
                    <a href="#" style={divStyleR} onClick={() => this.processMigrated()} id="processMigrated"><i class='fab fa-mix fa-lg'></i></a>
                    <Tooltip placement="bottom" isOpen={this.state.migrated} target="processMigrated" toggle={this.togglePrcMig}>
                        Mark as Migrated
                    </Tooltip>
                    <a href="#" style={divStyleR} onClick={() => this.processReceived()} id="processReceived"><i class='fas fa-registered fa-lg'></i></a>
                    <Tooltip placement="top" isOpen={this.state.received} target="processReceived" toggle={this.togglePrcRec}>
                         Mark as Received
                    </Tooltip>
                    <a href="#" style={divStyleR} onClick={() => this.deleteSelected()} id="processDelete"><i class='fas fa-minus-square fa-lg'></i></a>
                    <Tooltip placement="bottom" isOpen={this.state.deleSelected} target="processDelete" toggle={this.toggleDelSel}>
                        Delete Selected
                    </Tooltip> 
                    <a href="#" style={divStyleR} onClick={() => this.postSelected()} id="processPost"><i class='fas fa-envelope-square fa-lg'></i></a>
                    <Tooltip placement="left" isOpen={this.state.postSelected} target="processPost" toggle={this.togglePstSel}>
                        Post Selected
                    </Tooltip>
                
                <Modal size="lg" isOpen={this.state.showAddPayrollRecordModal} toggle={this.toggleAddPayrollRecordModal} backdrop={this.state.backdrop}>
				<ModalHeader toggle={this.toggleAddPayrollRecordModal} >Add Payroll Record</ModalHeader>
				<ModalBody>
					{addPayrollForm}
				</ModalBody>
				<ModalFooter>
                    <Button color="secondary" className="btn btn-primary mr-auto" onClick={this.toggleAddPayrollRecordModal}>Cancel</Button>
                    <AddPayrollSubmit ref="mySubmit"/>
  				</ModalFooter>
			    </Modal>
                <JqxGrid ref='authTaxTypeTotalGrid'
                    width={'100%'} source={dataAdapter} pageable={true}
                    sortable={false} altrows={false} enabletooltips={false}
                    autoheight={true} editable={false} columns={columns}
                    filterable={true} showfilterrow={true}
                    columnsresize={true} selectionmode={'multiplerowsextended'}/>
                    
                <a href="#"  style={divStyleFirstBot} onClick={() => this.exportToExcelAuth()} id="exportToExcelAuth"><i class='fas fa-table fa-lg'></i></a>
                <Tooltip placement="bottom" isOpen={this.state.exptoExlTip} target="exportToExcelAuth" toggle={this.toggleExpExlAuth}>
                    Export To Excel
                </Tooltip>
                <a href="#"  style={divStyleBot} onClick={() => this.exportToCsvAuth()} id="exportToCsvAuth"><i class='fas fa-pen-square fa-lg'></i></a>
                <Tooltip placement="right" isOpen={this.state.exptoCsvTip} target="exportToCsvAuth" toggle={this.toggleExpCsvAuth}>
                    Export To CSV
                </Tooltip> 
                {uiAlert}
            </div>
        );
    }
}
export default AuthTaxTypeTotalGrid;