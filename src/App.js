import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './child';


class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={age:20};
    console.log('Hey Constrctor');
  }
  componentWillMount()
  {
console.log('will mount called');
  }
  componentDidMount()
  {
console.log('did mount called')
  }
  componentWillUpdate()
  {
console.log('will update')
  }
  componentDidUpdate()
  {
console.log('did update')
  }
  componentWillReceiveProps(p,n)
  {
console.log('received props')
  }
  shouldComponentUpdate()
  {
console.log('should i update');
return true;
  }
  data()
  {
    this.setState({age:50});
  }
  render() {
//     setTimeout(()=>
//     {
// this.setState({age:50});
// var i=1;
//     },5000)
    console.log('rendred');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" onClick={()=>this.data()}>
         {this.state.age}, edit <code>src/App.js</code> and save to reload.
        </p>
        <Child name={this.state.age}/>
      </div>
    );
  }
}

export default App;
