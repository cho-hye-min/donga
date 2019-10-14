import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './TemplateEditor.css';
import Prop_image from './Prop_image.js';
import Prop from './Prop.js';
import Prop_tab from './Prop_tab.js';

const prop_component_img = (component, firstId, lastId) =>{
    const comp = document.getElementById(component.ID);
    const compId = (component.ID).substring(1, (component.ID).length);

    //const compLength = document.getElementsByClassName('compo').length;
    const first = parseInt(firstId);
    const last = parseInt(lastId);

    for(var i=first; i<=last; i++){
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
    // ReactDOM.render(<Prop_image info={component}/>, document.getElementById('properties_section'));

    const type = 'image';
    Prop(component, type);
};
class Component_image extends Component{
    render(){
    const image_data = this.props.image_data;
    const Id = image_data[0].ID;
    const firstId = Id.substring(1, Id.length);

    const Id2 = image_data[(image_data.length)-1].ID;
    const lastId = Id2.substring(1, Id2.length);

    const componentList = image_data.map(component => (<button className="compo" id={component.ID} onClick={()=>prop_component_img(component, firstId, lastId)}> {component.TITLE} ({component.ID}) </button>));
        
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
           