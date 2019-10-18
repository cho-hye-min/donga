import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './TemplateEditor.css';
import Prop_text from './Prop_text.js';
import Prop from './Prop.js';
import Prop_tab from './Prop_tab.js';


class Component_text extends Component {

    prop_component = (component, firstId, lastId) => {
        const comp = document.getElementById(component.ID);
        const compId = (component.ID).substring(1, (component.ID).length);

        const compLength = document.getElementsByClassName('compo').length;
        const first = parseInt(firstId);
        const last = parseInt(lastId);

        for (var i = first; i <= last; i++) {
            if (i === parseInt(compId)) {
                comp.style.backgroundColor = '#e0eaec';
                comp.style.fontWeight = '550';
                comp.style.bordercolor = '#909090';
                comp.style.color = '#20323a';
            } else {
                const oth_comp = document.getElementById('C' + i);
                oth_comp.style.backgroundColor = 'white';
                oth_comp.style.fontWeight = '100';
                oth_comp.style.bordercolor = '#bbb8b8';
                oth_comp.style.color = '#bbb8b8';
            }
        }
        
        const type = 'text';
        Prop(component, type);
    };

    render() {
        const text_data = this.props.text_data;
        const Id = text_data[0].ID;
        const firstId = Id.substring(1, Id.length);


        const Id2 = text_data[(text_data.length) - 1].ID;
        const lastId = Id2.substring(1, Id2.length);

        const componentList = text_data.map(component => (<button className="compo" key={component.ID} id={component.ID} 
                              onClick={() => this.prop_component(component, firstId, lastId)}> {component.TITLE} ({component.ID}) </button>));
        return (
            <div className="compoSection">
                <div className="compoTitle">
                    Component 유형
                </div>
                <div className="compoList">
                    <input className="compoSearch" placeholder="Search Here" />
                    <button className="compoAdd">Componenet Type 추가</button>
                    {componentList}
                </div>
            </div>
        );
    }
}



export default Component_text;