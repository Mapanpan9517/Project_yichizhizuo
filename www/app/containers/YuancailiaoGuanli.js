import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import {connect} from "dva";
import {push} from "react-router-redux";

import App from "./App";

class YuancailiaoGuanli extends Component {
    render() {
        console.log(this.props)
        return (
            <App k="YuancailiaoGuanli">
                <div>
                    <Layout>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                            mode="inline"
                            defaultSelectedKeys={[this.props.k]}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                            onClick={(e)=>{this.props.dispatch(push("/YuancailiaoGuanli/"+e.key))}}
                            >
                                <Menu.Item key="ZhucaiXinxi">
                                    <span>主材信息</span>
                                </Menu.Item>
                                <Menu.Item key="RukuChuku">
                                    <span>入库|出库</span>
                                </Menu.Item>
                                <Menu.Item key="KucunRizhi">
                                    <span>库存日志</span>
                                </Menu.Item>
                                
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                                <Breadcrumb.Item>原材料管理</Breadcrumb.Item>
                                <Breadcrumb.Item>{this.props.c}</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                                {this.props.children}
                            </Content>
                        </Layout>
                    </Layout>
                </div>
            </App>
        )
    }
}
export default connect()(YuancailiaoGuanli)