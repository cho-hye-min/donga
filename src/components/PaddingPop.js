import React from 'react';
import './TemplateEditor.css';

const PaddingPop = (e) => {
    return(
        <div className="pop_padding">
          <div className="pop_padding_top">padding-top</div>
          <input className="pop_padding_top_input"/><div className="pop_padding_top_px">px</div>
          <div className="pop_padding_right">padding-right</div>
          <input className="pop_padding_right_input"/><div className="pop_padding_right_px">px</div>
          <div className="pop_padding_bottom">padding-bottom</div>
          <input className="pop_padding_bottom_input"/><div className="pop_padding_bottom_px">px</div>
          <div className="pop_padding_left">padding-left</div>
          <input className="pop_padding_left_input"/><div className="pop_padding_left_px">px</div>
        
        </div>
    );
};
export default PaddingPop;
