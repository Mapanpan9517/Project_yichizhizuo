import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import {connect} from "dva";
import {push} from "react-router-redux";

import App from "./App";

class ChanpingGuanli extends Component {
    render() {
        // console.log(this.props)
        return (
            <App k="ChanpingGuanli">
                <div>
                    <Layout>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                            mode="inline"
                            defaultSelectedKeys={[this.props.k]}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                            onClick={(e)=>{this.props.dispatch(push("/ChanpingGuanli/"+e.key))}}
                            >   
                                <Menu.Item key="ChanpingFenlei">
                                    <span>产品分类</span>
                                </Menu.Item>
                                <Menu.Item key="ChanpingDingyi">
                                    <span>产品定义</span>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                                <Breadcrumb.Item>产品管理</Breadcrumb.Item>
                                <Breadcrumb.Item>{this.props.c}</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content 
                            style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}
                            >
                                {this.props.children}
                            </Content>
                        </Layout>
                    </Layout>
                </div>
            </App>
        )
    }
}
export default connect()(ChanpingGuanli)
