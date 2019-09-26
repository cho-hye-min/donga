import React, {useState} from 'react';
import './TemplateEditor.css';

const BorderPop = (border) =>{

        const [border_width, setValue] = useState(border.borderInfo.BORDERWIDTH);

        const handleVal = (e) =>{
            setValue(e.target.value);
        };

        return(
            <div className="pop_border">
              <div className="pop_border_width">border-width</div>
              <input className="pop_border_width_input" value={border_width} onChange={handleVal}/><div className="pop_border_width_px">px</div>
              <div className="pop_border_style">border-style</div>
              <select className="pop_border_style_section" defaultValue={border.borderInfo.BORDERSTYLE}>
                  <option value="none">none</option>
                  <option value="dashed">dashed</option>
                  <option value="dotted">dotted</option>
                  <option value="double">double</option>
                  <option value="groove">groove</option>
                </select>
              <div className="pop_border_color">border-color</div>
              <div className="pop_border_color_section"></div>
              
              
            </div>
        );
};
export default BorderPop;
