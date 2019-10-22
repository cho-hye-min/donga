import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TemplateProp from './TemplateProp.js';

class Test_Template extends Component{
        state={
            isEmpty: false
        }

    componentWillMount (){
        if(this.props.info !== 'empty'){
            this.setState({ isEmpty: true });
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.info !== 'empty'){
            this.setState({ isEmpty: true });
        }
    }

    render(){
        
        return(
            <>
            {this.state.isEmpty ? <TemplateProp info={this.props.info}/> : ''}
            </>
        );
    }
}

export default Test_Template;


