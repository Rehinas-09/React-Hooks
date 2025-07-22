import React, { Component } from 'react'

class ClassCounterOne extends Component {
    constructor(props){
        super(props)
        this.state={
            count:3,
            name:''
        }
    }
    componentDidMount(){
        document.title=`clicked ${this.state.count} times`
    }
    componentDidUpdate( prevState,prevProps){
        if(prevState!==this.state.count){
        console.log("updating documnet title")
        document.title=`clicked ${this.state.count} times`
        }
        
    }      
  render() {   

    return ( 
      <div>
        <input type="text" 
        value={this.state.name}    
        onChange={e=>{
            this.setState({name:e.target.value})
        }}/>
        <button onClick={()=>this.setState({count:this.state.count+1})}>clicked {this.state.count} times</button>
      </div>
    )
  }
}

export default ClassCounterOne
