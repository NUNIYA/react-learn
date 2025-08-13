
import React, { Component } from 'react';

class  Counter extends Component {
   state={
    count:0,
   
   }; 
 
   render() { 
    let classes=" badge m-2 badge-"
    classes += (this.state.count==0) ? "warning" : "primary";
    return ( 
        <div>
            <span  className={classes}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
        </div>
    );
}

    formatCount(){
        const { count }=this.state;
        return count==0 ? "zero":count;//use destructuring Pulls count directly from this.state
      //return this.state.count==0 ?'zero':this.state.count  
    }

}
 
export default Counter;//or u could use this statment on top before class to export it at same time
