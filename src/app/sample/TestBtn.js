import React from 'react';
class TestBtn extends React.Component {
   handleRemove(){
       alert('you clicked me');
   }
   render() {
      return (
         <div>
           <button className="btn btn-default" onClick={() => this.handleRemove()}>Delete me!</button>
         </div>
      );
    }
}
export default TestBtn;