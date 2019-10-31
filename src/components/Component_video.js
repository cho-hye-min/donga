import React, {Component, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './TemplateEditor.css';
import Prop_video from './Prop_video.js';
import Prop_tab from './Prop_tab.js';
import Test_Component from './Test_Component.js';
import ComponentAddPop from './ComponentAddPop.js';
import AddingImg from './AddingImg.js';


const Component_video = (info) => {
    const [data, setData] = useState({
        component: {},
        isPop:info.isPop
    });

    useEffect(() => {
        if (info.addInfo !== undefined) {
            if(info.addInfo.compoCate !== undefined){
            const stateData = info.video_data;
            const compoData = stateData.filter(id => id.TITLE === info.addInfo.compoCate);
            const comp = document.getElementById('pop_' + compoData[0].ID);
            comp.style.backgroundColor = '#e0eaec';
            comp.style.fontWeight = '550';
            comp.style.bordercolor = '#909090';
            comp.style.color = '#20323a';
        }
    }
    }, [info.isPop]);

    const prop_component_video = (component, firstId, lastId) =>{ 
        let component_id = '';
        let compLength = 0;

        if(data.isPop === true){
            component_id = "pop_"+component.ID;
            compLength = document.getElementsByClassName('pop_compo').length;
        }else{
            component_id = component.ID;
            compLength = document.getElementsByClassName('compo').length;
        }

        const comp = document.getElementById(component_id);
        const compId = (component.ID).substring(1, (component_id).length);
    
        const first = parseInt(firstId);
        const last = parseInt(lastId);
    
        for(var i=first; i<=last; i++){
            if(i === parseInt(compId)){
                comp.style.backgroundColor = '#e0eaec';
                comp.style.fontWeight = '550';
                comp.style.bordercolor = '#909090';
                comp.style.color = '#20323a';
            }else{
                let oth_comp = {};
                if(data.isPop === true){
                    oth_comp = document.getElementById('pop_C' + i);
                }else{
                    oth_comp = document.getElementById('C' + i);
                }
                oth_comp.style.backgroundColor = 'white';
                oth_comp.style.fontWeight = '0';
                oth_comp.style.bordercolor = '#bbb8b8';
                oth_comp.style.color = '#bbb8b8';
            }
        }
        const type = 'image';
        if (data.isPop === true) {
            const addInfo = {};
            addInfo.compoName = "test";
            addInfo.compoType = type;
            addInfo.compoCate = component.TITLE;
            ReactDOM.render(<AddingImg addInfo={addInfo} data={component} />, document.getElementById('componentAdding'));
        } else {
            ReactDOM.render(<Prop_tab cate="component" />, document.getElementById('prop_edit'));
            ReactDOM.render(<Test_Component data={component} info={type} />, document.getElementById('prop_view'));
        }
    };
        
    const handlecomponentAddPop = (e) => {
        if(e === undefined){
            ReactDOM.render(<ComponentAddPop call={handlecomponentAddPop}/>, document.getElementById('compoAddPage'));   
        }
        else if (e !== undefined) {
            if (e.target.className === 'compoAdd_cancle') {
                ReactDOM.unmountComponentAtNode(document.getElementById('compoAddPage'));
            }
        }
    };

    const video_data = info.video_data;

    const Id = video_data[0].ID;
    const firstId = Id.substring(1, Id.length);

    const Id2 = video_data[(video_data.length)-1].ID;
    const lastId = Id2.substring(1, Id2.length);

    const componentList = video_data.map(component => (<button className={data.isPop ? "pop_compo" : "compo"} id={data.isPop ? "pop_" + component.ID : component.ID}
                        onClick={()=>prop_component_video(component, firstId, lastId)}> {component.TITLE} ({component.ID}) </button>));
    
    return(
        <main className="compoSection">
            <div className="compoTitle">
               Component 유형
            </div>
            
            <div className="compoList">
            <input className="compoSearch" placeholder="Search Here"/>
            <button className="compoAdd" onClick={() => handlecomponentAddPop()}>Componenet Type 추가</button>
            {componentList}
            </div>

        </main>
    );
}

export default Component_video;