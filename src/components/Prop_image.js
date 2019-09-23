import React, {useState} from 'react';
import './TemplateEditor.css';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import downArrow from '../img/arrow-down-sign-to-navigate.png';
import leftArray from '../img/aligned-to-the-left.png';
import centerArray from '../img/center-align.png';
import rightArray from '../img/align-text-right.png';
import justifyArray from '../img/justify.png';

const Prop_image = (e) => {
    const [startDate, setStartDate] = useState(new Date());
    const title = (e.info).split('-');
    return(
        <main>  
            <div className="property_section">
            <div className="propTitle">{title[0]}</div>
            <input className="propName" placeholder={title[1]}/>
            <div className="boxTitle">Box</div>
            <div className="prop_width_tx">width</div> <input className="prop_width"/><div className="prop_width_px">px</div>
            <div className="prop_height_tx">height</div> <input className="prop_height"/><div className="prop_height_px">px</div>
            <div className="borderTitle">border</div> <img className="border_pop" src = {downArrow} alt={"down"} />
            <div id="border_section"></div>
            <div className="paddingTitle">padding</div> <img className="padding_pop" src = {downArrow} alt={"down"} />
            <div id="padding_section"></div>
            <div className="marginTitle">margin</div> <img className="margin_pop" src = {downArrow} alt={"down"} />
            <div id="margin_section"></div>
            <div className="backgroundTitle">background-color</div>
            <div className="background_section"></div>
            <div className="arrayTitle">정렬</div> 
            <img id="img_left_array" src = {leftArray} alt={"leftArray"} />
            <img id="img_center_array" src = {centerArray} alt={"centerArray"} />
            <img id="img_right_array" src = {rightArray} alt={"rightArray"} />
            <img id="img_justify_array" src = {justifyArray} alt={"justifyArray"} />
            <div className="arraySection"></div>
            <div className="iconTitle">Icon</div>
            <select className="iconSection" defaultValue="none">
              <option value="none">none</option>
              <option value="PDF">PDF</option>
              <option value="instagram">instagram</option>
              <option value="facebook">facebook</option>
              <option value="push_news">push news</option>
            </select>
            <input type="checkbox" id="icon_front" name="icon" value="front"></input> <div className="front_tx">앞</div>
            <div className="back_tx">뒤</div> <input type="checkbox" id="icon_back" name="icon" value="back"></input>
            <div className="fontTitle">Font</div>
            <div className="size">size</div><input className="size_input"/>
            <div className="weight">weight</div><input className="weight_input"/>
            <div className="family">family</div>  <select className="familySection" defaultValue="돋음">
              <option value="돋음">돋음</option>
              <option value="궁서">궁서</option>
              <option value="굴림">굴림</option>
              <option value="고딕">고딕</option>
            </select>
            <div className="style">style</div> <div className="styleSection"></div>
            <div className="color">color</div> <div className="colorSection"></div>
            <div className="linkTitle">Link</div> 
            <div className="url_tx">URL</div> <input className="url_input"/>
            <div className="target_tx">Target</div> 
            <div className="targetNew_tx">새 창</div> <input type="checkbox" id="targetNew" name="target" value="new"></input>
            <div className="targetNow_tx">현재 창</div> <input type="checkbox" id="targetNow" name="target" value="now"></input>
            <div className="urlSection"></div>
            <div className="mappingTitle">매핑정보</div> 
            <div className="field_tx">필드명</div> <input className="field_input"/>
            <div className="photoInfoTitle">촬영정보</div>
            <div className="photoDate_tx">촬영일시</div>
            <DatePicker className="photoDate" dateFormat="yyyy/MM/dd" selected={startDate} onChange={date => setStartDate(date)}/>
            <div className="photoPlace_tx">촬영장소</div>
            <input className="photoPlace"/>
            <div className="fileInfoTitle">파일정보</div> <img id="img_down_file" src = {downArrow} alt={"down"} />
            <div className="markTitle">워터마크</div> <input type="checkbox" id="mark" name="mark" value="mark"></input>
            </div>
            <div className="prop_button">
              <button className="prop_reset" >초기화</button>
              <button className="prop_save" >저장</button>
            </div>
        </main>
    );
};

export default Prop_image;
