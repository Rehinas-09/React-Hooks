import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    handleClick=()=>{
        this.setState({      
            count:this.state.count+1
        })                                     
    }              
  render() {
    return (    
      <div>
       <p>{this.state.count}</p>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )    
  }
}  
export default ClassCounter            
  