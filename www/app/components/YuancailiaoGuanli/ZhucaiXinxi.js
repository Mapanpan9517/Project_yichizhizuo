import React, { Component } from 'react';
import {connect} from "dva";

import { Table, Icon, Divider,Button ,Modal,Input } from 'antd';
import { Popconfirm, message } from 'antd';
const Search = Input.Search;

import YuancailiaoGuanli from "../../containers/YuancailiaoGuanli.js";
import ZhucaiXinxi_XinxiXiugai from "./ZhucaiXinxi_XinxiXiugai";
import ZhucaiXinxi_XinxiLuru from "./ZhucaiXinxi_XinxiLuru";
import ZhucaiXinxi_MyTable from "./ZhucaiXinxi_MyTable";

class ZhucaiXinxi extends Component {
    constructor(props){
        super();
        this.state = {
            XinxiLuruIsShow:false,
            XinxiXiugaiIsshow:false,
            _id:""
        }
        props.dispatch({"type":"zhucaixinxilist/init"});
    }
    changeXinxiLuruIsShow(v){
        this.setState({
            XinxiLuruIsShow:v
        })
    }
    changeXinxiXiugaiIsshow(v){
        this.setState({
            XinxiXiugaiIsshow:v
        })
    }
    change_id(v){
        this.setState({"_id":v})
    }
    render() {
        const {dispatch,zhucaixinxi} = this.props;
        const {XinxiLuruIsShow,XinxiXiugaiIsshow,_id} = this.state;
        return (
            <YuancailiaoGuanli k="ZhucaiXinxi" c="主材信息	">
                <div>
                    <Button
                         type="primary"
                         onClick={()=>{this.changeXinxiLuruIsShow(true)}}
                    >信息录入</Button>
                    <ZhucaiXinxi_XinxiLuru
                        dispatch={dispatch}
                        XinxiLuruIsShow={XinxiLuruIsShow}
                        changeXinxiLuruIsShow={this.changeXinxiLuruIsShow.bind(this)}
                    ></ZhucaiXinxi_XinxiLuru>

                    <ZhucaiXinxi_MyTable
                        zhucaixinxi={zhucaixinxi}
                        changeXinxiXiugaiIsshow={this.changeXinxiXiugaiIsshow.bind(this)}
                        change_id={this.change_id.bind(this)}
                        dispatch={dispatch}
                    ></ZhucaiXinxi_MyTable>

                    <ZhucaiXinxi_XinxiXiugai
                        zhucaixinxi={zhucaixinxi}
                        dispatch={dispatch}
                        _id={_id}
                        XinxiXiugaiIsshow={XinxiXiugaiIsshow}
                        changeXinxiXiugaiIsshow={this.changeXinxiXiugaiIsshow.bind(this)}
                    ></ZhucaiXinxi_XinxiXiugai>
                </div>
            </YuancailiaoGuanli>
        )
    }
}
export default connect(
    ({zhucaixinxilist})=>({
        zhucaixinxi:zhucaixinxilist.zhucaixinxi
    })
)(ZhucaiXinxi)
