import React from 'react';
import './TemplateEditor.css';

const MarginPop = (e) => {
    return(
        <div className="pop_margin">
          <div className="pop_margin_top">margin-top</div>
          <input className="pop_margin_top_input"/><div className="pop_margin_top_px">px</div>
          <div className="pop_margin_right">margin-right</div>
          <input className="pop_margin_right_input"/><div className="pop_margin_right_px">px</div>
          <div className="pop_margin_bottom">margin-bottom</div>
          <input className="pop_margin_bottom_input"/><div className="pop_margin_bottom_px">px</div>
          <div className="pop_margin_left">margin-left</div>
          <input className="pop_margin_left_input"/><div className="pop_margin_left_px">px</div>
        
        </div>
    );
};

export default MarginPop;
