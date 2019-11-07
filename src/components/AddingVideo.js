import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './TemplateEditor.css';
import downArrow from '../img/arrow-down-sign-to-navigate.png';
import leftArray from '../img/aligned-to-the-left.png';
import centerArray from '../img/center-align.png';
import rightArray from '../img/align-text-right.png';
import justifyArray from '../img/justify.png';
import BorderPop from './BorderPop.js';
import PaddingPop from './PaddingPop.js';
import MarginPop from './MarginPop.js';
import ApplyPop from './ApplyPop.js';
import ColorPop from './ColorPop.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FileInfoPop_video from './FileInfoPop_video.js';

//Component Editor dialog
//Component Video 속성 view
const AddingVideo = (info) => {

    const compoName = info.addInfo.name;
    const compoType = info.addInfo.type;
    const compoCate = info.addInfo.cate;
    const compoId = info.data.ID;
    const attribute = info.data.ATTRIBUTE;

    const [isCreate, setCreate] = useState(info.isCreate);
    const [isReset, setReset] = useState(false);
    const [startDate, setStartDate] = useState(attribute.PHOTOINFO.PHOTODATE);
    const [isAutoPlay, setAutoPlay] = useState(attribute.AUTOPLAY);

    const [isIcon, setIcon] = useState({
        iconFront: false,
        iconBack: false
    });

    const [isTarget, setTarget] = useState({
        targetNew: false,
        targetNow: false
    });

    const [isIconUse, setIconUse] = useState(false);

    const [showPop, setShowPop] = useState({
        borderPop: false,
        paddingPop: false,
        marginPop: false,
        fileInfoPop: false,
        applyPop: false,
        colorPop: false
    });

    const [valEdit, setValue] = useState({
        Name: compoName,
        prop_width: attribute.BOX.WIDTH,
        prop_height: attribute.BOX.HEIGHT,
        size_input: attribute.FONT.FONTSIZE,
        line_height_input: attribute.FONT.LINEHEIGHT,
        url_input: attribute.LINK.URL,
        field_input: attribute.MAPPING.FIELD,
        photoPlace: attribute.PHOTOINFO.PHOTOPLACE,
        font_weight: attribute.FONT.FONTWEIGHT,
        font_family: attribute.FONT.FONTFAMILY,
        font_style: attribute.FONT.FONTSTYLE
    });

    const { Name, prop_width, prop_height, size_input, line_height_input, url_input, field_input, photoPlace, font_weight, font_family, font_style  } = valEdit;
    const { borderPop, paddingPop, marginPop, fileInfoPop, applyPop, colorPop } = showPop;
    const { iconFront, iconBack } = isIcon;
    const { targetNew, targetNow } = isTarget;

    //input text 관리
    const handleVal = (e) => {
        const newVal = {
            ...valEdit,
            [e.target.className]: e.target.value
        };

        setValue(newVal);
    };

    //select option 관리
    const handleChange = (e) => {

        const newVal = {
          ...valEdit,
          [e.target.id]: e.target.value
        };
    
        setValue(newVal);
    };

    //check box 관리
    const toggleChange = (e) => {
        const id = e.target.id;
        let nextChk = {};

        switch (id) {
            case 'iconFront':
                nextChk = {
                    ...isIcon,
                    iconFront: !iconFront,
                    iconBack: !iconBack
                };
                setIcon(nextChk);
                break;
            case 'iconBack':
                nextChk = {
                    ...isIcon,
                    iconBack: !iconBack,
                    iconFront: !iconFront
                };
                setIcon(nextChk);
                break;
            case 'targetNew':
                nextChk = {
                    ...isTarget,
                    targetNew: !targetNew,
                    targetNow: !targetNow
                };
                setTarget(nextChk);
                break;
            case 'targetNow':
                nextChk = {
                    ...isTarget,
                    targetNow: !targetNow,
                    targetNew: !targetNew
                };
                setTarget(nextChk);
                break;
            case 'iconUse':
                setIconUse(!isIconUse);
                break;
            case 'autoplay':
                setAutoPlay(!isAutoPlay);
                break;
            default: break;
        }
    };

    //pop show/hide 관리
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
            case 'applyPop':
                nextPop = {
                    ...showPop,
                    applyPop: !applyPop
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
    const styleFileInfoPop = fileInfoPop ? {} : { display: 'none' };
    const styleApplyPop = applyPop ? {} : { display: 'none' };
    const styleColorPop = colorPop ? {} : { display: 'none' };


    //초기화
    const handleReset = () => {
        //component 생성일 경우, 모든 값 0으로 초기화
        if (isCreate === 'copy' || isCreate === 'create') {
            setValue({
                Name: '',
                prop_width: 0,
                prop_height: 0,
                size_input: 0,
                line_height_input: 0,
                url_input: '',
                field_input: '',
                photoPlace: '',
                font_weight: 'normal',
                font_family: '돋음',
                font_style: 'normal'
            });

            let nextChk = {};
            nextChk = {
                iconFront: true,
                iconBack: false
            };
            setIcon(nextChk);
    
            nextChk = {
                targetNew: true,
                targetNow: false
            };
            setTarget(nextChk);

            setAutoPlay(false);
            setStartDate(0);

        //component 편집일 경우, 기존 값으로 초기화
        } else {
            setValue({
                Name: compoName,
                prop_width: attribute.BOX.WIDTH,
                prop_height: attribute.BOX.HEIGHT,
                size_input: attribute.FONT.FONTSIZE,
                line_height_input: attribute.FONT.LINEHEIGHT,
                url_input: attribute.LINK.URL,
                field_input: attribute.MAPPING.FIELD,
                photoPlace: attribute.PHOTOINFO.PHOTOPLACE,
                font_weight: attribute.FONT.FONTWEIGHT,
                font_family: attribute.FONT.FONTFAMILY,
                font_style: attribute.FONT.FONTSTYLE
            });

            let nextChk = {};
            let location = attribute.ICON.LOCATION;
            switch (location) {
                case 'front':
                    nextChk = {
                        iconFront: true,
                        iconBack: false
                    };
                    setIcon(nextChk);
                    break;
                case 'back':
                    nextChk = {
                        iconBack: true,
                        iconFront: false
                    };
                    setIcon(nextChk);
                    break;
                default: break;
            }

            let target = attribute.LINK.TARGET;
            switch (target) {
                case '_blank':
                    nextChk = {
                        targetNew: true,
                        targetNow: false
                    };
                    setTarget(nextChk);
                    break;
                case '_now':
                    nextChk = {
                        targetNow: true,
                        targetNew: false
                    };
                    setTarget(nextChk);
                    break;
                default: break;
            }
            setAutoPlay(attribute.AUTOPLAY);
            setStartDate(attribute.PHOTOINFO.PHOTODATE);
        }

        setShowPop({
            borderPop: false,
            paddingPop: false,
            marginPop: false,
            fileInfoPop: false,
            applyPop: false,
            colorPop: false
        });

        //추후 attribute에 field와 data 추가해야함!
        setIconUse(false);
        setReset(true);
    };

    useEffect(() => {
        setValue({
            Name: compoName,
            prop_width: attribute.BOX.WIDTH,
            prop_height: attribute.BOX.HEIGHT,
            size_input: attribute.FONT.FONTSIZE,
            line_height_input: attribute.FONT.LINEHEIGHT,
            url_input: attribute.LINK.URL,
            field_input: attribute.MAPPING.FIELD,
            photoPlace: attribute.PHOTOINFO.PHOTOPLACE,
            font_weight: attribute.FONT.FONTWEIGHT,
            font_family: attribute.FONT.FONTFAMILY,
            font_style: attribute.FONT.FONTSTYLE
        });

        setShowPop({
            borderPop: false,
            paddingPop: false,
            marginPop: false,
            fileInfoPop: false,
            applyPop: false,
            colorPop: false
        });

        setAutoPlay(attribute.AUTOPLAY);

        let nextChk = {};
        let location = attribute.ICON.LOCATION;
        switch (location) {
            case 'front':
                nextChk = {
                    iconFront: true,
                    iconBack: false
                };
                setIcon(nextChk);
                break;
            case 'back':
                nextChk = {
                    iconBack: true,
                    iconFront: false
                };
                setIcon(nextChk);
                break;
            default: break;
        }


        let target = attribute.LINK.TARGET;
        switch (target) {
            case '_blank':
                nextChk = {
                    targetNew: true,
                    targetNow: false
                };
                setTarget(nextChk);
                break;
            case '_now':
                nextChk = {
                    targetNow: true,
                    targetNew: false
                };
                setTarget(nextChk);
                break;
            default: break;
        }

        setStartDate(attribute.PHOTOINFO.PHOTODATE);

        //추후 attribute에 field와 data 추가해야함!
        setIconUse(false);

    }, [compoCate]);

    useEffect(() => {
        setReset(false);
      });

    return (
        <div className="AddingDiv">
            <div className="AddTitle">{Name}</div>
            <div className="Apply">아래 속성의 일부를 템플릿에 적용</div> <img className="applyPop" src={downArrow} alt={"down"} />
            <div className="useSection">
                <div className="CompoUse">사용</div>
                <input type="checkbox" id="iconUse" name="iconUse" onChange={toggleChange} checked={isIconUse}></input>
                <label for="iconUse"></label>
            </div>
            <div className="Add_property_section">
                <div className="ArrayLeft">
                    <div className="NameTitle">Component Name</div>
                    <div className="fullName">{compoType}-{compoCate}({compoId})</div>
                    <input className="Name" name="Name" value={Name} onChange={handleVal} />
                    <div className="default">Component 속성 고정</div> <img className="default_pop" src={downArrow} alt={"down"} onClick={() => handleOnClick('applyPop')} />
                    <div className="ApplyPop" style={styleApplyPop} >
                        <ApplyPop isReset={isReset} isCreate={isCreate}/>
                    </div>
                    <div className="boxTitle">Box</div>
                    <div className="prop_width_tx">width</div> <input className="prop_width" value={prop_width} onChange={handleVal} /><div className="prop_width_px">px</div>
                    <div className="prop_height_tx">height</div> <input className="prop_height" value={prop_height} onChange={handleVal} /><div className="prop_height_px">px</div>
                    <div className="borderTitle">border</div> <img className="border_pop" src={downArrow} alt={"down"} onClick={() => handleOnClick('borderPop')} />
                    <div id="border_section" style={styleBorderPop}>
                        <BorderPop borderInfo={attribute.BOX.BORDER} title={compoCate} isReset={isReset} isCreate={isCreate}/>
                    </div>
                    <div className="paddingTitle">padding</div> <img className="padding_pop" src={downArrow} alt={"down"} onClick={() => handleOnClick('paddingPop')} />
                    <div id="padding_section" style={stylePaddingPop}>
                        <PaddingPop paddingInfo={attribute.BOX.PADDING} title={compoCate} isReset={isReset} isCreate={isCreate}/>
                    </div>
                    <div className="marginTitle">margin</div> <img className="margin_pop" src={downArrow} alt={"down"} onClick={() => handleOnClick('marginPop')} />
                    <div id="margin_section" style={styleMarginPop}>
                        <MarginPop marginInfo={attribute.BOX.MARGIN} title={compoCate} isReset={isReset} isCreate={isCreate}/>
                    </div>
                    <div className="backgroundTitle">background-color</div>  <img className="color_pop" src={downArrow} alt={"down"} onClick={() => handleOnClick('colorPop')} />
                    <div id="background_section" style={styleColorPop}>
                        <ColorPop />
                    </div>
                    <div className="arrayBox">
                        <div className="arrayTitle">정렬</div>
                        <img id="img_left_array" src={leftArray} alt={"leftArray"} />
                        <img id="img_center_array" src={centerArray} alt={"centerArray"} />
                        <img id="img_right_array" src={rightArray} alt={"rightArray"} />
                        <img id="img_justify_array" src={justifyArray} alt={"justifyArray"} />
                        <div className="arraySection"></div>
                    </div>
                    <div className="iconTitle">Icon</div>
                    <select className="iconSection" defaultValue={attribute.ICON.TYPE}>
                        <option value="none">none</option>
                        <option value="PDF">PDF</option>
                        <option value="instagram">instagram</option>
                        <option value="facebook">facebook</option>
                        <option value="push_news">push news</option>
                    </select>
                    <input type="checkbox" id="iconFront" name="icon" value="front" checked={isIcon.iconFront} onChange={toggleChange}></input> <div className="front_tx">앞</div>
                    <div className="back_tx">뒤</div> <input type="checkbox" id="iconBack" name="icon" value="back" checked={isIcon.iconBack} onChange={toggleChange}></input>
                    <div className="fontSection">
                        <div className="fontTitle">Font</div>
                        <div className="size">size</div><input className="size_input" value={size_input} onChange={handleVal} /><div className="size_px">px</div>
                        <div className="line_height">line height</div><input className="line_height_input" value={line_height_input} onChange={handleVal} /><div className="line_height_px">px</div>
                        <div className="weight">weight</div><select id="font_weight" className="weightSection" value={font_weight} onChange={handleChange}>
                            <option value="normal">normal</option>
                            <option value="lighter">lighter</option>
                            <option value="bold">bold</option>
                        </select>
                        <div className="family">family</div>  <select id="font_family" className="familySection" value={font_family} onChange={handleChange}>
                            <option value="돋음">돋음</option>
                            <option value="궁서">궁서</option>
                            <option value="굴림">굴림</option>
                            <option value="맑음고딕">맑음고딕</option>
                        </select>
                        <div className="style">style</div> <select id="font_style" className="styleSection" value={font_style} onChange={handleChange}>
                            <option value="normal">normal</option>
                            <option value="italic">italic</option>
                            <option value="oblique">oblique</option></select>
                        <div className="color">color</div> <div className="colorSection"></div>
                    </div>
                </div>

                <div className="Img_ArrayRight">
                    <div className="linkTitle">Link</div>
                    <div className="url_tx">URL</div> <input className="url_input" value={url_input} onChange={handleVal} />
                    <div className="target_tx">Target</div>
                    <div className="targetNew_tx">새 창</div> <input type="checkbox" id="targetNew" name="target" value="new" checked={isTarget.targetNew} onChange={toggleChange}></input>
                    <div className="targetNow_tx">현재 창</div> <input type="checkbox" id="targetNow" name="target" value="now" checked={isTarget.targetNow} onChange={toggleChange}></input>
                    <div className="urlSection"></div>
                    <div className="mappingTitle">매핑정보</div>
                    <div className="field_tx">필드명</div> <input className="field_input" value={field_input} onChange={handleVal} />
                </div>
                <div className="ArrayImage">
                    <div className="photoInfoTitle">촬영정보</div>
                    <div className="photoDate_tx">촬영일시</div>
                    <DatePicker className="photoDate" dateFormat="yyyy/MM/dd" selected={startDate} onChange={date => setStartDate(date)} />
                    <div className="photoPlace_tx">촬영장소</div>
                    <input className="photoPlace" value={photoPlace} onChange={handleVal} />
                    <div className="fileInfoTitle">파일정보</div> <img id="img_down_file" src={downArrow} alt={"down"} onClick={() => handleOnClick('fileInfoPop')} />
                    <div id="fileInfo_section" style={styleFileInfoPop}>
                        <FileInfoPop_video fileInfo={attribute.FILEINFO} title={Name} isReset={isReset} isCreate={isCreate}/>
                    </div>
                    <div className="autoPlayTitle">자동재생</div> <input type="checkbox" id="autoplay" name="autoplay" value="autoplay" checked={isAutoPlay} onChange={toggleChange}></input>
                </div>
            </div>
            <div className="prop_button">
                <button className="prop_reset" onClick={handleReset}>초기화</button>
                <button className="prop_delete" >삭제</button>
                <button className="prop_save" >저장</button>
            </div>
        </div>
    );
};

export default AddingVideo; 