import React, { Component } from 'react';
import {InputNumber, Slider, Switch,DatePicker,Radio,Modal,Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import moment from 'moment';
import {push} from "react-router-redux";
const Option = Select.Option;
const RadioGroup = Radio.Group;
const createForm = Form.create;
const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;

class Admin_Denglu extends Component {
    constructor(){
        super();
        this.handleSubmit = (e) => {
            const { getFieldDecorator,getFieldsValue,resetFields,getFieldsError } = this.props.form;
            e.preventDefault();
            const {dispatch} = this.props;          
            this.props.form.validateFieldsAndScroll((err, values) => {
                if(!err){
                    $.post("/denglu",values,function(content){
                        const {result} = content;
                        if(result==0){
                            alert("用户名不存在");
                        }
                        if(result== -1){
                            alert("密码错误");
                        }
                        if(result==1){
                            alert("登录成功");
                            dispatch(push("/Shouye"))
                        }
                    })
                }
            });
          }
    }
    render() {
        const { getFieldDecorator,getFieldsValue,resetFields,getFieldsError } = this.props.form;
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                    {getFieldDecorator('userName', {
                    rules: [{ required: true, message: '请输入用户名！' }],
                    })(
                    <Input style={{"width":"300px"}}prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                    )}
                    </FormItem>
                    <FormItem>
                    {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码！' }],
                    })(
                    <Input style={{"width":"300px"}}prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                    )}
                    </FormItem>
                    
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                    </Button>
                </Form>
            </div>
        )
    }
}
const WrappedRegistrationForm = Form.create()(Admin_Denglu);
export default WrappedRegistrationForm;
