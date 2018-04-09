import React, { Component } from 'react';
import {Table,Button,Popconfirm,message} from "antd";

export default class Dingdanxinxi_MyTable extends Component {
    render() {
        function confirm(text) {
            message.success('删除成功');
            dispatch({"type":"dingdanxinxilist/deleteXinxi","_id":text})
        }
        const {dispatch,dingdanxinxi,changeXinxiXiugaiIsshow,change_id} = this.props;
        const columns = [{
            title: '订单类型',
            dataIndex: 'dingdanleixing',
            key: 'dingdanleixing',          
          },{
            title: '订单状态',
            dataIndex: 'dingdanzhuangtai',
            key: 'dingdanzhuangtai',          
          },{
            title: '是否试戴',
            dataIndex: 'shifoushidai',
            key: 'shifoushidai',          
          },{
            title: '医院',
            dataIndex: 'yiyuanxinxi',
            key: 'yiyuanxinxi',          
          },{
            title: '医生',
            dataIndex: 'yishengxinxi',
            key: 'yishengxinxi',          
          },{
            title: '产品',
            dataIndex: 'chanpin',
            key: 'chanpin', 
            render:(text,content)=>{
              return text+" x "+content["jiagongshuliang"]
            }         
          },{
            title: '支付状态',
            dataIndex: 'zhifuzhuangtai',
            key: 'zhifuzhuangtai',          
          },{
            title: '支付价格',
            dataIndex: 'zhifujiage',
            key: 'zhifujiage',          
          },{
            title: '交货时间',
            dataIndex: 'jiaohuoshijian',
            key: 'jiaohuoshijian',          
          },{
            title: '创建时间',
            dataIndex: 'chuangjianshijian',
            key: 'chuangjianshijian',          
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
                <Table columns={columns} dataSource={dingdanxinxi} rowKey="_id" />
            </div>
        )
    }
}
