import React from 'react'
import { Field, reduxForm } from 'redux-form'
import ReactDOM from 'react-dom';



class Mpd extends React.Component {
constructor(props) {
  super(props)
  this.state = ({periodic: false,quarterly:false,selectedOption: 'option1'})
  this.toggle = this.toggle.bind(this)
  this.handleOptionChange = this.handleOptionChange.bind(this)
}
handleOptionChange(changeEvent) {

  this.setState({
    selectedOption: changeEvent.target.value
  });
}
toggle() {
  console.log(this.state.periodic)
  
}
render(){
    return (
    
    <div  >
        <h3>Maintain Payroll Data</h3>
        <label>Select File Type:</label>
        <div class="btn-group">
        <button type="button" class="btn btn-primary " data-toggle="collapse" data-target="#periodic">
        Periodic
       </button>
       <button type="button" class="btn btn-primary  " data-toggle="collapse" data-target="#quarterly">
        Quarterly
       </button>
       </div>
       <br/>
       <div id="periodic" class="btn-group collapse " >
	   <button type="button" class="btn btn-primary  " data-toggle="toggle">
       Company
      </button>
      <button type="button" class="btn btn-primary  " data-toggle="toggle" >
       Authority
      </button>
	
        </div>
        <div id="quarterly" class="btn-group collapse " >
        <button type="button" class="btn btn-primary " data-toggle="toggle">
       Quarterly1
      </button>
	   <button type="button" class="btn btn-primary  " data-toggle="toggle">
       Quarterly2
      </button>
     
      <button type="button" class="btn btn-primary " data-toggle="toggle" >
      Quarterly3
      </button>
	
        </div>
      
      <div/>
      <div >
      <label>Select Payroll By:</label>
      <label>
        <input type="radio"  value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange} />
        Check Date
      </label>
      <label>
        <input type="radio"   value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange} />
        Payroll Run Date
      </label>
      </div>
      <div class="form-group"  >
      
      <label>From Date:</label>
      <div class="container">
    
    <div class='col-sm-2'>
           
                <div class='input-group date' id='datetimepicker1'>
                    <input type='text' class="form-control" />
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>
        
      
      
</div>
      </div>
      <div class="form-group" >
      <label>To Date:</label>
    
      <div class="container">
      <div class='col-sm-2'>
             
                  <div class='input-group date' id='datetimepicker1'>
                      <input type='text' class="form-control" />
                      <span class="input-group-addon">
                          <span class="glyphicon glyphicon-calendar"></span>
                      </span>
                  </div>
              
          </div>
        
        
  </div>
    
      </div>
      <button type="submit" className="btn btn-primary ">Use Default Values</button>
      <button type="submit" className="btn btn-primary ">View Selected</button>
      <button type="submit" className="btn btn-primary">Add Periodic Data</button>
     
      
      </div>
    
     
      
      )
      const divStyle = {
        backgroundColor:'#00e64d'
      };
      }
    
  

  

  
}
export default Mpd;