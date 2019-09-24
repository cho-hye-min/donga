import React from 'react';
import './TemplateEditor.css';

const FileInfoPop_image = (e) => {
    return(
        <div className="pop_file">
          <div className="pop_file_name">file name</div>
          <input className="pop_file_name_input"/>
          <div className="pop_file_path">file path</div>
          <input className="pop_file_path_input"/>
          <div className="pop_file_format">file format</div>
          <input className="pop_file_format_input"/>
          <div className="pop_file_caption">caption</div>
          <input className="pop_file_caption_input"/>
          <div className="pop_file_width">width</div>
          <input className="pop_file_width_input"/>
          <div className="pop_file_height">height</div>
          <input className="pop_file_height_input"/>
          <div className="pop_file_resolution">resolution</div>
          <input className="pop_file_resolution_input"/>
          <div className="pop_file_description">description</div>
          <textarea className="pop_file_description_tx"/>
        </div>
    );
};
export default FileInfoPop_image;
