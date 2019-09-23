import React from 'react';
import './TemplateEditor.css';

/*const BorderPop = (e) => {
    return(
        <React.Fragment>
        <div className="Modal-overlay"/>
        <div className="Modal">
          <div className="pop_border_width">border-width</div>
          <input className="pop_border_width_input"/>
        </div>
        </React.Fragment>
    );
};*/

const BorderPop = (e) => {
    return(
        <div className="pop_border">
          <div className="pop_border_width">border-width</div>
          <input className="pop_border_width_input"/><div className="pop_border_width_px">px</div>
          <div className="pop_border_color">border-color</div>
          <div className="pop_border_color_section"></div>
          <div className="pop_border_style">border-style</div>
          <select className="pop_border_style_section" defaultValue="none">
              <option value="none">none</option>
              <option value="dashed">dashed</option>
              <option value="dotted">dotted</option>
              <option value="double">double</option>
              <option value="groove">groove</option>
            </select>
          
        </div>
    );
};
export default BorderPop;
