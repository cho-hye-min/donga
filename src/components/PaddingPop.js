import React, {useState, useEffect} from 'react';
import './TemplateEditor.css';

const PaddingPop = (padding) =>{

  const [valEdit, setValue] = useState({
    pop_padding_top_input: padding.paddingInfo.PADDINGTOP,
    pop_padding_right_input: padding.paddingInfo.PADDINGRIGHT,
    pop_padding_bottom_input: padding.paddingInfo.PADDINGBOTTOM,
    pop_padding_left_input: padding.paddingInfo.PADDINGLEFT
  });

  const {pop_padding_top_input, pop_padding_right_input, pop_padding_bottom_input, pop_padding_left_input} = valEdit;

  const handleVal = (e) => {
    const newVal = {
      ...valEdit,
      [e.target.className]: e.target.value
    };
    setValue(newVal);
  };

  useEffect(() => {
    setValue({
    pop_padding_top_input: padding.paddingInfo.PADDINGTOP,
    pop_padding_right_input: padding.paddingInfo.PADDINGRIGHT,
    pop_padding_bottom_input: padding.paddingInfo.PADDINGBOTTOM,
    pop_padding_left_input: padding.paddingInfo.PADDINGLEFT
    });
  }, [padding.title]); 
    return(
        <div className="pop_padding">
          <div className="pop_padding_top">padding-top</div>
          <input className="pop_padding_top_input" value={pop_padding_top_input} onChange={handleVal}/><div className="pop_padding_top_px">px</div>
          <div className="pop_padding_right">padding-right</div>
          <input className="pop_padding_right_input" value={pop_padding_right_input} onChange={handleVal}/><div className="pop_padding_right_px">px</div>
          <div className="pop_padding_bottom">padding-bottom</div>
          <input className="pop_padding_bottom_input" value={pop_padding_bottom_input} onChange={handleVal}/><div className="pop_padding_bottom_px">px</div>
          <div className="pop_padding_left">padding-left</div>
          <input className="pop_padding_left_input" value={pop_padding_left_input} onChange={handleVal}/><div className="pop_padding_left_px">px</div>
        
        </div>
    );
};

export default PaddingPop;
