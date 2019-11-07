import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './TemplateEditor.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import downArrow from '../img/arrow-down-sign-to-navigate.png';
import leftArray from '../img/aligned-to-the-left.png';
import centerArray from '../img/center-align.png';
import rightArray from '../img/align-text-right.png';
import justifyArray from '../img/justify.png';
import BorderPop from './BorderPop.js';
import PaddingPop from './PaddingPop.js';
import MarginPop from './MarginPop.js';
import ColorPop from './ColorPop.js';

//Template 속성 view
const TemplateProp = (template) => {

  const id = template.info.ID;
  const attr = template.info.ATTRIBUTE;

  const [isReset, setReset] = useState(false);
  const [startDate, setStartDate] = useState(attr.REGDATE);

  const [showPop, setShowPop] = useState({
    borderPop: false,
    paddingPop: false,
    marginPop: false,
    colorPop: false
  });

  const [valEdit, setValue] = useState({
    propName: template.info.TITLE,
    propRegName: attr.REGNAME,
    prop_width: attr.BOX.WIDTH,
    prop_height: attr.BOX.HEIGHT,
    field_input: attr.MAPPING.FIELD
  });

  const { propName, propRegName, prop_width, prop_height, field_input } = valEdit;
  const { borderPop, paddingPop, marginPop, colorPop } = showPop;

  //input text 관리
  const handleVal = (e) => {
    const newVal = {
      ...valEdit,
      [e.target.className]: e.target.value
    };

    setValue(newVal);
  };

  //border, padding, margin pop -> show / hide 관리
  const handleOnClick = data => {
    let nextPop = {};
    switch (data) {
      case 'borderPop':
        nextPop = {
          ...showPop,
          borderPop: !borderPop
        };
        setShowPop(nextPop);
        break;
      case 'paddingPop':
        nextPop = {
          ...showPop,
          paddingPop: !paddingPop
        };
        setShowPop(nextPop);
        break;
      case 'marginPop':
        nextPop = {
          ...showPop,
          marginPop: !marginPop
        };
        setShowPop(nextPop);
        break;
      case 'colorPop':
        nextPop = {
          ...showPop,
          colorPop: !colorPop
        };
        setShowPop(nextPop);
        break;
      default: break;
    }
  }

  const styleBorderPop = borderPop ? {} : { display: 'none' };
  const stylePaddingPop = paddingPop ? {} : { display: 'none' };
  const styleMarginPop = marginPop ? {} : { display: 'none' };
  const styleColorPop = colorPop ? {} : { display: 'none' };

  //초기화
  const handleReset = () => {
    setValue({
      propName: template.info.TITLE,
      propRegName: attr.REGNAME,
      prop_width: attr.BOX.WIDTH,
      prop_height: attr.BOX.HEIGHT,
      field_input: attr.MAPPING.FIELD
    });

    setShowPop({
      borderPop: false,
      paddingPop: false,
      marginPop: false,
      colorPop: false
    });

    setStartDate(attr.REGDATE);
    setReset(true);
  };

  useEffect(() => {
    setValue({
      propName: template.info.TITLE,
      propRegName: attr.REGNAME,
      prop_width: attr.BOX.WIDTH,
      prop_height: attr.BOX.HEIGHT,
      field_input: attr.MAPPING.FIELD
    });

    setShowPop({
      borderPop: false,
      paddingPop: false,
      marginPop: false,
      colorPop: false
    });

    setStartDate(attr.REGDATE);

  }, [id]);

  useEffect(() => {
    setReset(false);
  });

  let txComponents;
  let imgComponents;
  let vidComponents;

  //구성 컴포넌트 정리
  if (attr.COMPONENT.TEXT !== undefined) {
    txComponents = (attr.COMPONENT.TEXT).map(
      (txComponent) => (<ul className="ulTx">{txComponent.TITLE} ({txComponent.ID}) {txComponent.COUNT} </ul>));
  }

  if (attr.COMPONENT.IMAGE !== undefined) {
    imgComponents = (attr.COMPONENT.IMAGE).map(
      (imgComponent) => (<ul className="ulTx">{imgComponent.TITLE} ({imgComponent.ID}) {imgComponent.COUNT} </ul>));
  }

  if (attr.COMPONENT.VIDEO !== undefined) {
    vidComponents = (attr.COMPONENT.VIDEO).map(
      (vidComponent) => (<ul className="ulTx">{vidComponent.TITLE} ({vidComponent.ID}) {vidComponent.COUNT} </ul>));
  }

  return (
    <>
    <div className="TemplateProp">
      <div className="property_section">
        <input className="propName" value={propName} onChange={handleVal} /><div className="propTitle">{id}</div>
        <div className="boxTitle">Box</div>
        <div className="prop_width_tx">width</div> <input className="prop_width" value={prop_width} onChange={handleVal} /><div className="prop_width_px">px</div>
        <div className="prop_height_tx">height</div> <input className="prop_height" value={prop_height} onChange={handleVal} /><div className="prop_height_px">px</div>
        <div className="borderTitle">border</div> <img className="border_pop" src={downArrow} alt={"down"} onClick={() => handleOnClick('borderPop')} />
        <div id="border_section" style={styleBorderPop}>
          <BorderPop borderInfo={attr.BOX.BORDER} title={propName} isReset={isReset}/>
        </div>
        <div className="paddingTitle">padding</div> <img className="padding_pop" src={downArrow} alt={"down"} onClick={() => handleOnClick('paddingPop')} />
        <div id="padding_section" style={stylePaddingPop}>
          <PaddingPop paddingInfo={attr.BOX.PADDING} title={propName} isReset={isReset}/>
        </div>
        <div className="marginTitle">margin</div> <img className="margin_pop" src={downArrow} alt={"down"} onClick={() => handleOnClick('marginPop')} />
        <div id="margin_section" style={styleMarginPop}>
          <MarginPop marginInfo={attr.BOX.MARGIN} title={propName} isReset={isReset}/>
        </div>
        <div className="backgroundTitle">background-color</div> <img className="color_pop" src={downArrow} alt={"down"} onClick={() => handleOnClick('colorPop')} />
        <div id="background_section" style={styleColorPop}>
          <ColorPop/>
        </div>
        <div className="composition">구성 컴포넌트</div>
        <div className="tx">TEXT</div> <div className="txComp">{txComponents} </div>
        <div className="img">IMAGE</div> <div className="imgComp">{imgComponents}</div>
        <div className="vid">VIDEO</div> <div className="vidComp">{vidComponents}</div>

        <div className="regTitle">등록정보</div>
        <div className="regDateTx">등록일</div>
        <DatePicker className="regDate" dateFormat="yyyy/MM/dd" selected={startDate} onChange={date => setStartDate(date)} />

        <div className="regNameTx">등록자</div><input className="propRegName" value={propRegName} onChange={handleVal} />

        <div className="mappingTitle">매핑정보</div>
        <div className="field_tx">필드명</div> <input className="field_input" value={field_input} onChange={handleVal} />
      </div>
      <div className="prop_button">
        <button className="prop_reset" onClick={handleReset}>초기화</button>
        <button className="prop_delete" >삭제</button>
        <button className="prop_save" >저장</button>
      </div>
    </div>
    </>
  );
};

export default TemplateProp;


