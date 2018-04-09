import React, { Component } from 'react';
import {Table,Button,Popconfirm,message} from "antd";

export default class Ruku_MyTable extends Component {
    render() {
        function confirm(text) {
            message.success('删除成功');
            dispatch({"type":"yuancailiao_Rukulist/deleteXinxi","_id":text})
        }
        const {dispatch,yuancailiao_Ruku,changeXinxiXiugaiIsshow,change_id,changeChukuIsshow} = this.props;
        const columns = [{
            title: '材料',
            dataIndex: 'zhucai',
            key: 'zhucai',          
          },{
            title: '批次',
            dataIndex: 'pici',
            key: 'pici',          
          },{
            title: '数量',
            dataIndex: 'shuliang',
            key: 'shuliang',          
          },{
            title: '单价',
            dataIndex: 'danjia',
            key: 'danjia',          
          },{
            title: '入库时间',
            dataIndex: 'rukushijian',
            key: 'rukushijian',          
          },{
            title: '经销商',
            dataIndex: 'jingxiaoshang',
            key: 'jingxiaoshang',          
          },{
            title: '经办人',
            dataIndex: 'jingbanren',
            key: 'jingbanren',          
          },{
            title: '创建时间',
            dataIndex: 'chuangjianshijian',
            key: 'chuangjianshijian',
         },{
            title: '',
            dataIndex: '_id',
            key: 'xiugai',  
            render:(text,content)=>
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
            render:(text)=>
            <Popconfirm title="您确定要删除此条信息吗?" onConfirm={()=>{confirm(text)}}  okText="Yes" cancelText="No">
                    <Button 
                        type="primary"
                    >删除信息</Button>
            </Popconfirm>
                        
          }, {
            title: '',
            dataIndex: '_id',
            key: 'chuku',
            render:(text)=>
            <Button
                type="primary"
                onClick={()=>{
                    changeChukuIsshow(true);
                    change_id(text)
               }}  
            >出库</Button>
                        
          }];
        return (
            <div>
                <Table columns={columns} dataSource={yuancailiao_Ruku} rowKey="_id" />
            </div>
        )
    }
}
