import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './TemplateEditor.css';
import Prop_text from './Prop_text.js';


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
        ReactDOM.render(<Prop_text info={component} />, document.getElementById('properties_section'));

    };

    render() {
        const text_data = this.props.text_data;
        const Id = text_data[0].ID;
        const firstId = Id.substring(1, Id.length);


        const Id2 = text_data[(text_data.length) - 1].ID;
        const lastId = Id2.substring(1, Id2.length);

        const componentList = text_data.map(component => (<button className="compo" key={component.ID} id={component.ID} onClick={() => this.prop_component(component, firstId, lastId)}> {component.TITLE} ({component.ID}) </button>));
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


/*
<button className="compo" id="CTX_1" onClick={prop_component} >제목 (C1) - 컴포넌트 이름</button>
                    <button className="compo" id="CTX_2" onClick={prop_component}>부제목 (C2) - 컴포넌트 이름</button>
                    <button className="compo" id="CTX_3" onClick={prop_component}>소제목 (C3) - 컴포넌트 이름</button>
                    <button className="compo" id="CTX_4" onClick={prop_component}>표제 (C4) - 컴포넌트 이름</button>
                    <button className="compo" id="CTX_5" onClick={prop_component}>본문 (C5) - 컴포넌트 이름</button>
                    <button className="compo" id="CTX_6" onClick={prop_component}>발문 (C6) - 컴포넌트 이름</button>
                    <button className="compo" id="CTX_7" onClick={prop_component}>날짜 (C7) - 컴포넌트 이름</button>
                    <button className="compo" id="CTX_8" onClick={prop_component}>관련기사 (C8) - 컴포넌트 이름</button>
                    <button className="compo" id="CTX_9" onClick={prop_component}>주요기사 (C9) - 컴포넌트 이름</button>
                    <button className="compo" id="CTX_10" onClick={prop_component}>바이라인 (C10) - 컴포넌트 이름</button>
                    <button className="compo" id="CTX_11" onClick={prop_component}>출처 (C11) - 컴포넌트 이름</button>
                    <button className="compo" id="CTX_12" onClick={prop_component}>분류 (C12) - 컴포넌트 이름</button>
                    <button className="compo" id="CTX_13" onClick={prop_component}>라벨 (C13) - 컴포넌트 이름</button>
*/