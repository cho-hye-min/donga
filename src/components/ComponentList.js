import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './TemplateEditor.css';
import './TemplateEditor_main.css';
import Component_text from './Component_text.js';
import Component_image from './Component_image.js';
import Component_video from './Component_video.js';


class ComponentList extends Component {
  state = {
    "TEXT": [{
      "ID": "C1",
      "TITLE": "제목",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 550,
          "HEIGHT": 40,
          "BORDER-WIDTH": 0,
          "BORDER-STYLE": "",
          "BORDER-COLOR": "",
          "PADDING-TOP": 0,
          "PADDING-RIGHT": 0,
          "PADDING-BOTTOM": 0,
          "PADDING-LEFT": 0,
          "MARGIN-TOP": 0,
          "MARGIN-RIGHT": 30,
          "MARGIN-BOTTOM": 0,
          "MARGIN-LEFT": 0,
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXT-ALIGN": ""
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONT-FAMILY": "맑은 고딕",
          "FONT-SIZE": 19,
          "FONT-STYLE": "normal",
          "FONT-WEIGHT": "bold",
          "COLOR": "#191919",
          "LINE-HEIGHT": 40
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
      "ID": "C2",
      "TITLE": "부제목",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 550,
          "HEIGHT": 40,
          "BORDER-WIDTH": 0,
          "BORDER-STYLE": "",
          "BORDER-COLOR": "",
          "PADDING-TOP": 0,
          "PADDING-RIGHT": 0,
          "PADDING-BOTTOM": 0,
          "PADDING-LEFT": 0,
          "MARGIN-TOP": 0,
          "MARGIN-RIGHT": 30,
          "MARGIN-BOTTOM": 0,
          "MARGIN-LEFT": 0,
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXT-ALIGN": ""
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONT-FAMILY": "맑은 고딕",
          "FONT-SIZE": 17,
          "FONT-STYLE": "normal",
          "FONT-WEIGHT": "bold",
          "COLOR": "#191919",
          "LINE-HEIGHT": 40
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
      "ID": "C3",
      "TITLE": "소제목",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 550,
          "HEIGHT": 40,
          "BORDER-WIDTH": 0,
          "BORDER-STYLE": "",
          "BORDER-COLOR": "",
          "PADDING-TOP": 0,
          "PADDING-RIGHT": 0,
          "PADDING-BOTTOM": 0,
          "PADDING-LEFT": 0,
          "MARGIN-TOP": 0,
          "MARGIN-RIGHT": 30,
          "MARGIN-BOTTOM": 0,
          "MARGIN-LEFT": 0,
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXT-ALIGN": ""
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONT-FAMILY": "맑은 고딕",
          "FONT-SIZE": 17,
          "FONT-STYLE": "normal",
          "FONT-WEIGHT": "bold",
          "COLOR": "#191919",
          "LINE-HEIGHT": 40
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
      "ID": "C4",
      "TITLE": "표제",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 550,
          "HEIGHT": 80,
          "BORDER-WIDTH": 0,
          "BORDER-STYLE": "",
          "BORDER-COLOR": "",
          "PADDING-TOP": 0,
          "PADDING-RIGHT": 0,
          "PADDING-BOTTOM": 0,
          "PADDING-LEFT": 0,
          "MARGIN-TOP": 20,
          "MARGIN-RIGHT": 30,
          "MARGIN-BOTTOM": 20,
          "MARGIN-LEFT": 30,
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXT-ALIGN": "center"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONT-FAMILY": "맑은 고딕",
          "FONT-SIZE": 15,
          "FONT-STYLE": "normal",
          "FONT-WEIGHT": "bold",
          "COLOR": "#191919",
          "LINE-HEIGHT": 40
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
      "ID": "C5",
      "TITLE": "본문",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 600,
          "HEIGHT": 800,
          "BORDER-WIDTH": 0,
          "BORDER-STYLE": "",
          "BORDER-COLOR": "",
          "PADDING-TOP": 10,
          "PADDING-RIGHT": 20,
          "PADDING-BOTTOM": 10,
          "PADDING-LEFT": 20,
          "MARGIN-TOP": 10,
          "MARGIN-RIGHT": 0,
          "MARGIN-BOTTOM": 0,
          "MARGIN-LEFT": 0,
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXT-ALIGN": "center"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONT-FAMILY": "맑은 고딕",
          "FONT-SIZE": 14,
          "FONT-STYLE": "normal",
          "FONT-WEIGHT": "bold",
          "COLOR": "#363636",
          "LINE-HEIGHT": 20
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
      "ID": "C6",
      "TITLE": "발문",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 500,
          "HEIGHT": 60,
          "BORDER-WIDTH": 0,
          "BORDER-STYLE": "",
          "BORDER-COLOR": "",
          "PADDING-TOP": 0,
          "PADDING-RIGHT": 0,
          "PADDING-BOTTOM": 0,
          "PADDING-LEFT": 0,
          "MARGIN-TOP": 20,
          "MARGIN-RIGHT": 30,
          "MARGIN-BOTTOM": 20,
          "MARGIN-LEFT": 30,
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXT-ALIGN": "center"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONT-FAMILY": "맑은 고딕",
          "FONT-SIZE": 14,
          "FONT-STYLE": "normal",
          "FONT-WEIGHT": "",
          "COLOR": "#191919",
          "LINE-HEIGHT": 40
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
      "ID": "C7",
      "TITLE": "날짜",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 200,
          "HEIGHT": 30,
          "BORDER-WIDTH": 0,
          "BORDER-STYLE": "",
          "BORDER-COLOR": "",
          "PADDING-TOP": 0,
          "PADDING-RIGHT": 0,
          "PADDING-BOTTOM": 0,
          "PADDING-LEFT": 0,
          "MARGIN-TOP": 0,
          "MARGIN-RIGHT": 0,
          "MARGIN-BOTTOM": 0,
          "MARGIN-LEFT": 0,
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXT-ALIGN": "center"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONT-FAMILY": "돋움",
          "FONT-SIZE": 12,
          "FONT-STYLE": "normal",
          "FONT-WEIGHT": "",
          "COLOR": "#8b8b8b",
          "LINE-HEIGHT": 0
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
      "ID": "C8",
      "TITLE": "관련기사",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 500,
          "HEIGHT": 40,
          "BORDER-WIDTH": 0,
          "BORDER-STYLE": "",
          "BORDER-COLOR": "",
          "PADDING-TOP": 0,
          "PADDING-RIGHT": 39,
          "PADDING-BOTTOM": 0,
          "PADDING-LEFT": 42,
          "MARGIN-TOP": 0,
          "MARGIN-RIGHT": 0,
          "MARGIN-BOTTOM": 10,
          "MARGIN-LEFT": 0,
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXT-ALIGN": "center"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONT-FAMILY": "맑은 고딕",
          "FONT-SIZE": 14,
          "FONT-STYLE": "normal",
          "FONT-WEIGHT": "",
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
      "ID": "C9",
      "TITLE": "주요기사",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 500,
          "HEIGHT": 61,
          "BORDER-WIDTH": 1,
          "BORDER-STYLE": "solid",
          "BORDER-COLOR": "#f2f3f5",
          "PADDING-TOP": 4,
          "PADDING-RIGHT": 0,
          "PADDING-BOTTOM": 4,
          "PADDING-LEFT": 0,
          "MARGIN-TOP": 0,
          "MARGIN-RIGHT": 0,
          "MARGIN-BOTTOM": 0,
          "MARGIN-LEFT": 0,
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXT-ALIGN": "center"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONT-FAMILY": "맑은 고딕",
          "FONT-SIZE": 15,
          "FONT-STYLE": "normal",
          "FONT-WEIGHT": "bold",
          "COLOR": "#191919",
          "LINE-HEIGHT": 20
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
      "ID": "C10",
      "TITLE": "바이라인",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 200,
          "HEIGHT": 30,
          "BORDER-WIDTH": 0,
          "BORDER-STYLE": "",
          "BORDER-COLOR": "",
          "PADDING-TOP": 0,
          "PADDING-RIGHT": 0,
          "PADDING-BOTTOM": 0,
          "PADDING-LEFT": 0,
          "MARGIN-TOP": 0,
          "MARGIN-RIGHT": 25,
          "MARGIN-BOTTOM": 0,
          "MARGIN-LEFT": 0,
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXT-ALIGN": "center"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONT-FAMILY": "돋움",
          "FONT-SIZE": 12,
          "FONT-STYLE": "normal",
          "FONT-WEIGHT": "",
          "COLOR": "#191919",
          "LINE-HEIGHT": 0
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
      "ID": "C11",
      "TITLE": "출처",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 200,
          "HEIGHT": 30,
          "BORDER-WIDTH": 0,
          "BORDER-STYLE": "",
          "BORDER-COLOR": "",
          "PADDING-TOP": 0,
          "PADDING-RIGHT": 0,
          "PADDING-BOTTOM": 0,
          "PADDING-LEFT": 0,
          "MARGIN-TOP": 0,
          "MARGIN-RIGHT": 25,
          "MARGIN-BOTTOM": 0,
          "MARGIN-LEFT": 0,
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXT-ALIGN": "center"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONT-FAMILY": "돋움",
          "FONT-SIZE": 12,
          "FONT-STYLE": "normal",
          "FONT-WEIGHT": "",
          "COLOR": "#191919",
          "LINE-HEIGHT": 0
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
      "ID": "C12",
      "TITLE": "분류",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 200,
          "HEIGHT": 30,
          "BORDER-WIDTH": 1,
          "BORDER-STYLE": "#4762ae",
          "BORDER-COLOR": "",
          "PADDING-TOP": 0,
          "PADDING-RIGHT": 3,
          "PADDING-BOTTOM": 0,
          "PADDING-LEFT": 0,
          "MARGIN-TOP": 0,
          "MARGIN-RIGHT": 0,
          "MARGIN-BOTTOM": 0,
          "MARGIN-LEFT": 0,
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXT-ALIGN": "center"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONT-FAMILY": "맑은 고딕",
          "FONT-SIZE": 14,
          "FONT-STYLE": "normal",
          "FONT-WEIGHT": "bold",
          "COLOR": "#4762ae",
          "LINE-HEIGHT": 0
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
      "ID": "C13",
      "TITLE": "라벨",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 200,
          "HEIGHT": 30,
          "BORDER-WIDTH": 1,
          "BORDER-STYLE": "#4762ae",
          "BORDER-COLOR": "",
          "PADDING-TOP": 0,
          "PADDING-RIGHT": 3,
          "PADDING-BOTTOM": 0,
          "PADDING-LEFT": 0,
          "MARGIN-TOP": 0,
          "MARGIN-RIGHT": 0,
          "MARGIN-BOTTOM": 0,
          "MARGIN-LEFT": 0,
          "BACKGROUND-COLOR": "#FFFFFF",
          "TEXT-ALIGN": "center"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONT-FAMILY": "맑은 고딕",
          "FONT-SIZE": 14,
          "FONT-STYLE": "normal",
          "FONT-WEIGHT": "bold",
          "COLOR": "#4762ae",
          "LINE-HEIGHT": 0
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
      "ID": "C14",
      "TITLE": "이미지일반",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 180,
          "HEIGHT": 120,
          "BORDER-WIDTH": 0,
          "BORDER-STYLE": "",
          "BORDER-COLOR": "",
          "PADDING-TOP": 0,
          "PADDING-RIGHT": 0,
          "PADDING-BOTTOM": 0,
          "PADDING-LEFT": 0,
          "MARGIN-TOP": 0,
          "MARGIN-RIGHT": 20,
          "MARGIN-BOTTOM": 0,
          "MARGIN-LEFT": 0,
          "BACKGROUND-COLOR": "#e5e5e5",
          "TEXT-ALIGN": "left"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONT-FAMILY": "맑은 고딕",
          "FONT-SIZE": 14,
          "FONT-STYLE": "normal",
          "FONT-WEIGHT": "bold",
          "COLOR": "#4762ae",
          "LINE-HEIGHT": 0
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
          "CAPTION": "",
          "WIDTH": "",
          "HEIGHT": "",
          "RESOLUTION": "",
          "WATERMARK": false
        }
      }

    }],
    "VIDEO": [{
      "ID": "C15",
      "TITLE": "동영상일반",
      "ATTRIBUTE": {
        "BOX": {
          "WIDTH": 840,
          "HEIGHT": 470,
          "BORDER-WIDTH": 0,
          "BORDER-STYLE": "",
          "BORDER-COLOR": "",
          "PADDING-TOP": 0,
          "PADDING-RIGHT": 0,
          "PADDING-BOTTOM": 0,
          "PADDING-LEFT": 0,
          "MARGIN-TOP": 0,
          "MARGIN-RIGHT": 0,
          "MARGIN-BOTTOM": 0,
          "MARGIN-LEFT": 0,
          "BACKGROUND-COLOR": "#000000",
          "TEXT-ALIGN": "left"
        },
        "ICON": {
          "NUMBER": "",
          "LOCATION": "front"
        },
        "FONT": {
          "FONT-FAMILY": "맑은 고딕",
          "FONT-SIZE": 14,
          "FONT-STYLE": "normal",
          "FONT-WEIGHT": "bold",
          "COLOR": "#4762ae",
          "LINE-HEIGHT": 0
        },
        "LINK": {
          "URL": "",
          "TARGET": "_blank"
        },
        "MAPPING": {
          "FIELD": "LABEL"
        },
        "FILEINFO": {
          "FILENAME": "",
          "FILEPATH": "",
          "FILEFORMAT": "",
          "FILESIZE": "",
          "DESCRIPTION": "",
          "RESOLUTION": "",
          "PLAYTIME": ""
        }
      }

    }
    ]
  }

  //메소드 작성 (컴포넌트 유형 선택)
handleComponentSel = (e) => {
  const val = e.target.value;

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

  render() {
    return (
      <>
        <select className="component_type" defaultValue="text" onChange={this.handleComponentSel}>
          <option value="text">Text</option>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
        <div id="component_list"><Component_text text_data={this.state.TEXT}></Component_text> </div>
      </>
    );
  }
}

export default ComponentList;
