import React, {Component, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './TemplateEditor_main.css';
import './TemplateEditor.css';
import newpage from '../img/positive-sign.png';
import right from '../img/right-arrow.png';
import left from '../img/left-arrow.png';
import TemplateList from './TemplateList.js';
import ComponentList from './ComponentList.js';
import NewTemplate from './NewTemplate.js';
import Prop_tab from './Prop_tab.js';
import List_tab from './List_tab.js';
import { AST_False } from 'terser';


class TemplateEditor_main extends Component{
    state = {
        //active_list: false,
        //active_prop: false,
        isOpen: false
    };

    
    handleMove = e => {
        e.preventDefault();
    }

   

    handleNewTemplate = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
            <>
                <div className="title">
                    <div className="title_main">DONG-A's Editor</div>
                    <div className="title_template">Template Editor</div>
                    <div className="title_layout" onClick={this.handleMove}>Layout Editor</div>
                    <div className="title_package">Package Editor</div>
                </div>

                <div className="editing_full">
                    <div className="list">
                        <div className="list_edit">
                        <List_tab></List_tab>
                        </div>
                        <div id="list_view"></div>
                    </div>
                    <div className="editing">
                        <div className="newPage_back">
                            <img className="img_newPage" src={newpage} alt={"newpage"} onClick={this.handleNewTemplate}/>
                            <div id="newPage_section">{this.state.isOpen ? <NewTemplate handleNewTemplate={this.handleNewTemplate}/> : null}</div>
                        </div>
                        <div className="button_bk">
                            <button className="reset" >초기화</button>
                            <button className="save" >저장</button>
                        </div>
                        <div className="arrow_bk">
                            <img className="img_left" src={left} alt={"left"} />
                            <img className="img_right" src={right} alt={"right"} />
                        </div>
                    </div>
                    <div className="properties">
                        <div id="prop_edit"><Prop_tab/></div>
                        <div id="prop_view"></div>
                    </div>
                </div>
            </>

        );
    }
}
export default TemplateEditor_main;


 /*handleList = (e) =>{
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
    }*/

   /* handleProp = (e) =>{
        const className = e.target.className;
        switch(className){
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
                if(className === 'component_prop'){
                    //ReactDOM.render(<ComponentProp />, document.getElementById('prop_view'));
                    const currentState2 = this.state.active_prop;
                    this.setState({ active_prop: !currentState2 });
                }
                break;
            default:
                break;
        }
    }*/