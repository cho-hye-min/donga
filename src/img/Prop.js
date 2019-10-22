import React from 'react';
import ReactDOM from 'react-dom';
import './TemplateEditor.css';
import TemplateEditor_main from './TemplateEditor_main.js';
import Prop_text from './Prop_text.js';
import Prop_image from './Prop_image.js';
import Prop_video from './Prop_video.js';
import Prop_tab from './Prop_tab.js';
import TemplateProp from './TemplateProp.js';

const Prop = (data, type) => {

    let category = 'template';

    if (type === 'template') {
        ReactDOM.render(
            <TemplateProp info={data} />,
            document.getElementById('prop_view')
        );
        //category = 'template';
    } else {
        if (type === 'image') {
            ReactDOM.render(
                <Prop_image info={data} />,
                document.getElementById('prop_view')
            );
        } else if (type === 'video') {
            ReactDOM.render(
                <Prop_video info={data} />,
                document.getElementById('prop_view')
            );
        } else if(type === 'text'){
            ReactDOM.render(
                <Prop_text info={data} />,
                document.getElementById('prop_view')

            );
        }
        category = 'component';
    }

    ReactDOM.render(<Prop_tab type={category} />, document.getElementById('prop_edit'));
    return (
        <>
        </>
    );
};

export default Prop;