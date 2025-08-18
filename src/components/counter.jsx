
import React, { Component } from 'react';

class  Counter extends Component {
   state={
    count:0,
    tags:[]
   
   }; 

   constructor(){
    super();
    this.handleIncrement=this.handleIncrement.bind(this);
   }

   renderTags(){
    if (this.state.tags.length===0)return <p>There are no tags!</p>;
   return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
}
handleIncrement(){
    console.log('increment Clicked',this);
}

 
   render() { 
    
   return (
  <div>
    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
    <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
    
   {this.state.tags.length===0 && 'please create new tag!'}
    {this.renderTags()}
  </div>
);



}

    getBadgeClasses() {
        let classes = " badge m-2 badge-";
        classes += (this.state.count == 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count }=this.state;
        return count==0 ? "zero":count;//use destructuring Pulls count directly from this.state
      //return this.state.count==0 ?'zero':this.state.count  
    }

}
 
export default Counter;//or u could use this statment on top before class to export it at same time
