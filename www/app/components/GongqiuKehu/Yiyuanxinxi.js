import React, { Component } from 'react';
import {connect} from "dva";

import { Table, Icon, Divider,Button ,Modal,Input } from 'antd';
import { Popconfirm, message } from 'antd';
const Search = Input.Search;

import GongqiuKehu from "../../containers/GongqiuKehu.js";
import Yiyuanxinxi_XinxiXiugai from "./Yiyuanxinxi_XinxiXiugai";
import Yiyuanxinxi_XinxiLuru from "./Yiyuanxinxi_XinxiLuru";
import Yiyuanxinxi_MyTable from "./Yiyuanxinxi_MyTable";

class Yiyuanxinxi extends Component {
    constructor(props){
        super();
        this.state = {
            XinxiLuruIsShow:false,
            XinxiXiugaiIsshow:false,
            _id:""
        }
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
        const {dispatch,yiyuanxinxi} = this.props;
        const {XinxiLuruIsShow,XinxiXiugaiIsshow,_id} = this.state;
        console.log(yiyuanxinxi)
        return (
            <GongqiuKehu k="Yiyuanxinxi" c="医院信息">
                <div>
                    <Button
                         type="primary"
                         onClick={()=>{this.changeXinxiLuruIsShow(true)}}
                    >信息录入</Button>
                    <Yiyuanxinxi_XinxiLuru
                        dispatch={dispatch}
                        XinxiLuruIsShow={XinxiLuruIsShow}
                        changeXinxiLuruIsShow={this.changeXinxiLuruIsShow.bind(this)}
                    ></Yiyuanxinxi_XinxiLuru>

                    <Yiyuanxinxi_MyTable
                        yiyuanxinxi={yiyuanxinxi}
                        changeXinxiXiugaiIsshow={this.changeXinxiXiugaiIsshow.bind(this)}
                        change_id={this.change_id.bind(this)}
                        dispatch={dispatch}
                    ></Yiyuanxinxi_MyTable>

                    <Yiyuanxinxi_XinxiXiugai
                        yiyuanxinxi={yiyuanxinxi}
                        dispatch={dispatch}
                        _id={_id}
                        XinxiXiugaiIsshow={XinxiXiugaiIsshow}
                        changeXinxiXiugaiIsshow={this.changeXinxiXiugaiIsshow.bind(this)}
                    ></Yiyuanxinxi_XinxiXiugai>
                </div>
            </GongqiuKehu>
        )
    }
}
export default connect(
    ({yiyuanxinxilist})=>({
        yiyuanxinxi:yiyuanxinxilist.yiyuanxinxi
    })
)(Yiyuanxinxi)
