import React, { Component } from 'react';
import {connect} from "dva";

import { Table, Icon, Divider,Button ,Modal,Input,Row,Col } from 'antd';
import { Popconfirm, message } from 'antd';
const Search = Input.Search;

import Shouye from "../../containers/Shouye.js";
import Shouyexinxi_Yuancailiao from "./Shouyexinxi_Yuancailiao.js";

class Shouyexinxi extends Component {
    constructor(props){
        super();

        props.dispatch({"type":"zhucaixinxilist/init"});
    }
    render() {
        const {zhucaixinxi} = this.props;
        if(!zhucaixinxi) return null;
        return (
            <Shouye k="Shouyexinxi" c="首页信息">
                <div>
                <Row>
                    <Col span={12}></Col>
                    <Col span={12}>
                        <Shouyexinxi_Yuancailiao
                        zhucaixinxi={zhucaixinxi}
                        ></Shouyexinxi_Yuancailiao>
                    </Col>
                </Row>
                </div>                   
            </Shouye>
        )
    }
}
export default connect(
    ({dingdanxinxilist,yiyuanxinxilist,yishengxinxilist,chanpingdingyilist,zhucaixinxilist})=>({
        dingdanxinxi:dingdanxinxilist.dingdanxinxi,
        yiyuanxinxi:yiyuanxinxilist.yiyuanxinxi,
        yishengxinxi:yishengxinxilist.yishengxinxi,
        chanpingdingyi:chanpingdingyilist.chanpingdingyi,
        zhucaixinxi:zhucaixinxilist.zhucaixinxi
    })
)(Shouyexinxi)
