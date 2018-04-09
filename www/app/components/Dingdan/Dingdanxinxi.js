import React, { Component } from 'react';
import {connect} from "dva";

import { Table, Icon, Divider,Button ,Modal,Input,Row,Col } from 'antd';
import { Popconfirm, message } from 'antd';
const Search = Input.Search;

import Dingdan from "../../containers/Dingdan.js";
import Dingdanxinxi_XinxiXiugai from "./Dingdanxinxi_XinxiXiugai";
import Dingdanxinxi_XinxiLuru from "./Dingdanxinxi_XinxiLuru";
import Dingdanxinxi_MyTable from "./Dingdanxinxi_MyTable";

import "./Dingdanxinxi.less";

class Dingdanxinxi extends Component {
    constructor(props){
        super();
        this.state = {
            XinxiLuruIsShow:false,
            XinxiXiugaiIsshow:false,
            _id:""
        }
        props.dispatch({"type":"dingdanxinxilist/init"});
        props.dispatch({"type":"yiyuanxinxilist/init"});
        props.dispatch({"type":"yishengxinxilist/init"});
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
        const {dispatch,dingdanxinxi,yiyuanxinxi,yishengxinxi,chanpingdingyi} = this.props;
        const {XinxiLuruIsShow,XinxiXiugaiIsshow,_id} = this.state;
        return (
            <Dingdan k="Dingdanxinxi" c="订单信息">
                <div>
                    <Row style={{"margin":"10px"}}>
                        <Col span={2}>
                            <Button
                                type="primary"
                                size= 'large'
                                onClick={()=>{this.changeXinxiLuruIsShow(true)}}
                            >添加订单</Button>
                        </Col>
                        <Col span={22}>
                        
                        </Col>
                    </Row>
                    <Dingdanxinxi_XinxiLuru
                        dispatch={dispatch}
                        XinxiLuruIsShow={XinxiLuruIsShow}
                        changeXinxiLuruIsShow={this.changeXinxiLuruIsShow.bind(this)}
                        yiyuanxinxi={yiyuanxinxi}
                        yishengxinxi={yishengxinxi}
                        chanpingdingyi={chanpingdingyi}
                    ></Dingdanxinxi_XinxiLuru>

                    <Dingdanxinxi_MyTable
                        dingdanxinxi={dingdanxinxi}
                        changeXinxiXiugaiIsshow={this.changeXinxiXiugaiIsshow.bind(this)}
                        change_id={this.change_id.bind(this)}
                        dispatch={dispatch}
                    ></Dingdanxinxi_MyTable>

                    <Dingdanxinxi_XinxiXiugai
                        dingdanxinxi={dingdanxinxi}
                        dispatch={dispatch}
                        _id={_id}
                        XinxiXiugaiIsshow={XinxiXiugaiIsshow}
                        changeXinxiXiugaiIsshow={this.changeXinxiXiugaiIsshow.bind(this)}
                        yiyuanxinxi={yiyuanxinxi}
                        yishengxinxi={yishengxinxi}
                        chanpingdingyi={chanpingdingyi}
                    ></Dingdanxinxi_XinxiXiugai>
                </div>
            </Dingdan>
        )
    }
}
export default connect(
    ({dingdanxinxilist,yiyuanxinxilist,yishengxinxilist,chanpingdingyilist})=>({
        dingdanxinxi:dingdanxinxilist.dingdanxinxi,
        yiyuanxinxi:yiyuanxinxilist.yiyuanxinxi,
        yishengxinxi:yishengxinxilist.yishengxinxi,
        chanpingdingyi:chanpingdingyilist.chanpingdingyi
    })
)(Dingdanxinxi)
