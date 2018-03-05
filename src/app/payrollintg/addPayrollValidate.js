const addPayrollValidate = values => {
    const errors = {}
    if (!values.payrollid) {
      errors.payrollid = 'Payroll Id is required!'
    }
    return errors
  }
  export default addPayrollValidate