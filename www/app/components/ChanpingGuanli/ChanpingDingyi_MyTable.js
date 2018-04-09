import React, { Component } from 'react';
import {Table,Button,Popconfirm,message} from "antd";

export default class ChanpingDingyi_MyTable extends Component {
    render() {
        function confirm(text) {
            message.success('删除成功');
            dispatch({"type":"chanpingdingyilist/deleteXinxi","_id":text})
        }
        const {dispatch,chanpingdingyi,changeXinxiXiugaiIsshow,change_id} = this.props;
        const columns = [{
            title: '名称',
            dataIndex: 'mingcheng',
            key: 'mingcheng',          
          },{
            title: '分类',
            dataIndex: 'fenlei',
            key: 'fenlei',          
          },{
            title: '单位',
            dataIndex: 'danwei',
            key: 'danwei',          
          },{
            title: '价格',
            dataIndex: 'jiage',
            key: 'jiage',          
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
                <Table columns={columns} dataSource={chanpingdingyi} rowKey="_id" />
            </div>
        )
    }
}
