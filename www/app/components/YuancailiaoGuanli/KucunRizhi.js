
import React, { Component } from 'react';
import {connect} from "dva";
import {Table,Button,Popconfirm,message} from "antd";

import YuancailiaoGuanli from "../../containers/YuancailiaoGuanli.js";

class KucunRizhi extends Component {
    constructor(props){
        super();
        props.dispatch({"type":"kucunrizhilist/init"});
        props.dispatch({"type":"yuancailiao_Rukulist/init"});
    }
    render() {
        const {yuancailiao_Ruku} = this.props;
        // console.log(yuancailiao_Ruku)   
          const columns = [{
            title: '主材',
            dataIndex: 'zhucai',
            key: 'zhucai',
            width:"250px"
          },{
            title: '操作类型',
            dataIndex: 'caozuoleixing',
            key: 'caozuoleixing',
          },{
            title: '经办人',
            dataIndex: 'jingbanren',
            key: 'jingbanren',
          },{
            title: '数量',
            dataIndex: 'shuliang',
            key: 'shuliang',
            render:(text,content)=>{
                return content.caozuoleixing == "入库"?content.shuliang:content.chukushuliang
            }
          },{
            title: '总价',
            dataIndex: 'danjia',
            key: 'danjia',
            render:(text,content)=>{
                if(yuancailiao_Ruku){
                    var by = content["zhucai"];
                    var danjia = yuancailiao_Ruku.filter(item=>item.zhucai == by)[0]["danjia"];
                    return content.caozuoleixing == "入库"?content.shuliang*danjia:content.chukushuliang*danjia
                }
            }
          },{
            title: '操作时间',
            dataIndex: 'chuangjianshijian',
            key: 'chuangjianshijian',
          }];
        return (
            <YuancailiaoGuanli k="KucunRizhi" c="库存日志">
                <div>
                <Table dataSource={this.props.kucunrizhi} columns={columns} rowKey="_id"/>
                </div>
            </YuancailiaoGuanli>
        )
    }
}
export default connect(
    ({kucunrizhilist,yuancailiao_Rukulist})=>({
        kucunrizhi:kucunrizhilist.kucunrizhi,
        yuancailiao_Ruku:yuancailiao_Rukulist.yuancailiao_Ruku
    })
)(KucunRizhi)