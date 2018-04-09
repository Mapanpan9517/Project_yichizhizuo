import React, { Component } from 'react';
import {connect} from "dva";

import { Table, Icon, Divider,Button ,Modal,Input } from 'antd';
import { Popconfirm, message } from 'antd';
const Search = Input.Search;

import ChanpingGuanli from "../../containers/ChanpingGuanli.js";
import ChanpingDingyi_XinxiLuru from "./ChanpingDingyi_XinxiLuru.js";
import ChanpingDingyi_XinxiXiugai from "./ChanpingDingyi_XinxiXiugai.js";
import ChanpingDingyi_MyTable from "./ChanpingDingyi_MyTable.js";

class ChanpingDingyi extends Component {
    constructor(props){
        super();
        this.state = {
            XinxiLuruIsShow:false,
            XinxiXiugaiIsshow:false,
            _id:""
        }
        props.dispatch({"type":"chanpingfenleilist/init"});
        props.dispatch({"type":"zhucaixinxilist/init"});
        props.dispatch({"type":"chanpingdingyilist/init"});
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
        const {dispatch,chanpingdingyi,chanpingfenlei,zhucaixinxi} = this.props;
        const {XinxiLuruIsShow,XinxiXiugaiIsshow,_id} = this.state;
        return (
            <ChanpingGuanli k="ChanpingDingyi" c="产品定义">
                <div>
                    <Button
                         type="primary"
                         onClick={()=>{this.changeXinxiLuruIsShow(true)}}

                    >信息录入</Button>
                    <ChanpingDingyi_XinxiLuru
                        dispatch={dispatch}
                        XinxiLuruIsShow={XinxiLuruIsShow}
                        changeXinxiLuruIsShow={this.changeXinxiLuruIsShow.bind(this)}
                        chanpingfenlei={chanpingfenlei}
                        zhucaixinxi={zhucaixinxi}
                    ></ChanpingDingyi_XinxiLuru>

                    <ChanpingDingyi_MyTable
                        chanpingdingyi={chanpingdingyi}
                        changeXinxiXiugaiIsshow={this.changeXinxiXiugaiIsshow.bind(this)}
                        change_id={this.change_id.bind(this)}
                        dispatch={dispatch}
                    ></ChanpingDingyi_MyTable>

                    <ChanpingDingyi_XinxiXiugai
                        chanpingdingyi={chanpingdingyi}
                        dispatch={dispatch}
                        _id={_id}
                        XinxiXiugaiIsshow={XinxiXiugaiIsshow}
                        changeXinxiXiugaiIsshow={this.changeXinxiXiugaiIsshow.bind(this)}
                        chanpingfenlei={chanpingfenlei}
                        zhucaixinxi={zhucaixinxi}
                    ></ChanpingDingyi_XinxiXiugai>
                </div>
            </ChanpingGuanli>
        )
    }
}
export default connect(
    ({chanpingdingyilist,chanpingfenleilist,zhucaixinxilist})=>({
        chanpingdingyi:chanpingdingyilist.chanpingdingyi,
        chanpingfenlei:chanpingfenleilist.chanpingfenlei,
        zhucaixinxi:zhucaixinxilist.zhucaixinxi
    })
)(ChanpingDingyi)
