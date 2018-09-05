import React, { Component , PureComponent } from 'react';
import Loader from 'react-loader-spinner'
import './App.css';
// require("bootstrap/less/bootstrap.less");
class Loader1 extends PureComponent {
 
  render() {
  

    return (
      <div className="App">
<Loader type="ThreeDots" color="blue" height={80} width={80} />
      </div>
    );
  }
}

export default Loader1;
