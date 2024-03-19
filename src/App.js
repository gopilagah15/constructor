import React, { Component } from 'react'

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0
    }
    this.inc = this.inc.bind(this);
  }
  inc(){
    this.setState((prevState)=>({count:prevState.count+1}))
  }
  render() {
    return (
      <>
        <h1>Class Components</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.inc}>Increment</button>
      </>
    )
  }
}

export default App
