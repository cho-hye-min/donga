import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './TemplateEditor.css';
import Prop_video from './Prop_video.js';

const prop_component_video = (e) =>{
    const compInfo = e.target.innerText;
    const comp = document.getElementById(e.target.id);
    const compId = (e.target.id).charAt(1);

    const compLength = document.getElementsByClassName('compo').length;
    for(var i=1; i<=compLength; i++){
        if(i === parseInt(compId)){
            comp.style.backgroundColor = '#e0eaec';
            comp.style.fontWeight = '550';
            comp.style.bordercolor = '#909090';
            comp.style.color = '#20323a';
        }else{
            const oth_comp = document.getElementById('C'+i);
            oth_comp.style.backgroundColor = 'white';
            oth_comp.style.fontWeight = '0';
            oth_comp.style.bordercolor = '#bbb8b8';
            oth_comp.style.color = '#bbb8b8';
        }
    }
   ReactDOM.render(<Prop_video info={compInfo}/>, document.getElementById('properties_section'));
};

class Component_video extends Component{
    render(){
    const video_data = this.props.video_data;
    const componentList = video_data.map(component => (<button className="compo" id={component.ID} onClick={prop_component_video}> {component.TITLE} ({component.ID}) </button>));
    
    return(
        <main className="compoSection">
            <div className="compoTitle">
               Component 유형
            </div>
            
            <div className="compoList">
            <input className="compoSearch" placeholder="Search Here"/>
            <button className="compoAdd" >Componenet Type 추가</button>
            {componentList}
            </div>
        </main>
    );
}
}

export default Component_video;
//<button className="compo" id="CVD_1" onClick={prop_component_video}> 일반 (C15) - 컴포넌트 이름</button>
            