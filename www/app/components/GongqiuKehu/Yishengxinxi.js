import React, { Component } from 'react';
import {connect} from "dva";

import { Table, Icon, Divider,Button ,Modal,Input } from 'antd';
import { Popconfirm, message } from 'antd';
const Search = Input.Search;

import GongqiuKehu from "../../containers/GongqiuKehu.js";
import Yishengxinxi_XinxiXiugai from "./Yishengxinxi_XinxiXiugai";
import Yishengxinxi_XinxiLuru from "./Yishengxinxi_XinxiLuru";
import Yishengxinxi_MyTable from "./Yishengxinxi_MyTable";

class Yishengxinxi extends Component {
    constructor(props){
        super();
        this.state = {
            XinxiLuruIsShow:false,
            XinxiXiugaiIsshow:false,
            _id:""
        }
        props.dispatch({"type":"yishengxinxilist/init"});
        props.dispatch({"type":"yiyuanxinxilist/init"});
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
        const {dispatch,yishengxinxi,yiyuanxinxi} = this.props;
        const {XinxiLuruIsShow,XinxiXiugaiIsshow,_id} = this.state;
        return (
            <GongqiuKehu k="Yishengxinxi" c="医生信息">
                <div>
                    <Button
                         type="primary"
                         onClick={()=>{this.changeXinxiLuruIsShow(true)}}
                    >信息录入</Button>
                    <Yishengxinxi_XinxiLuru
                        dispatch={dispatch}
                        XinxiLuruIsShow={XinxiLuruIsShow}
                        changeXinxiLuruIsShow={this.changeXinxiLuruIsShow.bind(this)}
                        yiyuanxinxi={yiyuanxinxi}
                    ></Yishengxinxi_XinxiLuru>

                    <Yishengxinxi_MyTable
                        yishengxinxi={yishengxinxi}
                        changeXinxiXiugaiIsshow={this.changeXinxiXiugaiIsshow.bind(this)}
                        change_id={this.change_id.bind(this)}
                        dispatch={dispatch}
                    ></Yishengxinxi_MyTable>

                    <Yishengxinxi_XinxiXiugai
                        yishengxinxi={yishengxinxi}
                        dispatch={dispatch}
                        _id={_id}
                        XinxiXiugaiIsshow={XinxiXiugaiIsshow}
                        changeXinxiXiugaiIsshow={this.changeXinxiXiugaiIsshow.bind(this)}
                        yiyuanxinxi={yiyuanxinxi}
                    ></Yishengxinxi_XinxiXiugai>
                </div>
            </GongqiuKehu>
        )
    }
}
export default connect(
    ({yishengxinxilist,yiyuanxinxilist})=>({
        yishengxinxi:yishengxinxilist.yishengxinxi,
        yiyuanxinxi:yiyuanxinxilist.yiyuanxinxi
    })
)(Yishengxinxi)
