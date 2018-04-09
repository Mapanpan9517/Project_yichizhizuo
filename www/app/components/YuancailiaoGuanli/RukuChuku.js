import React, { Component } from 'react';
import {connect} from "dva";

import { Table, Icon, Divider,Button ,Modal,Input } from 'antd';
import { Popconfirm, message } from 'antd';
const Search = Input.Search;

import YuancailiaoGuanli from "../../containers/YuancailiaoGuanli.js";
import RuKu_XinxiLuru from "./RuKu_XinxiLuru";
import RuKu_MyTable from "./RuKu_MyTable";
import RuKu_XinxiXiugai from "./RuKu_XinxiXiugai";
import Chuku_XinxiLuru from "./Chuku_XinxiLuru";

import "./YuancailiaoRuku.less";


class RukuChuku extends Component {
    constructor(props){
        super();
        this.state = {
            XinxiLuruIsShow:false,
            XinxiXiugaiIsshow:false,
            ChukuIsshow:false,
            _id:""
        }
        props.dispatch({"type":"yuancailiao_Rukulist/init"});
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
    changeChukuIsshow(v){
        this.setState({
            ChukuIsshow:v
        })
    }
    render() {
        const {dispatch,yuancailiao_Ruku,zhucaixinxi} = this.props;
        const {ChukuIsshow,XinxiLuruIsShow,XinxiXiugaiIsshow,_id} = this.state;
        return (
            <YuancailiaoGuanli k="RukuChuku" c="入库|出库">
                <div>
                    <Button
                         type="primary"
                         onClick={()=>{this.changeXinxiLuruIsShow(true)}}

                    >信息录入</Button>
                    <Search
                        placeholder="输入编号或名称"
                        onSearch={value =>{
                            dispatch({"type":"yuancailiao_Rukulist/findXinxi","Tiaojian":value})
                        }}
                        enterButton
                        className="Ruku_Chazhao"
                        style={{ width: 400,display:"block" }}
                    />
                    <RuKu_XinxiLuru
                        dispatch={dispatch}
                        XinxiLuruIsShow={XinxiLuruIsShow}
                        changeXinxiLuruIsShow={this.changeXinxiLuruIsShow.bind(this)}
                        zhucaixinxi={zhucaixinxi}
                    ></RuKu_XinxiLuru>

                    <RuKu_MyTable
                        dispatch={dispatch}
                        yuancailiao_Ruku={yuancailiao_Ruku}
                        changeXinxiXiugaiIsshow={this.changeXinxiXiugaiIsshow.bind(this)}
                        change_id={this.change_id.bind(this)}
                        changeChukuIsshow={this.changeChukuIsshow.bind(this)}
                    ></RuKu_MyTable>

                    <RuKu_XinxiXiugai
                        XinxiXiugaiIsshow={XinxiXiugaiIsshow}
                        dispatch={dispatch}
                        yuancailiao_Ruku={yuancailiao_Ruku}
                        _id={_id}
                        changeXinxiXiugaiIsshow={this.changeXinxiXiugaiIsshow.bind(this)}
                    ></RuKu_XinxiXiugai>

                    <Chuku_XinxiLuru
                        ChukuIsshow={ChukuIsshow}
                        dispatch={dispatch}
                        yuancailiao_Ruku={yuancailiao_Ruku}
                        _id={_id}
                        changeChukuIsshow={this.changeChukuIsshow.bind(this)}
                        zhucaixinxi={zhucaixinxi}
                    ></Chuku_XinxiLuru>
                    
                </div>
            </YuancailiaoGuanli>
        )
    }
}
export default connect(
    ({yuancailiao_Rukulist,zhucaixinxilist})=>({
        yuancailiao_Ruku : yuancailiao_Rukulist.yuancailiao_Ruku,
        zhucaixinxi:zhucaixinxilist.zhucaixinxi
    })
)(RukuChuku)