import React from 'react';
import JqxDateTimeInput from '../jqwidgets-react/react_jqxdatetimeinput.js';
class DtTimeInputJq extends React.Component {
   render() {
      return (
         <div>
           <JqxDateTimeInput width={200} height={30} />
          </div>
      );
    }
}
export default DtTimeInputJq;