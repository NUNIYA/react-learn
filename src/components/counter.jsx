
import React, { Component } from 'react';

class  Counter extends Component {
   state={
    count:0

   }; 
   render() { 
    return ( 
        <React.Fragment>
            <span>{this.formatCount()}</span>
            <button>Increment</button>
        </React.Fragment>
    );
}

    formatCount(){
        const { count }=this.state;
        return count==0 ? "zero":count;//use destructuring Pulls count directly from this.state
      //return this.state.count==0 ?'zero':this.state.count  
    }

}
 
export default Counter;//or u could use this statment on top before class to export it at same time
