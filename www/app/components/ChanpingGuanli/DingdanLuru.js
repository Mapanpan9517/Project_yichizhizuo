import React, { Component } from 'react';
import {connect} from "dva";

import { Table, Icon, Divider,Button ,Modal } from 'antd';
import { Popconfirm, message } from 'antd';
import { Form, Input, Row, Col, DatePicker } from 'antd';
const FormItem = Form.Item;

import ChanpingGuanli from "../../containers/ChanpingGuanli.js";

export default class DingdanLuru extends Component {
    constructor(){
        super();
    }
    render() {
        const {dispatch,yuancailiao} = this.props;
        // console.log(this.props);
        const columns = [{
            title: '原材料编号',
            dataIndex: 'bianhao',
            key: 'bianhao',          
          },{
            title: '原材料名称',
            dataIndex: 'mingcheng',
            key: 'mingcheng',          
          },{
            title: '成本',
            dataIndex: 'chengben',
            key: 'chengben',          
          },{
            title: '价格',
            dataIndex: 'jiage',
            key: 'jiage',          
          },{
            title: '入库数量',
            dataIndex: 'rukushuliang',
            key: 'rukushuliang',          
          },{
            title: '生产商',
            dataIndex: 'shengchanshang',
            key: 'shengchanshang',          
          },{
            title: '供货商',
            dataIndex: 'gonghuoshang',
            key: 'gonghuoshang',          
          },{
            title: '生产批号',
            dataIndex: 'shengchanpihao',
            key: 'shengchanpihao',          
          },{
            title: '注册证号',
            dataIndex: 'zhucezhenghao',
            key: 'zhucezhenghao',          
          }];
        return (
            <ChanpingGuanli k="DingdanLuru" c="订单录入">
                <div>
                <Form horizontal="true" className="ant-advanced-search-form">
    <Row gutter={16}>
      <Col sm={8}>
        <FormItem
          label="搜索名称"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
        >
          <Input placeholder="请输入搜索名称" size="default" />
        </FormItem>
        <FormItem
          label="较长搜索名称"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
        >
          <DatePicker size="default" />
        </FormItem>
        <FormItem
          label="搜索名称"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
        >
          <Input placeholder="请输入搜索名称" size="default" />
        </FormItem>
      </Col>
      <Col sm={8}>
        <FormItem
          label="搜索名称"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
        >
          <Input placeholder="请输入搜索名称" size="default" />
        </FormItem>
        <FormItem
          label="较长搜索名称"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
        >
          <DatePicker size="default" />
        </FormItem>
        <FormItem
          label="搜索名称"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
        >
          <Input placeholder="请输入搜索名称" size="default" />
        </FormItem>
      </Col>
      <Col sm={8}>
        <FormItem
          label="搜索名称"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
        >
          <Input placeholder="请输入搜索名称" size="default" />
        </FormItem>
        <FormItem
          label="较长搜索名称"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
        >
          <DatePicker size="default" />
        </FormItem>
        <FormItem
          label="搜索名称"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
        >
          <Input placeholder="请输入搜索名称" size="default" />
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span={12} offset={12} style={{ textAlign: 'right' }}>
        <Button type="primary" htmlType="submit">搜索</Button>
        <Button>清除条件</Button>
      </Col>
    </Row>
  </Form>
                    {/* <Table columns={columns} dataSource={dingdan} rowKey="_id" /> */}
                </div>
            </ChanpingGuanli>
        )
    }
}
