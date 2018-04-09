import React, { Component } from 'react';
import {connect} from "dva";

import { Table, Icon, Divider,Button ,Modal,Input } from 'antd';
import { Popconfirm, message } from 'antd';
const Search = Input.Search;

import ChanpingGuanli from "../../containers/ChanpingGuanli.js";
import ChanpingFenlei_XinxiLuru from "./ChanpingFenlei_XinxiLuru.js";
import ChanpingFenlei_XinxiXiugai from "./ChanpingFenlei_XinxiXiugai.js";
import ChanpingFenlei_MyTable from "./ChanpingFenlei_MyTable.js";

class ChanpingFenlei extends Component {
    constructor(props){
        super();
        this.state = {
            XinxiLuruIsShow:false,
            XinxiXiugaiIsshow:false,
            _id:""
        }
        props.dispatch({"type":"chanpingfenleilist/init"});
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
        const {dispatch,chanpingfenlei} = this.props;
        const {XinxiLuruIsShow,XinxiXiugaiIsshow,_id} = this.state;
        return (
            <ChanpingGuanli k="ChanpingFenlei" c="产品分类">
                <div>
                    <Button
                         type="primary"
                         onClick={()=>{this.changeXinxiLuruIsShow(true)}}

                    >信息录入</Button>
                    <ChanpingFenlei_XinxiLuru
                        dispatch={dispatch}
                        XinxiLuruIsShow={XinxiLuruIsShow}
                        changeXinxiLuruIsShow={this.changeXinxiLuruIsShow.bind(this)}
                    ></ChanpingFenlei_XinxiLuru>

                    <ChanpingFenlei_MyTable
                        chanpingfenlei={chanpingfenlei}
                        changeXinxiXiugaiIsshow={this.changeXinxiXiugaiIsshow.bind(this)}
                        change_id={this.change_id.bind(this)}
                        dispatch={dispatch}
                    ></ChanpingFenlei_MyTable>

                    <ChanpingFenlei_XinxiXiugai
                        chanpingfenlei={chanpingfenlei}
                        dispatch={dispatch}
                        _id={_id}
                        XinxiXiugaiIsshow={XinxiXiugaiIsshow}
                        changeXinxiXiugaiIsshow={this.changeXinxiXiugaiIsshow.bind(this)}
                    ></ChanpingFenlei_XinxiXiugai>
                </div>
            </ChanpingGuanli>
        )
    }
}
export default connect(
    ({chanpingfenleilist})=>({
        chanpingfenlei:chanpingfenleilist.chanpingfenlei
    })
)(ChanpingFenlei)
