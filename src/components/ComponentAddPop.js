import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './TemplateEditor.css';
import ComponentAdd from './ComponentAdd.js';

class ComponentAddPop extends Component {
    state = {
        comName:'',
        isText: true,
        isImage: false,
        isVideo: false,
        "TEXT": [
            "제목",
            "부제목",
            "소제목",
            "표제",
            "본문",
            "발문",
            "날짜",
            "관련기사",
            "주요기사",
            "바이라인",
            "출처",
            "분류",
            "라벨"
        ],
        "IMAGE": [
            "이미지일반"
        ],
        "VIDEO": [
            "동영상일반"
        ]
    };

    handleChange = (e) => {
        if(e.target.value === 'image'){
            this.setState({isText:false});
            this.setState({isImage:true});
            this.setState({isVideo:false});
        }else if(e.target.value === 'video'){
            this.setState({isText:false});
            this.setState({isImage:false});
            this.setState({isVideo:true});
        }else if(e.target.value === 'text'){
            this.setState({isText:true});
            this.setState({isImage:false});
            this.setState({isVideo:false});
        }
    };

    handleInputChange = (e) => {
        this.setState({
            comName: e.target.value
        });
    }

    handleComponentAdd = (e) => {
        if(this.state.comName === '' ){
            alert('컴포넌트 이름을 입력해주세요.');
            return;
        }
        if (e.target.className === 'compoAdd_create') {
            const compoName = window.document.getElementsByClassName('PopAddName')[0].value;
            const compoType = window.document.getElementsByClassName('componentAdd_type')[0].value;
            const compoCate = window.document.getElementsByClassName('componentAdd_cate')[0].value;
            
            const addInfo = {};
            addInfo.compoName = compoName;
            addInfo.compoType = compoType;
            addInfo.compoCate = compoCate;

            ReactDOM.render(<ComponentAdd call={this.handleComponentAdd} addInfo={addInfo}/>, document.getElementById('compoAddPage'));
        } else if (e.target.className === 'componentAdd_cancle') {
            ReactDOM.unmountComponentAtNode(document.getElementById('compoAddPage'));
        }
    };

    render() {

        let typeInfo = [];
        let typeList = '';

        if(this.state.isImage === true){
            typeInfo = this.state.IMAGE;
        }else if(this.state.isVideo === true){
            typeInfo = this.state.VIDEO;
        }else{
            typeInfo = this.state.TEXT;
        }

        typeList = <select className="componentAdd_cate" onChange={this.handleChage} defaultValue={typeInfo[0]}>{(typeInfo).map(list => (<option value={list}>{list}</option>))}</select>
        
        return (
            <React.Fragment>
                <div className="Modal-overlay" />
                <div className="createBox">
                    <div className="PopAddTitle">Component 추가</div>
                    <input className="PopAddName" onChange={this.handleInputChange} placeholder="컴포넌트 이름" />

                    <div className="componentAdd_type_tx">종류</div> 
                    <select className="componentAdd_type" defaultValue="text" onChange={this.handleChange}>
                        <option value="text">TEXT</option>
                        <option value="image">IMAGE</option>
                        <option value="video">VIDEO</option>
                    </select>
                    <div className="componentAdd_cate_tx">유형</div> 
                    {typeList}
                    <button className="compoAdd_cancle" onClick={this.props.call}>취소</button>
                    <button className="compoAdd_create" onClick={this.handleComponentAdd}>확인</button>
                </div>
            </React.Fragment>
        );
    }
}

export default ComponentAddPop;