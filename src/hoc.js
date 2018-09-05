import React, { Component } from 'react';

import Loader1 from './Loader'
export default  (NewComponent)=>
{
    return class auth extends React.Component
    {
    constructor(props)
    {
        super(props);
    }
  render()
  {
console.log(this.props)

if(this.props.name==20)

{
    return <Loader1/>
}
else{
 return <NewComponent {...this.props}/>
    
}
   
}
}

}