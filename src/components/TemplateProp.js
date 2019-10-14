import React, {useState} from 'react';
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

const TemplateProp = () => {
    
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className="property_section">
        <input className="propName" /><div className="propTitle"></div>
        <div className="boxTitle">Box</div>
        <div className="prop_width_tx">width</div> <input className="prop_width" /><div className="prop_width_px">px</div>
        <div className="prop_height_tx">height</div> <input className="prop_height" /><div className="prop_height_px">px</div>
        <div className="borderTitle">border</div> <img className="border_pop" src={downArrow} alt={"down"}  />
        <div id="border_section" >
          
        </div>
        <div className="paddingTitle">padding</div> <img className="padding_pop" src={downArrow} alt={"down"}  />
        <div id="padding_section" >
          
        </div>
        <div className="marginTitle">margin</div> <img className="margin_pop" src={downArrow} alt={"down"}/>
        <div id="margin_section" >
         
        </div>
        <div className="backgroundTitle">background-color</div>
        <div id="background_section"></div>

        <div className="component">구성 컴포넌트</div> 


        <div className="regTitle">등록정보</div>
        <div className="regDateTx">등록일</div>
        <DatePicker className="regDate" dateFormat="yyyy/MM/dd" selected={startDate} onChange={date => setStartDate(date)} />

        <div className="regNameTx">등록자</div><input className="regName_input" />

        <div className="mappingTitle">매핑정보</div>
        <div className="field_tx">필드명</div> <input className="field_input"  />
      </div>
      <div className="prop_button">
        <button className="prop_reset" >초기화</button>
        <button className="prop_save" >저장</button>
      </div>
    </>
  );
};

export default TemplateProp;