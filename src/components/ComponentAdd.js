import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './TemplateEditor.css';
import ComponentList from './ComponentList.js';
import Component_text from './Component_text.js';
import Component_image from './Component_image.js';
import Component_video from './Component_video.js';
import AddingTx from './AddingTx.js';
import AddingImg from './AddingImg.js';
import AddingVideo from './AddingVideo.js';

//Component Editor Dialog
class ComponentAdd extends Component {
  state = {
    "TEXT": [{
      "CATEGORY": "제목",
      "ID": "TX1",
      "TITLE": "제목",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 550,
          "HEIGHT": 40,
          "BORDER": {
            "BORDERWIDTH": 0,
            "BORDERSTYLE": "none",
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
        "ICON": {
          "TYPE": "none",
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONTFAMILY": "맑은 고딕",
          "FONTSIZE": 19,
          "FONTSTYLE": "normal",
          "FONTWEIGHT": "bold",
          "COLOR": "#191919",
          "LINEHEIGHT": 40
        },
        "LINK": {
          "URL": "",
          "TARGET": "_blank"
        },
        "MAPPING": {
          "FIELD": "TITLE"
        }
      }
    },
    {
      "CATEGORY": "부제목",
      "ID": "TX2",
      "TITLE": "부제목",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 550,
          "HEIGHT": 40,
          "BORDER": {
            "BORDERWIDTH": 0,
            "BORDERSTYLE": "none",
            "BORDERCOLOR": ""
          },
          "PADDING": {
            "PADDINGTOP": 0,
            "PADDINGRIGHT": 0,
            "PADDINGBOTTOM": 0,
            "PADDINGLEFT": 0
          },
          "MARGIN": {
            "MARGINTOP": 0,
            "MARGINRIGHT": 30,
            "MARGINBOTTOM": 0,
            "MARGINLEFT": 0
          },
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXTALIGN": ""
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONTFAMILY": "맑은 고딕",
          "FONTSIZE": 17,
          "FONTSTYLE": "normal",
          "FONTWEIGHT": "bold",
          "COLOR": "#191919",
          "LINEHEIGHT": 40
        },
        "LINK": {
          "URL": "",
          "TARGET": "_blank"
        },
        "MAPPING": {
          "FIELD": "SUBTITLE"
        }
      }
    },
    {
      "CATEGORY": "소제목",
      "ID": "TX3",
      "TITLE": "소제목",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 550,
          "HEIGHT": 40,
          "BORDER": {
            "BORDERWIDTH": 0,
            "BORDERSTYLE": "none",
            "BORDERCOLOR": ""
          },
          "PADDING": {
            "PADDINGTOP": 0,
            "PADDINGRIGHT": 0,
            "PADDINGBOTTOM": 0,
            "PADDINGLEFT": 0
          },
          "MARGIN": {
            "MARGINTOP": 0,
            "MARGINRIGHT": 30,
            "MARGINBOTTOM": 0,
            "MARGINLEFT": 0
          },
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXTALIGN": ""
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONTFAMILY": "맑은 고딕",
          "FONTSIZE": 17,
          "FONTSTYLE": "normal",
          "FONTWEIGHT": "bold",
          "COLOR": "#191919",
          "LINEHEIGHT": 40
        },
        "LINK": {
          "URL": "",
          "TARGET": "_blank"
        },
        "MAPPING": {
          "FIELD": "STRAPLINE"
        }
      }
    },
    {
      "CATEGORY": "표제",
      "ID": "TX4",
      "TITLE": "표제",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 550,
          "HEIGHT": 80,
          "BORDER": {
            "BORDERWIDTH": 0,
            "BORDERSTYLE": "none",
            "BORDERCOLOR": ""
          },
          "PADDING": {
            "PADDINGTOP": 0,
            "PADDINGRIGHT": 0,
            "PADDINGBOTTOM": 0,
            "PADDINGLEFT": 0
          },
          "MARGIN": {
            "MARGINTOP": 0,
            "MARGINRIGHT": 30,
            "MARGINBOTTOM": 0,
            "MARGINLEFT": 0
          },
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXTALIGN": "center"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONTFAMILY": "맑은 고딕",
          "FONTSIZE": 15,
          "FONTSTYLE": "normal",
          "FONTWEIGHT": "bold",
          "COLOR": "#191919",
          "LINEHEIGHT": 40
        },
        "LINK": {
          "URL": "",
          "TARGET": "_blank"
        },
        "MAPPING": {
          "FIELD": "HEADLINE"
        }
      }
    },
    {
      "CATEGORY": "본문",
      "ID": "TX5",
      "TITLE": "본문",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 600,
          "HEIGHT": 800,
          "BORDER": {
            "BORDERWIDTH": 0,
            "BORDERSTYLE": "none",
            "BORDERCOLOR": ""
          },
          "PADDING": {
            "PADDINGTOP": 10,
            "PADDINGRIGHT": 20,
            "PADDINGBOTTOM": 10,
            "PADDINGLEFT": 20
          },
          "MARGIN": {
            "MARGINTOP": 0,
            "MARGINRIGHT": 30,
            "MARGINBOTTOM": 0,
            "MARGINLEFT": 0
          },
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXTALIGN": "center"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONTFAMILY": "맑은 고딕",
          "FONTSIZE": 14,
          "FONTSTYLE": "normal",
          "FONTWEIGHT": "bold",
          "COLOR": "#363636",
          "LINEHEIGHT": 20
        },
        "LINK": {
          "URL": "",
          "TARGET": "_blank"
        },
        "MAPPING": {
          "FIELD": "BODY"
        }
      }
    },
    {
      "CATEGORY": "발문",
      "ID": "TX6",
      "TITLE": "발문",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 500,
          "HEIGHT": 60,

          "BORDER": {
            "BORDERWIDTH": 0,
            "BORDERSTYLE": "none",
            "BORDERCOLOR": ""
          },
          "PADDING": {
            "PADDINGTOP": 0,
            "PADDINGRIGHT": 0,
            "PADDINGBOTTOM": 0,
            "PADDINGLEFT": 0
          },
          "MARGIN": {
            "MARGINTOP": 0,
            "MARGINRIGHT": 30,
            "MARGINBOTTOM": 0,
            "MARGINLEFT": 0
          },
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXTALIGN": "center"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONTFAMILY": "맑은 고딕",
          "FONTSIZE": 14,
          "FONTSTYLE": "normal",
          "FONTWEIGHT": "",
          "COLOR": "#191919",
          "LINEHEIGHT": 40
        },
        "LINK": {
          "URL": "",
          "TARGET": "_blank"
        },
        "MAPPING": {
          "FIELD": "EPILOGUE"
        }
      }
    },
    {
      "CATEGORY": "날짜",
      "ID": "TX7",
      "TITLE": "날짜",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 200,
          "HEIGHT": 30,

          "BORDER": {
            "BORDERWIDTH": 0,
            "BORDERSTYLE": "none",
            "BORDERCOLOR": ""
          },
          "PADDING": {
            "PADDINGTOP": 0,
            "PADDINGRIGHT": 0,
            "PADDINGBOTTOM": 0,
            "PADDINGLEFT": 0
          },
          "MARGIN": {
            "MARGINTOP": 0,
            "MARGINRIGHT": 30,
            "MARGINBOTTOM": 0,
            "MARGINLEFT": 0
          },
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXTALIGN": "center"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONTFAMILY": "돋움",
          "FONTSIZE": 12,
          "FONTSTYLE": "normal",
          "FONTWEIGHT": "",
          "COLOR": "#8b8b8b",
          "LINEHEIGHT": 0
        },
        "LINK": {
          "URL": "",
          "TARGET": "_blank"
        },
        "MAPPING": {
          "FIELD": "REGDATE"
        }
      }
    },
    {
      "CATEGORY": "관련기사",
      "ID": "TX8",
      "TITLE": "관련기사",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 500,
          "HEIGHT": 40,

          "BORDER": {
            "BORDERWIDTH": 0,
            "BORDERSTYLE": "none",
            "BORDERCOLOR": ""
          },
          "PADDING": {
            "PADDINGTOP": 0,
            "PADDINGRIGHT": 39,
            "PADDINGBOTTOM": 0,
            "PADDINGLEFT": 42
          },
          "MARGIN": {
            "MARGINTOP": 0,
            "MARGINRIGHT": 30,
            "MARGINBOTTOM": 0,
            "MARGINLEFT": 0
          },
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXTALIGN": "center"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONTFAMILY": "맑은 고딕",
          "FONTSIZE": 14,
          "FONTSTYLE": "normal",
          "FONTWEIGHT": "",
          "COLOR": "#191919",
          "LINE-HEIGHT": 0
        },
        "LINK": {
          "URL": "",
          "TARGET": "_blank"
        },
        "MAPPING": {
          "FIELD": "RELATE_NEWS"
        }
      }
    },
    {
      "CATEGORY": "주요기사",
      "ID": "TX9",
      "TITLE": "주요기사",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 500,
          "HEIGHT": 61,
          "BORDER": {
            "BORDERWIDTH": 1,
            "BORDERSTYLE": "solid",
            "BORDERCOLOR": "#f2f3f5"
          },
          "PADDING": {
            "PADDINGTOP": 4,
            "PADDINGRIGHT": 0,
            "PADDINGBOTTOM": 4,
            "PADDINGLEFT": 0
          },
          "MARGIN": {
            "MARGINTOP": 0,
            "MARGINRIGHT": 30,
            "MARGINBOTTOM": 0,
            "MARGINLEFT": 0
          },
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXTALIGN": "center"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONTFAMILY": "맑은 고딕",
          "FONTSIZE": 15,
          "FONTSTYLE": "normal",
          "FONTWEIGHT": "bold",
          "COLOR": "#191919",
          "LINEHEIGHT": 20
        },
        "LINK": {
          "URL": "",
          "TARGET": "_blank"
        },
        "MAPPING": {
          "FIELD": "LEADING_NEWS"
        }
      }
    },
    {
      "CATEGORY": "바이라인",
      "ID": "TX10",
      "TITLE": "바이라인",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 200,
          "HEIGHT": 30,
          "BORDER": {
            "BORDERWIDTH": 0,
            "BORDERSTYLE": "none",
            "BORDERCOLOR": ""
          },
          "PADDING": {
            "PADDINGTOP": 0,
            "PADDINGRIGHT": 0,
            "PADDINGBOTTOM": 0,
            "PADDINGLEFT": 0
          },
          "MARGIN": {
            "MARGINTOP": 0,
            "MARGINRIGHT": 30,
            "MARGINBOTTOM": 0,
            "MARGINLEFT": 0
          },
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXTALIGN": "center"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONTFAMILY": "돋움",
          "FONTSIZE": 12,
          "FONTSTYLE": "normal",
          "FONTWEIGHT": "",
          "COLOR": "#191919",
          "LINEHEIGHT": 0
        },
        "LINK": {
          "URL": "",
          "TARGET": "_blank"
        },
        "MAPPING": {
          "FIELD": "BYLINE"
        }
      }
    },
    {
      "CATEGORY": "출처",
      "ID": "TX11",
      "TITLE": "출처",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 200,
          "HEIGHT": 30,

          "BORDER": {
            "BORDERWIDTH": 0,
            "BORDERSTYLE": "none",
            "BORDERCOLOR": ""
          },
          "PADDING": {
            "PADDINGTOP": 0,
            "PADDINGRIGHT": 0,
            "PADDINGBOTTOM": 0,
            "PADDINGLEFT": 0
          },
          "MARGIN": {
            "MARGINTOP": 0,
            "MARGINRIGHT": 30,
            "MARGINBOTTOM": 0,
            "MARGINLEFT": 0
          },
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXTALIGN": "center"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONTFAMILY": "돋움",
          "FONTSIZE": 12,
          "FONTSTYLE": "normal",
          "FONTWEIGHT": "",
          "COLOR": "#191919",
          "LINEHEIGHT": 0
        },
        "LINK": {
          "URL": "",
          "TARGET": "_blank"
        },
        "MAPPING": {
          "FIELD": "COPYRIGHT"
        }
      }
    },
    {
      "CATEGORY": "분류",
      "ID": "TX12",
      "TITLE": "분류",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 200,
          "HEIGHT": 30,
          "BORDER": {
            "BORDERWIDTH": 1,
            "BORDERSTYLE": "none",
            "BORDERCOLOR": "#4762ae"
          },
          "PADDING": {
            "PADDINGTOP": 0,
            "PADDINGRIGHT": 3,
            "PADDINGBOTTOM": 0,
            "PADDINGLEFT": 0
          },
          "MARGIN": {
            "MARGINTOP": 0,
            "MARGINRIGHT": 30,
            "MARGINBOTTOM": 0,
            "MARGINLEFT": 0
          },
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXTALIGN": "center"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONTFAMILY": "맑은 고딕",
          "FONTSIZE": 14,
          "FONTSTYLE": "normal",
          "FONTWEIGHT": "bold",
          "COLOR": "#4762ae",
          "LINEHEIGHT": 0
        },
        "LINK": {
          "URL": "",
          "TARGET": "_blank"
        },
        "MAPPING": {
          "FIELD": "CATEGORY"
        }
      }
    },
    {
      "CATEGORY": "라벨",
      "ID": "TX13",
      "TITLE": "라벨",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 200,
          "HEIGHT": 30,
          "BORDER": {
            "BORDERWIDTH": 1,
            "BORDERSTYLE": "none",
            "BORDERCOLOR": "#4762ae"
          },
          "PADDING": {
            "PADDINGTOP": 0,
            "PADDINGRIGHT": 3,
            "PADDINGBOTTOM": 0,
            "PADDINGLEFT": 0
          },
          "MARGIN": {
            "MARGINTOP": 0,
            "MARGINRIGHT": 30,
            "MARGINBOTTOM": 0,
            "MARGINLEFT": 0
          },
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXTALIGN": "center"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONTFAMILY": "맑은 고딕",
          "FONTSIZE": 14,
          "FONTSTYLE": "normal",
          "FONTWEIGHT": "bold",
          "COLOR": "#4762ae",
          "LINEHEIGHT": 0
        },
        "LINK": {
          "URL": "",
          "TARGET": "_blank"
        },
        "MAPPING": {
          "FIELD": "LABEL"
        }
      }
    }
    ],
    "IMAGE": [{
      "CATEGORY": "이미지일반",
      "ID": "I1",
      "TITLE": "이미지일반",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 180,
          "HEIGHT": 120,

          "BORDER": {
            "BORDERWIDTH": 0,
            "BORDERSTYLE": "none",
            "BORDERCOLOR": ""
          },
          "PADDING": {
            "PADDINGTOP": 0,
            "PADDINGRIGHT": 0,
            "PADDINGBOTTOM": 0,
            "PADDINGLEFT": 0
          },
          "MARGIN": {
            "MARGINTOP": 0,
            "MARGINRIGHT": 30,
            "MARGINBOTTOM": 0,
            "MARGINLEFT": 0
          },
          "BACKGROUND-COLOR": "#e5e5e5",
          "TEXTALIGN": "left"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONTFAMILY": "맑은 고딕",
          "FONTSIZE": 14,
          "FONTSTYLE": "normal",
          "FONTWEIGHT": "bold",
          "COLOR": "#4762ae",
          "LINEHEIGHT": 0
        },
        "LINK": {
          "URL": "",
          "TARGET": "_blank"
        },
        "MAPPING": {
          "FIELD": "LABEL"
        },
        "PHOTOINFO": {
          "PHOTODATE": "",
          "PHOTOPLACE": ""
        },
        "FILEINFO": {
          "FILENAME": "",
          "FILEPATH": "",
          "FILEFORMAT": "",
          "DESCRIPTION": "",
          "CAPTION": "",
          "FILESIZE": "",
          "RESOLUTION": ""
        },
        "WATERMARK": false
      }

    },
    {
      "CATEGORY": "이미지일반",
      "ID": "I2",
      "TITLE": "이미지일반2",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 180,
          "HEIGHT": 120,

          "BORDER": {
            "BORDERWIDTH": 0,
            "BORDERSTYLE": "none",
            "BORDERCOLOR": ""
          },
          "PADDING": {
            "PADDINGTOP": 0,
            "PADDINGRIGHT": 0,
            "PADDINGBOTTOM": 0,
            "PADDINGLEFT": 0
          },
          "MARGIN": {
            "MARGINTOP": 0,
            "MARGINRIGHT": 30,
            "MARGINBOTTOM": 0,
            "MARGINLEFT": 0
          },
          "BACKGROUND-COLOR": "#e5e5e5",
          "TEXTALIGN": "left"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONTFAMILY": "맑은 고딕",
          "FONTSIZE": 14,
          "FONTSTYLE": "normal",
          "FONTWEIGHT": "bold",
          "COLOR": "#4762ae",
          "LINEHEIGHT": 0
        },
        "LINK": {
          "URL": "",
          "TARGET": "_blank"
        },
        "MAPPING": {
          "FIELD": "LABEL"
        },
        "PHOTOINFO": {
          "PHOTODATE": "",
          "PHOTOPLACE": ""
        },
        "FILEINFO": {
          "FILENAME": "",
          "FILEPATH": "",
          "FILEFORMAT": "",
          "DESCRIPTION": "",
          "CAPTION": "",
          "FILESIZE": "",
          "RESOLUTION": ""
        },
        "WATERMARK": false
      }

    }
  ],
    "VIDEO": [{
      "CATEGORY": "동영상일반",
      "ID": "V1",
      "TITLE": "동영상일반",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 840,
          "HEIGHT": 470,

          "BORDER": {
            "BORDERWIDTH": 0,
            "BORDERSTYLE": "none",
            "BORDERCOLOR": ""
          },
          "PADDING": {
            "PADDINGTOP": 0,
            "PADDINGRIGHT": 0,
            "PADDINGBOTTOM": 0,
            "PADDINGLEFT": 0
          },
          "MARGIN": {
            "MARGINTOP": 0,
            "MARGINRIGHT": 30,
            "MARGINBOTTOM": 0,
            "MARGINLEFT": 0
          },
          "BACKGROUND-COLOR": "#000000",
          "TEXTALIGN": "left"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONTFAMILY": "맑은 고딕",
          "FONTSIZE": 14,
          "FONTSTYLE": "normal",
          "FONTWEIGHT": "bold",
          "COLOR": "#4762ae",
          "LINEHEIGHT": 0
        },
        "LINK": {
          "URL": "",
          "TARGET": "_blank"
        },
        "MAPPING": {
          "FIELD": "LABEL"
        },
        "PHOTOINFO": {
          "PHOTODATE": "",
          "PHOTOPLACE": ""
        },
        "FILEINFO": {
          "FILENAME": "",
          "FILEPATH": "",
          "FILEFORMAT": "",
          "FILESIZE": "",
          "DESCRIPTION": "",
          "RESOLUTION": "",
          "PLAYTIME": "",
          "HEADIMAGE": ""
        },
        "AUTOPLAY":false
      }
    },
    {
      "CATEGORY": "동영상일반",
      "ID": "V2",
      "TITLE": "동영상일반2",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 840,
          "HEIGHT": 470,

          "BORDER": {
            "BORDERWIDTH": 0,
            "BORDERSTYLE": "none",
            "BORDERCOLOR": ""
          },
          "PADDING": {
            "PADDINGTOP": 0,
            "PADDINGRIGHT": 0,
            "PADDINGBOTTOM": 0,
            "PADDINGLEFT": 0
          },
          "MARGIN": {
            "MARGINTOP": 0,
            "MARGINRIGHT": 30,
            "MARGINBOTTOM": 0,
            "MARGINLEFT": 0
          },
          "BACKGROUND-COLOR": "#000000",
          "TEXTALIGN": "left"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONTFAMILY": "맑은 고딕",
          "FONTSIZE": 14,
          "FONTSTYLE": "normal",
          "FONTWEIGHT": "bold",
          "COLOR": "#4762ae",
          "LINEHEIGHT": 0
        },
        "LINK": {
          "URL": "",
          "TARGET": "_blank"
        },
        "MAPPING": {
          "FIELD": "LABEL"
        },
        "PHOTOINFO": {
          "PHOTODATE": "",
          "PHOTOPLACE": ""
        },
        "FILEINFO": {
          "FILENAME": "",
          "FILEPATH": "",
          "FILEFORMAT": "",
          "FILESIZE": "",
          "DESCRIPTION": "",
          "RESOLUTION": "",
          "PLAYTIME": "",
          "HEADIMAGE": ""
        },
        "AUTOPLAY":false
      }
    }
    ],
    isTitle : false
  };

  //편집을 통해 component eidotr dialog open
  //dialog title (component 생성/ component 편집) 구분 위함
  componentWillMount() {
     if (this.props.isCreate === 'edit') {
      this.setState({ isTitle: true });
    }
  };

  render() {
    const addInfo = this.props.addInfo;
    //axio data 호출 (임시로 state)
    let stateData = [];
    let compoData = [];
    let compoId = '';
    let compoInfo = {};
    let attribute = {};
    let isText = false;
    let isImage = false; 
    let isVideo = false; 

    let idFirst = '';

    //선택한 component 유형과 같은 component search (ex 제목)
    if (addInfo.type === 'text') {
      stateData = this.state.TEXT;
      //compoData = stateData.filter(id => id.ID === addInfo.id);
      isText = true;
      idFirst = 'TX';

    } else if (addInfo.type === 'image') {
      stateData = this.state.IMAGE;
      //compoData = stateData.filter(id => id.ID === addInfo.id);
      isImage = true;
      idFirst = 'I';

    } else if (addInfo.type === 'video') {
      stateData = this.state.VIDEO;
      //compoData = stateData.filter(id => id.ID === addInfo.id);
      isVideo = true;
      idFirst = 'V';
    }
 
    //component type 추가 버튼을 통할 경우, ID가 없기 때문에 현재 종류 기준으로 data 조회
    if(this.props.isCreate === 'create'){
      compoData = stateData.filter(id => id.CATEGORY === addInfo.cate);
    } else {
      compoData = stateData.filter(id => id.ID === addInfo.id);
    }

    //component 생성일 경우 component new id 발번
    if (this.props.isCreate === 'copy' || this.props.isCreate === 'create') {

      const lastId = stateData[stateData.length-1].ID;
      let compId = '';

      if(addInfo.type === 'text'){
        compId = (lastId).substring(2, (lastId).length);
      }else{
        compId = (lastId).substring(1, (lastId).length);
      }

      //현재는 새로운 compoData[new]를 생성하지 못하고
      //---> 복제 또는 선택한 유형의 ID를 변경하는 것으로 대체 (only view)
      compoData[0].ID = idFirst + (parseInt(compId) + 1);
    } 

    return (
      <React.Fragment>
        <div className="Modal-overlay" />
        <div className="componentAddBox">
          <div className="componentAddTitle">{this.state.isTitle? 'Component 편집' : 'Component 생성'}
                    <button className="componentAdd_cancle" onClick={this.props.call}>X</button>
          </div>
          <div className="listSection">
            <div className="component_tab">Component</div>
            <ComponentList addInfo={addInfo} isCreate={this.props.isCreate}/>
          </div>
          <div className="componentAdding" id="componentAdding">
            {isText ? <AddingTx addInfo={addInfo} isCreate={this.props.isCreate} data={compoData[0]} /> : null}
            {isImage ? <AddingImg addInfo={addInfo} isCreate={this.props.isCreate} data={compoData[0]} /> : null}
            {isVideo ? <AddingVideo addInfo={addInfo} isCreate={this.props.isCreate} data={compoData[0]} /> : null}

          </div>
        </div>
      </React.Fragment>
    );
  }
}


export default ComponentAdd;