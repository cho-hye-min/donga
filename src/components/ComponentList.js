import React from 'react';
import ReactDOM from 'react-dom';
import './TemplateEditor.css';
import './TemplateEditor_main.css';
import Component_text from './Component_text.js';
import Component_image from './Component_image.js';
import Component_video from './Component_video.js';

//메소드 작성 (컴포넌트 유형 선택)
const handleComponentSel = (e) => {
  
  //this.setState({value: e.target.value});
  const val = e.target.value;

  switch(val){
    case "text":
      ReactDOM.render(<Component_text />, document.getElementById('component_list'));
      //<Component_text ref={(ref) => {this.newTemplate = ref}}/>
      break;
    case "image":
      ReactDOM.render(<Component_image />, document.getElementById('component_list'));
      break;
    case "video":
      ReactDOM.render(<Component_video />, document.getElementById('component_list'));
      break;
    default:
      break;
  }
}

const ComponentList = () => {

  return(
    <>
        <select className="component_type" defaultValue="text" onChange={handleComponentSel}>
            <option value="text">Text</option>
            <option value="image">Image</option>
            <option value="video">Video</option>
        </select>
        <div id="component_list"><Component_text></Component_text> </div>
    </>
);

};

export default ComponentList;
