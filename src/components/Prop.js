import React from 'react';
import ReactDOM from 'react-dom';
import './TemplateEditor.css';
import TemplateEditor_main from './TemplateEditor_main.js';
import Prop_text from './Prop_text.js';
import Prop_image from './Prop_image.js';
import Prop_video from './Prop_video.js';
import Prop_tab from './Prop_tab.js';

const Prop = (component, type) => {

    if(type === 'image'){
        ReactDOM.render(
            <Prop_image info={component}/>,
            document.getElementById('prop_view')
        );
    }else if(type === 'video'){
        ReactDOM.render(
            <Prop_video info={component}/>,
            document.getElementById('prop_view')
        );
    }else{
        ReactDOM.render(
            <Prop_text info={component}/>,
            document.getElementById('prop_view')
            
        );
        
        ReactDOM.render(<Prop_tab type='component'/>, document.getElementById('prop_edit')); 
    }
    return (
        <>
        </>
    );
};

export default Prop;