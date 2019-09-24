import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './TemplateEditor.css';
import Prop_image from './Prop_image.js';

const prop_component_img = (e) =>{
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
   ReactDOM.render(<Prop_image info={compInfo}/>, document.getElementById('properties_section'));
};
class Component_image extends Component{
    render(){
    const image_data = this.props.image_data;
    const componentList = image_data.map(component => (<button className="compo" id={component.ID} onClick={prop_component_img}> {component.TITLE} ({component.ID}) </button>));
        
    return(
        <div className="compoSection">
            <div className="compoTitle">
                Component 유형
            </div>
            <div className="compoList">
                <input className="compoSearch" placeholder="Search Here" />
                <button className="compoAdd" >Componenet Type 추가</button>
                {componentList}
                 </div>
        </div>
    );
    }
}


export default Component_image;


//<button className="compo" id="CIMG_1" onClick={prop_component_img} >일반 (C14) - 컴포넌트 이름</button>
           