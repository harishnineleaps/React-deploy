import React, { Component , PureComponent } from 'react';
import './App.css';
import hoc from './hoc'
// require("bootstrap/less/bootstrap.less");
class Child extends PureComponent {
  constructor(props)
  {
    super(props);
    this.state={age:20,activePage: 15};
    console.log('Hey Child Constrctor');
  }
  componentWillMount()
  {
console.log(' Child will mount called');
  }
  componentDidMount()
  {
console.log(' Child did mount called')
  }
  componentWillUpdate()
  {
console.log(' Child will update')
  }
  componentDidUpdate()
  {
console.log(' Child did update')
  }
  componentWillReceiveProps(p,n)
  {
console.log(' Child received props')
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
       <h1>Child Elements {this.props.name}</h1>
       
      </div>
    );
  }
}

export default hoc(Child);
