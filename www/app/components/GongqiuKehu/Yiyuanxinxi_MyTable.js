import React, { Component } from 'react';
import {Table,Button,Popconfirm,message} from "antd";

export default class Yiyuanxinxi_MyTable extends Component {
    render() {
        function confirm(text) {
            message.success('删除成功');
            dispatch({"type":"yiyuanxinxilist/deleteXinxi","_id":text})
        }
        const {dispatch,yiyuanxinxi,changeXinxiXiugaiIsshow,change_id} = this.props;
        const columns = [{
            title: '名称',
            dataIndex: 'mingcheng',
            key: 'mingcheng',          
          },{
            title: '地址',
            dataIndex: 'dizhi',
            key: 'dizhi',          
          },{
            title: '联系人',
            dataIndex: 'lianxiren',
            key: 'lianxiren',          
          },{
            title: '电话',
            dataIndex: 'dianhua',
            key: 'dianhua',          
          },{
            title: '是否通过审核',
            dataIndex: 'isshenhe',
            key: 'isshenhe',          
          },{
            title: '创建时间',
            dataIndex: 'chuangjianshijian',
            key: 'chuangjianshijian',          
          },{
            title: '更新时间',
            dataIndex: 'gengxinshijian',
            key: 'gengxinshijian',          
          },{
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
                >查看(修改)信息</Button>                       
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
                <Table columns={columns} dataSource={yiyuanxinxi} rowKey="_id" />
            </div>
        )
    }
}
