import React, { Component } from 'react';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import {connect} from "dva";
import {push} from "react-router-redux";


import App from "./App";

class GongqiuKehu extends Component {
    render() {
        return (
            <App k="GongqiuKehu">
                <div>
                    <Layout>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                            mode="inline"
                            defaultSelectedKeys={[this.props.k]}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                            onClick={(e)=>{this.props.dispatch(push("/GongqiuKehu/"+e.key))}}
                            >
                                <Menu.Item key="Yiyuanxinxi">
                                    <span>医院信息</span>
                                </Menu.Item>
                                <Menu.Item key="Yishengxinxi">
                                    <span>医生信息</span>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                                <Breadcrumb.Item>供求客户</Breadcrumb.Item>
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
export default connect()(GongqiuKehu)
