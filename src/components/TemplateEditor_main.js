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

//Template Editor main
class TemplateEditor_main extends Component{
    state = {
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
                        <div className="list_edit"><List_tab/></div>
                        <div id="list_view"></div>
                    </div>
                    <div className="editing">
                        <div className="newPage_back">
                            <img className="img_newPage" src={newpage} alt={"newpage"} onClick={this.handleNewTemplate}/>
                            <div id="newPage_section">{this.state.isOpen ? <NewTemplate handleNewTemplate={this.handleNewTemplate}/> : null}</div>
                        </div>
                        <div id="compoAddPage"></div>
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

