import React, { Component, useState, useMemo, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Prop_text from './Prop_text.js';
import Prop_image from './Prop_image.js';
import Prop_video from './Prop_video.js';

class Test_Component extends Component{
        state={
            isText : false,
            isImage : false,
            isVideo : false
        };

    componentWillMount (){
            if(this.props.info === 'text'){
                this.setState({ isText: true });
                this.setState({ isImage: false });
                this.setState({ isVideo: false });
            }else if(this.props.info === 'image'){
                this.setState({ isText: false });
                this.setState({ isImage: true });
                this.setState({ isVideo: false });
            }else if(this.props.info === 'video'){
                this.setState({ isText: false });
                this.setState({ isImage: true });
                this.setState({ isVideo: false });
            }
        
    };

    componentWillReceiveProps(nextProps){
            if(nextProps.info === 'text'){
                this.setState({ isText: true });
                this.setState({ isImage: false });
                this.setState({ isVideo: false });
            }else if(nextProps.info === 'image'){
                this.setState({ isText: false });
                this.setState({ isImage: true });
                this.setState({ isVideo: false });
            }else if(nextProps.info === 'video'){
                this.setState({ isText: false });
                this.setState({ isImage: false });
                this.setState({ isVideo: true });
            }
        
    };

    render(){
        return (
            <>
                {this.state.isText ? <Prop_text info={this.props.data} /> : ''}
                {this.state.isImage ? <Prop_image info={this.props.data} /> : ''}
                {this.state.isVideo ? <Prop_video info={this.props.data} /> : ''}
            </>
        );
    }
}

/*
const Test_Component = (data) => {

    const [isCheck, setCheck] = useState({
        isText : false,
        isImage : false,
        isVideo : false
    });

    useEffect(() => {
        if(data.info === 'text'){
            setCheck({
                isText: true,
                isImage: false,
                isVideo: false
            });
        }else if(data.info === 'image'){
            setCheck({
                isText: false,
                isImage: true,
                isVideo: false
            });
        }else if(data.info === 'video'){
            setCheck({
                isText: false,
                isImage: false,
                isVideo: true
            });
        }
    },[]);

    useMemo(()=>{
        if(data.info === 'text'){
            this.setState({ isText: true });
            this.setState({ isImage: false });
            this.setState({ isVideo: false });
        }else if(data.info === 'image'){
            this.setState({ isText: false });
            this.setState({ isImage: true });
            this.setState({ isVideo: false });
        }else if(data.info === 'video'){
            this.setState({ isText: false });
            this.setState({ isImage: false });
            this.setState({ isVideo: true });
        }
    }, [data.info]);

   
    return(
        <>
            {isCheck.isText ? <Prop_text info={data} /> : ''}
            {isCheck.isImage ? <Prop_image info={data} /> : ''}
            {isCheck.isVideo ? <Prop_video info={data} /> : ''}
        </>
    );
};*/

export default Test_Component;