import React, { Component } from 'react'

export class ClassMouse extends Component {
    constructor(props){
        super(props)
        this.state={
            x:0,
            y:0
        }
    }
    move=e=>{
        this.setState({x:e.clientX,y:e.clientY})
    }
    componentDidMount(){
        document.addEventListener("mousemove",this.move)
    }
  render() {
   
    return (
      <div> 
        X-{this.state.x} Y-{this.state.y}
      </div>  
    )
  }    
}
export default ClassMouse
