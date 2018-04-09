import React, { Component } from 'react';
import {connect} from "dva";

import {Divider,Button} from "antd";

import YuangongGuanli from "../../containers/YuangongGuanli.js";
import YuangongTable from "./YuangongTable.js";
import YuangongXinxilLuru from "./YuangongXinxilLuru.js"
import YuangongXinxiXiugai from "./YuangongXinxiXiugai.js";
class Yuangongxinxi extends Component {
    constructor(props){
        super();
        this.state = {
            XinxiluruIsShow:false,
            XinxiXiugaiIsshow:false,
            _id:""
        }
        props.dispatch({"type":"yuangonglist/init"});
    }
    changeXinxiluruIsShow(v){
        this.setState({
            XinxiluruIsShow:v
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
        const {yuangong,dispatch} = this.props;
        return (
            <YuangongGuanli k="Yuangongxinxi" c="员工信息录入">
                <div>
                    <Divider>员工信息</Divider>


                    <Button
                    type="primary"
                    onClick={(e)=>{
                        this.changeXinxiluruIsShow(true)
                    }}
                    >员工信息录入</Button>
                    <YuangongXinxilLuru
                        XinxiluruIsShow={this.state.XinxiluruIsShow}
                        changeXinxiluruIsShow={this.changeXinxiluruIsShow.bind(this)}
                        dispatch={dispatch}
                    ></YuangongXinxilLuru>

                    {/* 信息展示 */}
                    <YuangongTable
                        yuangong={yuangong}
                        dispatch={dispatch}
                        changeXinxiXiugaiIsshow={this.changeXinxiXiugaiIsshow.bind(this)}
                        change_id={this.change_id.bind(this)}
                    ></YuangongTable>
                    {/* 员工信息修改 */}
                    <YuangongXinxiXiugai
                        _id={this.state._id}
                        yuangong={yuangong}
                        XinxiXiugaiIsshow={this.state.XinxiXiugaiIsshow}
                        changeXinxiXiugaiIsshow={this.changeXinxiXiugaiIsshow.bind(this)}
                        dispatch={dispatch}
                    ></YuangongXinxiXiugai>
                </div>
            </YuangongGuanli>
        )
    }
}
export default connect(
    ({yuangonglist})=>({
        yuangong:yuangonglist.yuangong
    })
)(Yuangongxinxi)