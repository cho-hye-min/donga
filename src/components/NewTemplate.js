import React, {Component} from 'react';
import './TemplateEditor.css';


class NewTemplate extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="Modal-overlay" />
                <div className="createBox">
                    <div className="templateId">Template 1</div>
                    <input className="templateName" placeholder="템플릿 이름" />
                    <div className="template_width_tx">width</div> <input className="template_width" /><div className="width_px">px</div>
                    <div className="template_height_tx">height</div> <input className="template_height" /><div className="height_px">px</div>
                    <button className="NewTemplate_cancle" onClick={this.props.handleNewTemplate}>취소</button>
                    <button className="NewTemplate_create">생성</button>
                </div>
            </React.Fragment>
        );
    }
}


export default NewTemplate;
