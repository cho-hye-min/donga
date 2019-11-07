import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './TemplateEditor.css';
import './TemplateEditor_main.css';
import Component_text from './Component_text.js';
import Component_image from './Component_image.js';
import Component_video from './Component_video.js';

//Template Editor Main - left (Component List)
//Component List 정보 조회 (DB로부터) 및 List 버튼화
class ComponentList extends Component {
  state = {
    popEdit:false,
    popType:'',
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
          "BORDER":{
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
          "BORDER":{
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
          "BORDER":{
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
          "BORDER":{
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

          "BORDER":{
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

          "BORDER":{
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

          "BORDER":{
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
          "BORDER":{
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
          "BORDER":{
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

          "BORDER":{
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
          "BORDER":{
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
          "BORDER":{
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
      "CATEGORY":"이미지일반",
      "ID": "I1",
      "TITLE": "이미지일반",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 180,
          "HEIGHT": 120,

          "BORDER":{
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

          "BORDER":{
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

          "BORDER":{
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

          "BORDER":{
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
    ]
  }

//선택한 컴포넌트 유형(text, image, video)에 따른 component List 버튼화
handleComponentSel = (e) => {
  const val = e.target.value;
  if(e.target.className === 'pop_component_type'){
    this.setState({popEdit:true});
    this.setState({popType:val});
  }else{
    switch (val) {
      case "text":
        ReactDOM.render(<Component_text text_data={this.state.TEXT}/>, document.getElementById('component_list'));
        break;
      case "image":
        ReactDOM.render(<Component_image image_data={this.state.IMAGE}/>, document.getElementById('component_list'));
        break;
      case "video":
        ReactDOM.render(<Component_video video_data={this.state.VIDEO}/>, document.getElementById('component_list'));
        break;
      default:
        break;
    }
  }
}

  render() {
    let editType ='';
    let isText = true;
    let isImage = false;
    let isVideo = false;
    let isPop = false;
    let isEdit = false;
    let addInfo = {};

    //main화면에서 component Type 추가 버튼을 통해 component 편집 dialog open
    if(this.props.addInfo !== undefined && this.state.popEdit === false){
      isPop = true;
      addInfo = this.props.addInfo;
      editType = addInfo.type;

      if(addInfo.type === 'image'){
        isText = false;
        isImage = true;
        isVideo = false;
      }else if(addInfo.type === 'video'){
        isText = false;
        isImage = false;
        isVideo = true;
      }
    }

    //component 편집 dialog 내에서 type 선택
    if(this.state.popEdit === true){
      isPop = true;
      const popType = this.state.popType;
      editType = popType;

      if(popType === 'text'){
        isText = true;
        isImage = false;
        isVideo = false;
      }else if(popType === 'image'){
        isText = false;
        isImage = true;
        isVideo = false;
      }else if(popType === 'video'){
        isText = false;
        isImage = false;
        isVideo = true;
      }
    }

    //component list 우클릭 -> 편집 선택
    if(this.props.isCreate === 'edit'){
      isEdit = true;
    }

    return (
      <>
        <select className={isPop ? "pop_component_type" : "component_type"} defaultValue={editType} onChange={this.handleComponentSel}>
          <option value="text">Text</option>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
        <div id="component_list">
          {isText ? <Component_text text_data={this.state.TEXT} isPop={isPop} isEdit={isEdit} addInfo={addInfo}/> : null}
          {isImage ? <Component_image image_data={this.state.IMAGE} isPop={isPop} isEdit={isEdit} addInfo={addInfo} /> : null}
          {isVideo ? <Component_video video_data={this.state.VIDEO} isPop={isPop} isEdit={isEdit} addInfo={addInfo}/> : null}
        </div>
      </>
    );
  }
}

export default ComponentList;
