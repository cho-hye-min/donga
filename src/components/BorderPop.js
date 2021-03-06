import React, { useState, useEffect } from 'react';
import './TemplateEditor.css';

//component 속성 - Border
const BorderPop = (border) => {
  const [width, setValue] = useState(border.borderInfo.BORDERWIDTH);
  const [borderStyle, setStyle] = useState(border.borderInfo.BORDERSTYLE);

  //select option 관리 (border style)
  const handleChange = (e) => {
    setStyle(e.target.value);
  }

  //input text 관리 (border width)
  const handleVal = (e) => {
    setValue(e.target.value);
  };

  //초기화
  useEffect(()=>{
    //component 생성일 경우, 모든 값 0으로 초기화
    if (border.isReset === true && (border.isCreate === 'copy' || border.isCreate === 'create')) {
      setValue(0);
      setStyle('none');
    //component 편집일 경우, 기존 값으로 초기화
    } else if (border.isReset === true) {
      setValue(border.borderInfo.BORDERWIDTH);
      setStyle(border.borderInfo.BORDERSTYLE);
    }
  });

  useEffect(() => {
    setValue(border.borderInfo.BORDERWIDTH);
    setStyle(border.borderInfo.BORDERSTYLE);
  }, [border.title]);

  return (
    <div className="pop_border">
      <div className="pop_border_width">border-width</div>
      <input className="pop_border_width_input" value={width} onChange={handleVal} /><div className="pop_border_width_px">px</div>
      <div className="pop_border_style">border-style</div>
      <select className="pop_border_style_section" value={borderStyle} onChange={handleChange}>
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
