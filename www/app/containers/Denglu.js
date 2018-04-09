import React, { Component } from 'react';
import {connect} from "dva";
import {Col,Row,Button,Divider } from "antd"


import Background from "../../images/5.jpg";
import Admin_Denglu from "../components/Denglu/Admin_Denglu";
import Admin_Zhuce from "../components/Denglu/Admin_Zhuce";

class Denglu extends Component {
    constructor(){
        super();
        this.state={
            isShow:true
        }
    }
    changeIsShow(v){
        this.setState({
            isShow:v
        })
    }
    render() {
        const {dispatch,denglu} = this.props;
        // console.log(denglu)
        return (
                <div className="Denglu">
                    <div className="title">义齿制作信息管理系统</div>
                    <div className="dengluZhuce"  style={{ background:"#383e42", padding: '16px 16px 16px ',textAlign:"right" }}>
                    <Button 
                    type="primary" 
                    ghost
                    onClick={()=>{this.changeIsShow(true)}}
                    >登录</Button>
                    <Divider type="vertical" />
                    <Button 
                    type="primary"
                    ghost
                    onClick={()=>{this.changeIsShow(false)}}
                    >注册</Button>
                    </div>
                    {this.state.isShow
                    ?
                    <div className="Admin_Denglu">
                        <Admin_Denglu
                        dispatch={dispatch}
                        
                        ></Admin_Denglu>
                    </div>
                    :
                    <div className="Admin_Zhuce">
                        <Admin_Zhuce
                        dispatch={dispatch}
                        denglu={denglu}
                        changeIsShow={this.changeIsShow.bind(this)}
                        ></Admin_Zhuce>
                    </div>
                    }
                     
                                                               
                </div>
        )
    }
}
export default connect()(Denglu)