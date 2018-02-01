import React from 'react';
import '../../css/cfapp.css';
import imgs from '../../img/logo_FPO_c.png';
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