import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import styles from'./TemplateEditor_main.css';
import './TemplateEditor.css';
import TemplateEditor_main from './TemplateEditor_main.js';
import TemplateList from './TemplateList.js';
import ComponentList from './ComponentList.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import classNames from 'classnames';
const cx = classNames.bind(styles);

const tabStyle = {
    width: '135px',
    height: '22px',
    background: '#ffe6d5',
    float: 'left',
    marginTop: '-10.7px',
    borderRadius: '0.2rem',
    textAlign: 'center',
    paddingTop: '0.7rem',
    fontWeight: '550',
    fontSize: '14.5px',
    color: '#397c96'
};

const tabStyle2 = {
    width: '129px',
    height: '20px',
    background: '#e8e8e8',
    float: 'left',
    textAlign: 'center',
    paddingTop: '0.2rem',
    fontWeight: '550',
    fontSize: '14.5px',
    color: '#bfbfbf',
    marginTop: '-0.1rem'
};

class List_tab extends Component {
    state = {
        active_list: false
    };

    CustomTempTab = ({ children }) => (
        <Tab className={this.state.active_list ? 'temp_tab' : 'template_tab'}
        onClick={this.handleList}>
            {children}
        </Tab>
    );

    CustomCompoTab = ({ children }) => (
        <Tab className={this.state.active_list ? 'com_tab' : 'component_tab'}
        onClick={this.handleList}>
            {children}
        </Tab>
    );

    handleList = (e) => {
        const className = e.target.className;
        switch (className) {
            case "template_tab":
            case "temp_tab":
                if (className === 'temp_tab') {
                    const currentState = this.state.active_list;
                    this.setState({ active_list: !currentState });
                }
                break;
            case "component_tab":
            case "com_tab":
                if (className === 'component_tab') {
                    const currentState2 = this.state.active_list;
                    this.setState({ active_list: !currentState2 });
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

    return(
            <>
    <Tabs>
        <TabList style={tabListStyle}>
            <this.CustomTempTab>Template</this.CustomTempTab>
            <this.CustomCompoTab>Component</this.CustomCompoTab>
        </TabList>
        <TabPanel forceRender={true}>
            <TemplateList />
        </TabPanel>
        <TabPanel forceRender={true}>
            <ComponentList />
        </TabPanel>
    </Tabs>
            </>
        );
    }
}

export default List_tab;