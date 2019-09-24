import React from 'react';
import './TemplateEditor.css';

const FileInfoPop_video = (e) => {
    return(
        <div className="pop_file_video">
          <div className="pop_file_video_name">file name</div>
          <input className="pop_file_video_name_input"/>
          <div className="pop_file_video_path">file path</div>
          <input className="pop_file_video_path_input"/>
          <div className="pop_file_video_format">file format</div>
          <input className="pop_file_video_format_input"/>
          <div className="pop_file_video_size">size</div>
          <input className="pop_file_video_size_input"/>
          <div className="pop_file_video_resolution">resolution</div>
          <input className="pop_file_video_resolution_input"/>
          <div className="pop_file_video_playtime">playtime</div>
          <input className="pop_file_video_playtime_input"/>
          <div className="pop_file_video_headImage">haed image</div>
          <input className="pop_file_video_headImage_input"/>
          <div className="pop_file_video_description">description</div>
          <textarea className="pop_file_video_description_tx"/>
        </div>
    );
};
export default FileInfoPop_video;
