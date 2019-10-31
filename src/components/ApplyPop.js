import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './TemplateEditor.css';

class ApplyPop extends Component{
    state = {
        checkedCount: 0,
        options:[
            {id: 'allCheck'},
            {id: 'applyIcon'},
            {id: 'boxWidth'},
            {id: 'boxHeight'},
            {id: 'boxBorder'},
            {id: 'boxPadding'},
            {id: 'boxMargin'},
            {id: 'backGround'},
            {id: 'boxArray'},
            {id: 'fontSize'},
            {id: 'lineHeight'},
            {id: 'weight'},
            {id: 'family'},
            {id: 'fontStyle'},
            {id: 'fontColor'},
            {id: 'applyUrl'},
            {id: 'applyTarget'},
            {id: 'mapping'},
        ]
    };
   
    toggleChange = (e) => {
        let clickedId = e.target.id;
        
        //전체선택
        if(clickedId === 'allCheck' && this.refs.allCheck.checked){
            for(let i=1; i<this.state.options.length; i++){
                let id = this.state.options[i].id;
                this.refs[id].checked = true;
            }
            this.setState({
                checkedCount: this.state.options.length -1
            });
        //전체해제
        }else if(clickedId === 'allCheck' && !this.refs.allCheck.Checked){
            for(let i=1; i<this.state.options.length; i++){
                let id = this.state.options[i].id;
                this.refs[id].checked = false;
            }
            this.setState({
                checkedCount: 0
            });
        }
    };

    render(){

    return(
        <React.Fragment>
            <div className="applyCreateBox">
                <input type="checkbox" id="allCheck" name="allCheck" onChange={this.toggleChange} ref='allCheck' />
                <label for="allCheck"></label>
                <div className="ApplyTitle">속성
                </div>
                <div className="ApplyList" >
                    <div className="applyIcon">Icon</div>
                    <input type="checkbox" id="applyIcon" name="applyIcon" onChange={this.toggleChange} ref='applyIcon' />
                    <label for="applyIcon"></label>
                    <div className="applyBox">Box</div>
                    <div className="apply_boxWidth">width</div>
                    <input type="checkbox" id="boxWidth" name="boxWidth" onChange={this.toggleChange} ref='boxWidth' />
                    <label for="boxWidth"></label>
                    <div className="apply_boxHeight">height</div>
                    <input type="checkbox" id="boxHeight" name="boxHeight" onChange={this.toggleChange} ref='boxHeight' />
                    <label for="boxHeight"></label>
                    <div className="apply_boxBorder">border</div>
                    <input type="checkbox" id="boxBorder" name="boxBorder" onChange={this.toggleChange} ref='boxBorder'/>
                    <label for="boxBorder"></label>
                    <div className="apply_boxPadding">padding</div>
                    <input type="checkbox" id="boxPadding" name="boxPadding" onChange={this.toggleChange} ref='boxPadding'/>
                    <label for="boxPadding"></label>
                    <div className="apply_boxMargin">margin</div>
                    <input type="checkbox" id="boxMargin" name="boxMargin" onChange={this.toggleChange} ref='boxMargin' />
                    <label for="boxMargin"></label>
                    <div className="apply_backGround">Back-ground</div>
                    <input type="checkbox" id="backGround" name="backGround" onChange={this.toggleChange} ref='backGround' />
                    <label for="backGround"></label>
                    <div className="apply_boxArray">정렬</div>
                    <input type="checkbox" id="boxArray" name="boxArray" onChange={this.toggleChange} ref='boxArray'/>
                    <label for="boxArray"></label>

                    <div className="applyFont">Font</div>
                    <div className="apply_fontSize">size</div>
                    <input type="checkbox" id="fontSize" name="fontSize" onChange={this.toggleChange} ref='fontSize'/>
                    <label for="fontSize"></label>
                    <div className="apply_lineHeight">line height</div>
                    <input type="checkbox" id="lineHeight" name="lineHeight" onChange={this.toggleChange} ref='lineHeight' />
                    <label for="lineHeight"></label>
                    <div className="apply_weight">weight</div>
                    <input type="checkbox" id="weight" name="weight" onChange={this.toggleChange} ref='weight'/>
                    <label for="weight"></label>
                    <div className="apply_family">family</div>
                    <input type="checkbox" id="family" name="family" onChange={this.toggleChange} ref='family'/>
                    <label for="family"></label>
                    <div className="apply_fontStyle">style</div>
                    <input type="checkbox" id="fontStyle" name="fontStyle" onChange={this.toggleChange} ref='fontStyle' />
                    <label for="fontStyle"></label>
                    <div className="apply_fontColor">color</div>
                    <input type="checkbox" id="fontColor" name="fontColor" onChange={this.toggleChange} ref='fontColor'/>
                    <label for="fontColor"></label>

                    <div className="applyLink">Link</div>
                    <div className="apply_url">URL</div>
                    <input type="checkbox" id="applyUrl" name="applyUrl" onChange={this.toggleChange} ref='applyUrl'/>
                    <label for="applyUrl"></label>
                    <div className="apply_target">Target</div>
                    <input type="checkbox" id="applyTarget" name="applyTarget" onChange={this.toggleChange} ref='applyTarget'/>
                    <label for="applyTarget"></label>

                    <div className="applyMapping">매핑정보</div>
                    <input type="checkbox" id="mapping" name="mapping" onChange={this.toggleChange} ref='mapping'/>
                    <label for="mapping"></label>
                </div>
            </div>
        </React.Fragment>
    );
}
}

/*const ApplyPop = () => {

    const [check, setCheck] = useState({
        allCheck: false,
        applyIcon: false,
        boxWidth: false,
        boxHeight: false,
        boxBorder: false,
        boxPadding: false,
        boxMargin: false,
        backGround: false,
        boxArray: false,
        fontSize: false,
        lineHeight: false,
        weight: false,
        family: false,
        fontStyle: false,
        fontColor: false,
        applyUrl: false,
        applyTarget: false,
        mapping: false,

    });

    
    const [checked, setChecked] = useState(false);

    const toggleChange = (e) => {
        if (e.target.className === 'allCheck') {
            const nowChk = check.allCheck;
            setCheck({
                allCheck: !nowChk,
                applyIcon: !nowChk,
                boxWidth: !nowChk,
                boxHeight: !nowChk,
                boxBorder: !nowChk,
                boxPadding: !nowChk,
                boxMargin: !nowChk,
                backGround: !nowChk,
                boxArray: !nowChk,
                fontSize: !nowChk,
                lineHeight: !nowChk,
                weight: !nowChk,
                family: !nowChk,
                fontStyle: !nowChk,
                fontColor: !nowChk,
                applyUrl: !nowChk,
                applyTarget: !nowChk,
                mapping: !nowChk,
            });
        }else{
           const { target: {checked} } = e;
           setChecked({checked});
        }
    };

    return(
        <React.Fragment>
            <div className="applyCreateBox">
                <input type="checkbox" id="allCheck" name="allCheck" onChange={toggleChange} checked={checked} />
                <label for="allCheck"></label>
                <div className="ApplyTitle">속성
                <img className="applyBtn" src={apply} alt={"apply"} />
                </div>
                <div className="ApplyList" >
                    <div className="applyIcon">Icon</div>
                    <input type="checkbox" id="applyIcon" name="applyIcon" onChange={toggleChange} checked={checked}  />
                    <label for="applyIcon"></label>
                    <div className="applyBox">Box</div>
                    <div className="apply_boxWidth">width</div>
                    <input type="checkbox" id="boxWidth" name="boxWidth" onChange={toggleChange} checked={checked} />
                    <label for="boxWidth"></label>
                    <div className="apply_boxHeight">height</div>
                    <input type="checkbox" id="boxHeight" name="boxHeight" onChange={toggleChange} checked={checked} />
                    <label for="boxHeight"></label>
                    <div className="apply_boxBorder">border</div>
                    <input type="checkbox" id="boxBorder" name="boxBorder" onChange={toggleChange} checked={checked} />
                    <label for="boxBorder"></label>
                    <div className="apply_boxPadding">padding</div>
                    <input type="checkbox" id="boxPadding" name="boxPadding" onChange={toggleChange} checked={checked} />
                    <label for="boxPadding"></label>
                    <div className="apply_boxMargin">margin</div>
                    <input type="checkbox" id="boxMargin" name="boxMargin" onChange={toggleChange} checked={checked} />
                    <label for="boxMargin"></label>
                    <div className="apply_backGround">Back-ground</div>
                    <input type="checkbox" id="backGround" name="backGround" onChange={toggleChange} checked={checked} />
                    <label for="backGround"></label>
                    <div className="apply_boxArray">정렬</div>
                    <input type="checkbox" id="boxArray" name="boxArray" onChange={toggleChange} checked={checked} />
                    <label for="boxArray"></label>

                    <div className="applyFont">Font</div>
                    <div className="apply_fontSize">size</div>
                    <input type="checkbox" id="fontSize" name="fontSize" onChange={toggleChange} checked={checked} />
                    <label for="fontSize"></label>
                    <div className="apply_lineHeight">line height</div>
                    <input type="checkbox" id="lineHeight" name="lineHeight" onChange={toggleChange} checked={checked}  />
                    <label for="lineHeight"></label>
                    <div className="apply_weight">weight</div>
                    <input type="checkbox" id="weight" name="weight" onChange={toggleChange} checked={checked} />
                    <label for="weight"></label>
                    <div className="apply_family">family</div>
                    <input type="checkbox" id="family" name="family" onChange={toggleChange} checked={checked} />
                    <label for="family"></label>
                    <div className="apply_fontStyle">style</div>
                    <input type="checkbox" id="fontStyle" name="fontStyle" onChange={toggleChange} checked={checked}  />
                    <label for="fontStyle"></label>
                    <div className="apply_fontColor">color</div>
                    <input type="checkbox" id="fontColor" name="fontColor" onChange={toggleChange} checked={checked} />
                    <label for="fontColor"></label>

                    <div className="applyLink">Link</div>
                    <div className="apply_url">URL</div>
                    <input type="checkbox" id="applyUrl" name="applyUrl" onChange={toggleChange} checked={checked} />
                    <label for="applyUrl"></label>
                    <div className="apply_target">Target</div>
                    <input type="checkbox" id="applyTarget" name="applyTarget" onChange={toggleChange} checked={checked} />
                    <label for="applyTarget"></label>

                    <div className="applyMapping">매핑정보</div>
                    <input type="checkbox" id="mapping" name="mapping" onChange={toggleChange} checked={checked} />
                    <label for="mapping"></label>
                </div>
            </div>
        </React.Fragment>
    );
};*/

export default ApplyPop;
