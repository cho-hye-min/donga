import React, { useState, useEffect } from 'react';
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
import FileInfoPop_video from './FileInfoPop_video.js';

const Prop_video = (component) => {
  const [startDate, setStartDate] = useState(new Date());
  //const title = component.info.TITLE;
  const id = component.info.ID;
  const attr = component.info.ATTRIBUTE;

  const [isChecked, setChecked] = useState({
    iconFront: true,
    iconBack: false,
    targetNew: true,
    targetNow:false
  });

  const toggleChange = (e) => {
    const id = e.target.id;
    const checked = isChecked.id;
    setChecked({ id : !checked});
  }

  const [showPop, setShowPop] = useState({
    borderPop: false,
    paddingPop: false,
    marginPop: false,
    fileInfoPop: false
  });

  const [valEdit, setValue] = useState({
    propName: component.info.TITLE,
    prop_width: attr.BOX.WIDTH,
    prop_height: attr.BOX.HEIGHT,
    size_input: attr.FONT.FONTSIZE,
    line_height_input: attr.FONT.LINEHEIGHT,
    url_input: attr.LINK.URL,
    field_input: attr.MAPPING.FIELD,
    photoPlace: attr.PHOTOINFO.PHOTOPLACE
  });

  const { propName, prop_width, prop_height, size_input, line_height_input, url_input, field_input, photoPlace } = valEdit;
  const { borderPop, paddingPop, marginPop, fileInfoPop } = showPop;

  const handleVal = (e) => {

    const newVal = {
      ...valEdit,
      [e.target.className]: e.target.value
    };

    setValue(newVal);

  };

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
      case 'fileInfoPop':
        nextPop = {
          ...showPop,
          fileInfoPop: !fileInfoPop
        };
        setShowPop(nextPop);
        break;
      default: break;
    }
  };

  const styleBorderPop = borderPop ? {} : { display: 'none' };
  const stylePaddingPop = paddingPop ? {} : { display: 'none' };
  const styleMarginPop = marginPop ? {} : { display: 'none' };
  const styleFileInfoPop = fileInfoPop ? {} : { display: 'none' };


  useEffect(() => {
    setValue({
      propName: component.info.TITLE,
      prop_width: attr.BOX.WIDTH,
      prop_height: attr.BOX.HEIGHT,
      size_input: attr.FONT.FONTSIZE,
      line_height_input: attr.FONT.LINEHEIGHT,
      url_input: attr.LINK.URL,
      field_input: attr.MAPPING.FIELD,
      photoPlace: attr.PHOTOINFO.PHOTOPLACE
    });

    setShowPop({
      borderPop: false,
      paddingPop: false,
      marginPop: false,
      fileInfoPop: false
    });

  }, [id]);

  return (
    <main>
      <div className="property_section">
        <input className="propName" placeholder={propName} /><div className="propTitle">{id}</div>
        <div className="boxTitle">Box</div>
        <div className="prop_width_tx">width</div> <input className="prop_width" value={prop_width} onChange={handleVal} /><div className="prop_width_px">px</div>
        <div className="prop_height_tx">height</div> <input className="prop_height" value={prop_height} onChange={handleVal} /><div className="prop_height_px">px</div>
        <div className="borderTitle">border</div> <img className="border_pop" src={downArrow} alt={"down"} onClick={() => handleOnClick('borderPop')} />
        <div id="border_section" style={styleBorderPop}>
          <BorderPop borderInfo={attr.BOX.BORDER} title={propName} />
        </div>
        <div className="paddingTitle">padding</div> <img className="padding_pop" src={downArrow} alt={"down"} onClick={() => handleOnClick('paddingPop')} />
        <div id="padding_section" style={stylePaddingPop}>
          <PaddingPop paddingInfo={attr.BOX.PADDING} title={propName} />
        </div>
        <div className="marginTitle">margin</div> <img className="margin_pop" src={downArrow} alt={"down"} onClick={() => handleOnClick('marginPop')} />
        <div id="margin_section" style={styleMarginPop}>
          <MarginPop marginInfo={attr.BOX.MARGIN} title={propName} />
        </div>
        <div className="backgroundTitle">background-color</div>
        <div id="background_section"></div>
        <div className="arrayTitle">정렬</div>
        <img id="img_left_array" src={leftArray} alt={"leftArray"} />
        <img id="img_center_array" src={centerArray} alt={"centerArray"} />
        <img id="img_right_array" src={rightArray} alt={"rightArray"} />
        <img id="img_justify_array" src={justifyArray} alt={"justifyArray"} />
        <div className="arraySection"></div>
        <div className="iconTitle">Icon</div>
        <select className="iconSection" defaultValue={attr.ICON.TYPE}>
          <option value="none">none</option>
          <option value="PDF">PDF</option>
          <option value="instagram">instagram</option>
          <option value="facebook">facebook</option>
          <option value="push_news">push news</option>
        </select>
        <input type="checkbox" id="iconFront" name="icon" value="front" checked={isChecked.iconFront} onChange={toggleChange}></input> <div className="front_tx">앞</div>
        <div className="back_tx">뒤</div> <input type="checkbox" id="iconBack" name="icon" value="back" checked={isChecked.iconBack} onChange={toggleChange}></input>
        <div className="fontTitle">Font</div>
        <div className="size">size</div><input className="size_input" value={size_input} onChange={handleVal} /><div className="size_px">px</div>
        <div className="line_height">line height</div><input className="line_height_input" value={line_height_input} onChange={handleVal} /><div className="line_height_px">px</div>
        <div className="weight">weight</div><select className="weightSection" defaultValue={attr.FONT.FONTWEIGHT}>
          <option value="normal">normal</option>
          <option value="lighter">lighter</option>
          <option value="bold">bold</option>
        </select>
        <div className="family">family</div>  <select className="familySection" defaultValue={attr.FONT.FONTFAMILY}>
          <option value="돋음">돋음</option>
          <option value="궁서">궁서</option>
          <option value="굴림">굴림</option>
          <option value="맑음고딕">맑음고딕</option>
        </select>
        <div className="style">style</div>
        <select className="styleSection" defaultValue={attr.FONT.FONTSTYLE}>
          <option value="normal">normal</option>
          <option value="italic">italic</option>
          <option value="oblique">oblique</option></select>
        <div className="color">color</div> <div className="colorSection"></div>
        <div className="linkTitle">Link</div>
        <div className="url_tx">URL</div> <input className="url_input" value={url_input} onChange={handleVal} />
        <div className="target_tx">Target</div>
        <div className="targetNew_tx">새 창</div> <input type="checkbox" id="targetNew" name="target" value="new" checked={isChecked.targetNew} onChange={toggleChange}></input>
        <div className="targetNow_tx">현재 창</div> <input type="checkbox" id="targetNow" name="target" value="now" checked={isChecked.targetNow} onChange={toggleChange}></input>
        <div className="urlSection"></div>
        <div className="mappingTitle">매핑정보</div>
        <div className="field_tx">필드명</div> <input className="field_input" value={field_input} onChange={handleVal} />
        <div className="photoInfoTitle">촬영정보</div>
        <div className="photoDate_tx">촬영일시</div>
        <DatePicker className="photoDate" dateFormat="yyyy/MM/dd" selected={startDate} onChange={date => setStartDate(date)} />
        <div className="photoPlace_tx">촬영장소</div>
        <input className="photoPlace" value={photoPlace} onChange={handleVal} />
        <div className="fileInfoTitle">파일정보</div> <img id="img_down_file" src={downArrow} alt={"down"} onClick={() => handleOnClick('fileInfoPop')} />
        <div id="fileInfo_section" style={styleMarginPop}>
          <FileInfoPop_video fileInfo={attr.FILEINFO} title={propName} />
        </div>
        <div className="autoPlayTitle">자동재생</div> <input type="checkbox" id="autoplay" name="autoplay" value="auto"></input>
      </div>
      <div className="prop_button">
        <button className="prop_reset" >초기화</button>
        <button className="prop_save" >저장</button>
      </div>
    </main>
  );
};

export default Prop_video;
