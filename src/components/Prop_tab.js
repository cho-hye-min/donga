import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import './TemplateEditor_main.css';
import './TemplateEditor.css';
import TemplateEditor_main from './TemplateEditor_main.js';
import Test_Component from './Test_Component.js';
import Test_Template from './Test_Template.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TemplateProp from './TemplateProp.js';

//Template Editor Main - right (Template & Component 속성 Tab)
class Prop_tab extends Component {
    state={
            active_prop: false
    };

    CustomTempTab = ({ children }) => (
        <Tab className={this.state.active_prop ? 'temp_prop' : 'template_prop'}
        onClick={this.handleProp}>
            {children}
        </Tab>
    );

    CustomCompoTab = ({ children }) => (
        <Tab className={this.state.active_prop ? 'com_prop' : 'component_prop'}
        onClick={this.handleProp}>
            {children}
        </Tab>
    );

    componentWillMount (){
        if (this.props.cate === 'component') {
            this.setState({ active_prop: true });
        }else if(this.props.cate === 'template'){
            this.setState({ active_prop: false });
        }
    };

    componentWillReceiveProps(nextProps){
        if (nextProps.cate === 'component') {
            this.setState({ active_prop: true });
        }else if(nextProps.cate  === 'template'){
            this.setState({ active_prop: false });
        }
    }

    //Tab 선택 시 css 변경
    handleProp = (e) => {
        const className = e.target.className;

        switch (className) {
            case "template_prop":
            case "temp_prop":
                if (className === 'temp_prop') {
                    //ReactDOM.render(<TemplateProp />, document.getElementById('prop_view'));
                    const currentState = this.state.active_prop;
                    this.setState({ active_prop: !currentState });
                }
                break;
            case "component_prop":
            case "com_prop":
                if (className === 'component_prop') {
                    //ReactDOM.render(<ComponentProp />, document.getElementById('prop_view'));
                    const currentState2 = this.state.active_prop;
                    this.setState({ active_prop: !currentState2 });
                }
                break;
        }
    };

    render() {
        this.CustomTempTab.tabsRole = 'Tab';
        this.CustomCompoTab.tabsRole = 'Tab';

        const tabListStyle = {
            borderBottom: 0,
            marginBottom: "0px"
        }
        return (
            <>
                <Tabs>
                    <TabList style={tabListStyle}>
                        <this.CustomTempTab>Template 속성</this.CustomTempTab>
                        <this.CustomCompoTab>Component 속성</this.CustomCompoTab>
                    </TabList>
                    < TabPanel >
                        <Test_Template info='empty' />
                    </ TabPanel>
                    < TabPanel>
                        <Test_Component info='empty'/>
                    </ TabPanel>
                </Tabs>
            </>
        );
    }
}

export default Prop_tab;