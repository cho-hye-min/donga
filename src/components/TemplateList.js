import React, {Component} from 'react';
import './TemplateEditor.css';

class TemplateList extends Component {
    state = {
      "ID": "C1",
      "TITLE": "제목",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 550,
          "HEIGHT": 40,
          "BORDER": {
            "BORDERWIDTH": 0,
            "BORDERSTYLE": "",
            "BORDERCOLOR": ""
          },
          "PADDING":{
            "PADDINGTOP": 0,
            "PADDINGRIGHT": 0,
            "PADDINGBOTTOM": 0,
            "PADDINGLEFT": 0,
          },
          "MARGIN":{
            "MARGINTOP": 0,
            "MARGINRIGHT": 30,
            "MARGINBOTTOM": 0,
            "MARGINLEFT": 0
          },
          "BACKGROUNDCOLOR": "#FFFFFF",
          "TEXTALIGN": ""
        },
        "COMPONENT":{
            "TEXT":[{
                "ID": "C1",
                "TITLE": "제목",
                "COUNT": 1
             },
             {
                "ID": "C8",
                "TITLE":"관련기사",
                "COUNT": 3
             }
            ],
            "IMAGE": [{
                "ID": "C15",
                "TITLE": "일반",
                "COUNT": 1
             }],
        },
        "REGDATE": '20190110',
        "REGNAME": '조혜민',
        "MAPPING": {
            "FIELD": "TITLE"
        }
      }
    }

    render() {
        const data = this.state;
        return (
            <input className="compoSearch" placeholder="Search Here" />
        );
    }
}


export default TemplateList;
