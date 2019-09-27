import React, {useState, useEffect} from 'react';
import './TemplateEditor.css';

const MarginPop = (margin) => {

  const [valEdit, setValue] = useState({
    pop_margin_top_input: margin.marginInfo.MARGINTOP,
    pop_margin_right_input: margin.marginInfo.MARGINRIGHT,
    pop_margin_bottom_input: margin.marginInfo.MARGINBOTTOM,
    pop_margin_left_input: margin.marginInfo.MARGINLEFT
  });

  const { pop_margin_top_input, pop_margin_right_input, pop_margin_bottom_input, pop_margin_left_input } = valEdit;

  const handleVal = (e) => {

    const newVal = {
      ...valEdit,
      [e.target.className]: e.target.value
    };

    setValue(newVal);
  };

  useEffect(() => {
    setValue({
      pop_margin_top_input: margin.marginInfo.MARGINTOP,
      pop_margin_right_input: margin.marginInfo.MARGINRIGHT,
      pop_margin_bottom_input: margin.marginInfo.MARGINBOTTOM,
      pop_margin_left_input: margin.marginInfo.MARGINLEFT
    });
  }, [margin.title]); 

  return (
    <div className="pop_margin">
      <div className="pop_margin_top">margin-top</div>
      <input className="pop_margin_top_input" value={pop_margin_top_input} onChange={handleVal} /><div className="pop_margin_top_px">px</div>
      <div className="pop_margin_right">margin-right</div>
      <input className="pop_margin_right_input" value={pop_margin_right_input} onChange={handleVal} /><div className="pop_margin_right_px">px</div>
      <div className="pop_margin_bottom">margin-bottom</div>
      <input className="pop_margin_bottom_input" value={pop_margin_bottom_input} onChange={handleVal} /><div className="pop_margin_bottom_px">px</div>
      <div className="pop_margin_left">margin-left</div>
      <input className="pop_margin_left_input" value={pop_margin_left_input} onChange={handleVal} /><div className="pop_margin_left_px">px</div>

    </div>
  );

};

export default MarginPop;
