import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import './TemplateEditor_main.css';
import './TemplateEditor.css';
import TemplateEditor_main from './TemplateEditor_main.js';
import TemplateProp from './TemplateProp.js';
import Prop from './Prop.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Prop_tab extends Component {
    constructor(props){
        super(props);
        this.state={
            active_prop: false
        };
    }

    componentWillMount (){
        if (this.props.type === 'component') {
            this.setState({ active_prop: true });
        }else if(this.props.type === 'template'){
            this.setState({ active_prop: false });
        }
    };

    componentWillReceiveProps(nextProps){
        if (nextProps.type === 'component') {
            this.setState({ active_prop: true });
        }else if(nextProps.type  === 'template'){
            this.setState({ active_prop: false });
        }
    }

    handleProp = (e) => {

        const className = e.target.className;

        switch (className) {
            case "template_prop":
            case "temp_prop":
                if (className === 'temp_prop') {
                    //ReactDOM.render(<TemplateProp />, document.getElementById('prop_view'));
                    const currentState = this.state.active_prop;
                    this.setState({ active_prop: !currentState });
                }
                break;
            case "component_prop":
            case "com_prop":
                if (className === 'component_prop') {
                    //ReactDOM.render(<ComponentProp />, document.getElementById('prop_view'));
                    const currentState2 = this.state.active_prop;
                    this.setState({ active_prop: !currentState2 });
                }
                break;
            default:
                break;
        }
    };

    render() {
        return (
            <>
               <div className={this.state.active_prop ? 'temp_prop' : 'template_prop'}
                    onClick={this.handleProp}>Template 속성</div>
                <div className={this.state.active_prop ? 'com_prop' : 'component_prop'}
                    onClick={this.handleProp}>Component 속성</div>
            </>
        );
    }
}

export default Prop_tab;

/*
 <div className={this.state.active_prop ? 'temp_prop' : 'template_prop'}
                    onClick={this.handleProp}>Template 속성</div>
                <div className={this.state.active_prop ? 'com_prop' : 'component_prop'}
                    onClick={this.handleProp}>Component 속성</div>
*/
