import React, { Component } from 'react';

import {Table,Button,Popconfirm,message} from "antd";

import YuangongXinxilLuru from "./YuangongXinxilLuru.js";


export default class YuangongTable extends Component {
    constructor(){
        super();
    }
    render() {
        const {yuangong,dispatch,changeXinxiXiugaiIsshow,change_id} = this.props;
        function confirm(text) {
            // console.log(text)
            message.success('删除成功');
            dispatch({"type":"yuangonglist/deleteXinxi","_id":text})
        }
        // console.log(yuangong)
          const columns = [ {
            title: '工号',
            dataIndex: 'gonghao',
            key: 'gonghao',
          },{
            title: '姓名',
            dataIndex: 'xingming',
            key: 'xingming',
          }, {
            title: '性别',
            dataIndex: 'xingbie',
            key: 'xingbie',
          }, {
            title: '年龄',
            dataIndex: 'nianling',
            key: 'nianling',
          }, {
            title: '',
            dataIndex: '_id',
            key: 'xiugai',
            width:200,
            render:(text)=>
                <Button 
                     type="primary"
                     onClick={()=>{
                         changeXinxiXiugaiIsshow(true);
                         change_id(text)
                    }}                   
                >修改信息</Button>                       
          }, {
            title: '',
            dataIndex: '_id',
            key: 'shanchu',
            width:200,
            render:(text)=>
            <Popconfirm title="您确定要删除此条信息吗?" onConfirm={()=>{confirm(text)}}  okText="Yes" cancelText="No">
                    <Button 
                        type="primary"
                    >删除信息</Button>
            </Popconfirm>
                        
          }];
        return (
            <div>
                <Table dataSource={yuangong} columns={columns} rowKey="_id"/>               
            </div>
        )
    }
}
