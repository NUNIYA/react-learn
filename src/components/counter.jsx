
import React, { Component } from 'react';

class  Counter extends Component {
   state={
    value:this.props.value,
    tags:[]
   
   }; 

   //constructor(){
    //super();
    //this.handleIncrement=this.handleIncrement.bind(this);
  // }

   renderTags(){
    if (this.state.tags.length===0)return <p>There are no tags!</p>;
   return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
}
handleIncrement = product => {
 // this.state.count++;//we cant do this in react even tho it is updating it react doesnt know
console.log(product );
 this.setState({value:this.state.value + 1})
};

   render() { 
    const product = { id: 1 };
    console.log(this.props);
  
    
  return (
  <div>
    {this.props.children}
    
    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
    <button onClick={() => this.handleIncrement(product)} className="btn btn-secondary btn-sm">
      Increment
    </button>
    <button onClick={() =>this.props.onDelete(this.props.id)} className='btn btn-danger btn-sm-m-2'>Delete</button>

    {/* {this.state.tags.length===0 && 'please create new tag!'} */}
    {/* {this.renderTags()} */}
  </div>
);



}

    getBadgeClasses() {
        let classes = " badge m-2 badge-";
        classes += (this.state.value == 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value: count }=this.state;
        return count==0 ? "zero":count;//use destructuring Pulls count directly from this.state
      //return this.state.count==0 ?'zero':this.state.count  
    }

}
 
export default Counter;//or u could use this statment on top before class to export it at same time
