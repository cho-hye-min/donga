import React, { Component, createContext } from 'react';
import ReactDOM from 'react-dom';
import './TemplateEditor.css';
import './TemplateEditor_main.js';
import TemplateEditor_main from './TemplateEditor_main.js';
import Prop_tab from './Prop_tab.js';
import Test_Template from './Test_Template.js';
import TemplateProp from './TemplateProp.js';

//Template Editor Main - left (Template List)
//Template List 정보 조회 (DB로부터) 및 List 버튼화
class TemplateList extends Component {
  state = {
    "DATA": [{
      "ID": "T1",
      "TITLE": "템플릿1",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 550,
          "HEIGHT": 40,
          "BORDER": {
            "BORDERWIDTH": 0,
            "BORDERSTYLE": "",
            "BORDERCOLOR": ""
          },
          "PADDING": {
            "PADDINGTOP": 0,
            "PADDINGRIGHT": 0,
            "PADDINGBOTTOM": 0,
            "PADDINGLEFT": 0,
          },
          "MARGIN": {
            "MARGINTOP": 0,
            "MARGINRIGHT": 30,
            "MARGINBOTTOM": 0,
            "MARGINLEFT": 0
          },
          "BACKGROUNDCOLOR": "#FFFFFF",
          "TEXTALIGN": ""
        },
        "COMPONENT": {
          "TEXT": [{
            "ID": "C1",
            "TITLE": "제목",
            "COUNT": 1
          },
          {
            "ID": "C8",
            "TITLE": "관련기사",
            "COUNT": 3
          }
          ],
          "IMAGE": [{
            "ID": "C15",
            "TITLE": "일반",
            "COUNT": 1
          }],
        },
        "REGDATE": '',
        "REGNAME": '조혜민',
        "MAPPING": {
          "FIELD": ""
        }
      }
    },
    {
      "ID": "T2",
      "TITLE": "템플릿2",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 550,
          "HEIGHT": 40,
          "BORDER": {
            "BORDERWIDTH": 0,
            "BORDERSTYLE": "",
            "BORDERCOLOR": ""
          },
          "PADDING": {
            "PADDINGTOP": 0,
            "PADDINGRIGHT": 0,
            "PADDINGBOTTOM": 0,
            "PADDINGLEFT": 0,
          },
          "MARGIN": {
            "MARGINTOP": 0,
            "MARGINRIGHT": 30,
            "MARGINBOTTOM": 0,
            "MARGINLEFT": 0
          },
          "BACKGROUNDCOLOR": "#FFFFFF",
          "TEXTALIGN": ""
        },
        "COMPONENT": {
          "TEXT": [{
            "ID": "C1",
            "TITLE": "제목",
            "COUNT": 1
          },
          {
            "ID": "C8",
            "TITLE": "관련기사",
            "COUNT": 3
          }
          ],
          "IMAGE": [{
            "ID": "C15",
            "TITLE": "일반",
            "COUNT": 1
          }],
        },
        "REGDATE": '',
        "REGNAME": '조혜민',
        "MAPPING": {
          "FIELD": ""
        }
      }
    }]
  }

  //하나의 Template List 버튼 클릭했을 경우
  //1. 클릭한 Template List css 변경 
  //2. 클릭한 Template List의 정보를 조회하여 Main 오른쪽의 component 속성에 보여줌 (TemplateProp.js)
  //3. Main 오른쪽의 component tab 선택 (Prop_tab.js)
  prop_template = (template, firstId, lastId) => {

    const temp = document.getElementById(template.ID);
    const tempId = (template.ID).substring(1, (template.ID).length);

    const compLength = document.getElementsByClassName('temp').length;
    const first = parseInt(firstId);
    const last = parseInt(lastId);

    for (var i = first; i <= last; i++) {
      if (i === parseInt(tempId)) {
        temp.style.backgroundColor = '#e0eaec';
        temp.style.fontWeight = '550';
        temp.style.bordercolor = '#909090';
        temp.style.color = '#20323a';
      } else {
        const oth_temp = document.getElementById('T' + i);
        oth_temp.style.backgroundColor = 'white';
        oth_temp.style.fontWeight = '100';
        oth_temp.style.bordercolor = '#bbb8b8';
        oth_temp.style.color = '#bbb8b8';
      }
    }

    ReactDOM.render(<Prop_tab cate="template" />, document.getElementById('prop_edit'));
    ReactDOM.render(<TemplateProp info={template} />, document.getElementById('prop_view'));
  };

  render() {

    const templateData = this.state.DATA;
    const Id = templateData[0].ID;
    const firstId = Id.substring(1, Id.length);

    const Id2 = templateData[(templateData.length) - 1].ID;
    const lastId = Id2.substring(1, Id2.length);

    const templateList = templateData.map(template => (<button className="temp" key={template.ID} id={template.ID}
      onClick={() => this.prop_template(template, firstId, lastId)}> {template.TITLE} ({template.ID}) </button>));

    return (
        <div className="templateList">
          <input className="compoSearch" placeholder="Search Here" />
          {templateList}
        </div>
    );
  }
  
  
}

export default TemplateList;
