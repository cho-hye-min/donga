import React, { Component } from 'react';
import templateContext from './Context.js';

class ChildContext extends Component{
    render(){
      return(
        <templateContext.Consumer>
          {(context)=>{
            let check=context.FirstId;
          }}
        </templateContext.Consumer>
      );
    }
  }

  export default ChildContext;