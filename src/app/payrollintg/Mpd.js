import React from 'react'
import { Field, reduxForm } from 'redux-form'
import ReactDOM from 'react-dom';
import { Button, ButtonGroup, Collapse } from 'react-bootstrap';




class Mpd extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({ periodic: false, quarterly: false, selectedOption: 'option1' })
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
  render() {
    let divStyle = {
      float: 'right', width: 310
    };
    return (

      <div className="container" style={{ width: 500 }}>
        <h3>Maintain Payroll Data</h3>
        <div>
          <label>Select File Type:</label>

          <div class="form-group " style={divStyle} >
            <ButtonGroup
              type="checkbox"
              onChange={this.toggle}

            >
              <Button className="btn btn-primary" value={'Periodic'} onClick={() => this.setState({ periodic: !this.state.periodic, quarterly: false })} >Periodic</Button>
              <Button className="btn btn-primary" style={{ float: 'left', marginLeft: 4 }} value={'Quarterly'} onClick={() => this.setState({ periodic: false, quarterly: !this.state.quarterly })}>Quarterly</Button>
            </ButtonGroup>
            <br />
          </div>

          <Collapse in={this.state.periodic} >
            <div class="form-group " style={divStyle} >

              <ButtonGroup
                type="checkbox"
              >
                <Button value={'Company'} className="btn btn-primary" >Company</Button>
                <Button value={'Authority'} style={{ float: 'left', marginLeft: 4 }} className="btn btn-primary">Authority</Button>
              </ButtonGroup>
            </div>
          </Collapse>

          <Collapse in={this.state.quarterly} >
            <div class="form-group "style={divStyle}>
              <ButtonGroup
                type="checkbox"
              >
                <Button value={'quarter1'} className="btn btn-primary">Quarter1</Button>
                <Button value={'quarter2'} className="btn btn-primary" style={{ float: 'left', marginLeft: 4 }}>Quarter2</Button>
                <Button value={'quarter3'} className="btn btn-primary" style={{ float: 'left', marginLeft: 4 }}>Quarter3</Button>
              </ButtonGroup>
            </div>
          </Collapse>
        </div>
        <br />
        <br />
        <div />
        <div class="form-group " >
          <label>Select Payroll By:</label>
          <div style={divStyle}>
            <label>
              <input type="radio" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange} />
              Check Date
          </label>
            <label>
              <input type="radio" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange} />
              Payroll Run Date
      </label>
          </div>
        </div>
        <div class="form-group " >
          <label>From Date:</label>
          <div style={{ float: 'right', width: 240, marginRight: 100 }}>
            <div className='input-group ' id='datetimepicker1' >
              <input type='date' className="form-control" />
              <span className="input-group-addon">
                <span className="glyphicon glyphicon-calendar"></span>
              </span>
            </div>
          </div>
        </div>

        <div class="form-group ">
          <label>To Date:</label>
          <div style={{ float: 'right', width: 240, marginRight: 100 }}>
            <div className='input-group ' id='datetimepicker1'  >
              <input type='date' className="form-control" />
              <span className="input-group-addon">
                <span className="glyphicon glyphicon-calendar"></span>
              </span>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div class="form-group">
          <button type="submit" style={{ float: 'left' }} className="btn btn-primary btn-sm ">Use Default Values</button>
          <button type="submit" style={{ float: 'left', marginLeft: 4 }} className="btn btn-primary btn-sm ">View Selected</button>
          <button type="submit" style={{ float: 'left', marginLeft: 4 }} className="btn btn-primary btn-sm">Add Periodic Data</button>
        </div>

      </div>



    )

  }






}
export default Mpd;