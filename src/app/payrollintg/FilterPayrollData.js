import React from 'react';
class FilterPayrollData extends React.Component {
   render() {
      return (
         <div>
         <h1>Filter Payroll Data</h1>              
         <div class="jumbotron">
            <form>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Select File Tpye</label>
                    <div class="col-sm-10">
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-info">Periodic</button>
                            <button type="button" class="btn btn-primary">Quarterly</button>
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Select Payroll By</label>
                    <div class="col-sm-10">
                    <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked/>
                        Check Date
                    </label>
                    </div>
                    <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2"/>
                        Payroll Run Date
                    </label>
                    </div>
                    </div>
                </div>
                <div class="form-group row">
                <label for="example-datetime-local-input" class="col-2 col-form-label">From Date</label>
                <div class="col-5">
                    <input class="form-control" type="date" value="2011-08-19" id="example-date-local-input"/>
                </div>
                </div>
                <div class="form-group row">
                <label for="example-date-input" class="col-2 col-form-label">To Date</label>
                <div class="col-5">
                    <input class="form-control" type="date" value="2011-08-19" id="example-date-input"/>
                </div>
                </div>
                <div class="form-group row">
                <div class="col-2">&nbsp;</div>
                <div class="col-5">
                 <button type="submit" class="btn btn-success">View Payroll Data</button>
                </div>
                </div>
                </form>
         </div>
         </div>
      );
    }
}
export default FilterPayrollData;