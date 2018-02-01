import React from 'react';
import '../../../res_old/css/cfapp.css';
import imgs from '../../../res_old/img/logo_FPO_c.png';
const mmm = `.${imgs}`;
class TestCss extends React.Component {
    render() {
      return (
        <div>
          <button className="small">Click Me</button>
          <button className="largebtun">Click Me</button>
          <img src={mmm}/>
        </div>
      )
    }
  }
  export default TestCss;