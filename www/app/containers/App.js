import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import {push} from "react-router-redux";
import {connect} from "dva";

import Denglu from "./Denglu";
import "./App.less";



class App extends Component {
    constructor(){
        super();
    }
    render() {
        // console.log(this.props)
        return (
            <div>
              <Layout>
                <Header className="header">
                  <div className="logo">义齿制作管理系统</div>
                  <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={[this.props.k]}
                  style={{ lineHeight: '64px' }}
                  onClick = {(e)=>{this.props.dispatch(push(e.item.props.root))}}
                  >
                  <Menu.Item key="Shouye" root="/Shouye">首页</Menu.Item>
                  <Menu.Item key="Dingdan" root="/Dingdan/Dingdanxinxi">订单</Menu.Item>
                  <Menu.Item key="ChanpingGuanli" root="/ChanpingGuanli/Chanpingfenlei">产品管理</Menu.Item>
                  <Menu.Item key="YuancailiaoGuanli" root="/YuancailiaoGuanli/ZhucaiXinxi">原材料管理</Menu.Item>
                  <Menu.Item key="GongqiuKehu" root="/GongqiuKehu/Yiyuanxinxi">供求客户</Menu.Item>
                  <Menu.Item key="YuangongGuanli" root="/YuangongGuanli/Yuangongxinxi">员工管理</Menu.Item>
                  <Menu.Item key="ShujuChaxun" root="/ShujuChaxun/DingdanTongji">数据查询</Menu.Item>
                  <Menu.Item key="Bangzhu" root="/Bangzhu">帮助</Menu.Item>
                  </Menu>
                </Header>
                {this.props.children}
              </Layout>
            </div>
        )
    }
}
export default connect()(App)
