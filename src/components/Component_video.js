import React, {Component, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import './TemplateEditor.css';
import Prop_video from './Prop_video.js';
import Prop_tab from './Prop_tab.js';
import Test_Component from './Test_Component.js';
import ComponentAddPop from './ComponentAddPop.js';
import ComponentAdd from './ComponentAdd.js';
import AddingVideo from './AddingVideo.js';

//video 유형의 component list 버튼화
const Component_video = (info) => {
    const [data, setData] = useState({
        component: {},
        isPop:info.isPop,
        isEdit: info.isEdit
    });

    //우클릭 '편집'을 통해 component video list 조회했을 경우
    //편집은 component dialog에서 해당 component list 버튼 css 변경해야 하기 때문
    useEffect(() => {
        if (info.addInfo !== undefined) {
            if(info.addInfo.cate !== undefined && data.isEdit === true){
            const stateData = info.video_data;
            //const compoData = stateData.filter(id => id.TITLE === info.addInfo.compoCate);
            const compoData = stateData.filter(id => id.ID === info.addInfo.id);
            const comp = document.getElementById('pop_' + compoData[0].ID);
            comp.style.backgroundColor = '#e0eaec';
            comp.style.fontWeight = '550';
            comp.style.bordercolor = '#909090';
            comp.style.color = '#20323a';
        }
    }
    }, []);

    //component list 버튼 클릭했을 경우
    //1. 선택한 component list css 변경
    //2. 선택한 component list에 대한 component 속성 조회 (AddingVideo.js, Test_Component.js)
    //3. Template Ediotr Main - right (component 속성 tab 선택) (Prop_tab.js)
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
                    oth_comp = document.getElementById('pop_V' + i);
                }else{
                    oth_comp = document.getElementById('V' + i);
                }
                oth_comp.style.backgroundColor = 'white';
                oth_comp.style.fontWeight = '0';
                oth_comp.style.bordercolor = '#bbb8b8';
                oth_comp.style.color = '#bbb8b8';
            }
        }
        let type = '';
        //현재 화면이 component dialog일 경우
        if (data.isPop === true) {
            type='video';
            const addInfo = {};
            addInfo.name = "test";
            addInfo.type = type;
            addInfo.cate = component.CATEGORY;
            addInfo.id = (component_id.split('_'))[1];
            ReactDOM.render(<AddingVideo addInfo={addInfo} data={component} />, document.getElementById('componentAdding'));
        } else {
            type='video';
            ReactDOM.render(<Prop_tab cate="component" />, document.getElementById('prop_edit'));
            ReactDOM.render(<Test_Component data={component} info={type} />, document.getElementById('prop_view'));
        }
    };
    
    /*//componet list 우클릭 했을 경우
    const handlecomponentAddPop = (e, data) => {
        let isCreate = '';

        if(e === undefined){
            isCreate='create';
            ReactDOM.render(<ComponentAddPop call={handlecomponentAddPop} isCreate={isCreate}/>, document.getElementById('compoAddPage'));   
        }
        else if (e !== undefined) {
            if (e.target.className === 'compoAdd_cancle' || e.target.className === 'componentAdd_cancle') {
                ReactDOM.unmountComponentAtNode(document.getElementById('compoAddPage'));
            } else if (data.action === 'edit' || data.action === 'copy') {
                const full = (data.target.innerText).split(' (');
                const addInfo = {};
                addInfo.compoName = full[0];
                addInfo.compoCate = full[0];
                addInfo.compoType = 'video';
                isCreate = data.action;
                ReactDOM.render(<ComponentAdd call={handlecomponentAddPop} addInfo={addInfo} isCreate={isCreate} />, document.getElementById('compoAddPage'));

            }
        }
    };*/

    const handlecomponentAddPop = (e, data) => {
        let isCreate = '';
        if(e === undefined){
            isCreate='create';
            ReactDOM.render(<ComponentAddPop call={handlecomponentAddPop}/>, document.getElementById('compoAddPage'));   
        }
        else if (e !== undefined) {
            if (e.target.className === 'compoAdd_cancle') {
                ReactDOM.unmountComponentAtNode(document.getElementById('compoAddPage'));
            }else if (data.action === 'edit' || data.action === 'copy') {
                const info = {};
                info.type ='video';
                const full = (data.target.innerText).split(' (');
                info.cate = full[0];
                info.name = full[0];
                info.id = (full[1].split(')'))[0];
                isCreate = data.action;
                ReactDOM.render(<ComponentAddPop call={handlecomponentAddPop} isCreate={isCreate} info={info}/>, document.getElementById('compoAddPage'));
            }
        }
    };

    //info: component all data
    //video_data: component video data
    const video_data = info.video_data;

    const Id = video_data[0].ID;
    const firstId = Id.substring(1, Id.length);

    const Id2 = video_data[(video_data.length)-1].ID;
    const lastId = Id2.substring(1, Id2.length);

    const componentMain = video_data.map(component => (<ContextMenuTrigger id="VDOsome_main"><button className="compo" key={component.ID} id={component.ID}
        onClick={() => prop_component_video(component, firstId, lastId)}> {component.TITLE} ({component.ID}) </button></ContextMenuTrigger>));

    const componentPop = video_data.map(component => (<ContextMenuTrigger id="VDOsome_add"><button className="pop_compo" key={component.ID} id={"pop_" + component.ID} 
        onClick={() => prop_component_video(component, firstId, lastId)}> {component.TITLE} ({component.ID}) </button></ContextMenuTrigger>));

    return (
        <main className="compoSection">
            <div className="compoTitle">
               Component 유형
            </div>
            
            <div className="compoList">
            <input className="compoSearch" placeholder="Search Here"/>
            <button className="compoAdd" onClick={() => handlecomponentAddPop()}>Componenet Type 추가</button>
            {data.isPop? componentPop : componentMain}
                {data.isPop? 
                <ContextMenu id="VDOsome_add">
                    <MenuItem data={{action: 'edit'}} onClick={handlecomponentAddPop}>편집</MenuItem>
                    <MenuItem data={{action: 'copy'}} onClick={handlecomponentAddPop}>복제</MenuItem>
                </ContextMenu>
                : 
                <ContextMenu id="VDOsome_main">
                    <MenuItem data={{action: 'edit'}} onClick={handlecomponentAddPop}>편집</MenuItem>
                    <MenuItem data={{action: 'copy'}} onClick={handlecomponentAddPop}>복제</MenuItem>
                </ContextMenu>
                }
            </div>

        </main>
    );
}

export default Component_video;