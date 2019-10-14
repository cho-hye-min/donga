import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import './TemplateEditor_main.css';
import './TemplateEditor.css';
import TemplateEditor_main from './TemplateEditor_main.js';
import TemplateList from './TemplateList.js';
import ComponentList from './ComponentList.js';

class Prop_tab extends Component {
    state = {
        active_list: false
    };

    handleList = (e) =>{
        const className = e.target.className;
        switch(className){
            case "template_tab":
            case "temp_tab":
                if (className === 'temp_tab') {
                    ReactDOM.render(<TemplateList />, document.getElementById('list_view'));
                    const currentState = this.state.active_list;
                    this.setState({ active_list: !currentState });
                }
                break;
            case "component_tab":
            case "com_tab":
                if (className === 'component_tab') {
                    ReactDOM.render(<ComponentList />, document.getElementById('list_view'));
                    const currentState2 = this.state.active_list;
                    this.setState({ active_list: !currentState2 });
                }
                break;
            default:
                ReactDOM.render(<TemplateList />, document.getElementById('list_view'));
                break;
        }
    }

    render() {
        return (
            <>
                <div className={this.state.active_list ? 'temp_tab' : 'template_tab'}
                    onClick={this.handleList}>Template</div>
                <div className={this.state.active_list ? 'com_tab' : 'component_tab'}
                    onClick={this.handleList}>Component</div>
            </>
        );
    }
}

export default Prop_tab;