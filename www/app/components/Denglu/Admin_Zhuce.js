import React, { Component } from 'react';
import {InputNumber, Slider, Switch,DatePicker,Radio,Modal,Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import moment from 'moment';
import {push} from "react-router-redux";
const Option = Select.Option;
const RadioGroup = Radio.Group;
const createForm = Form.create;
const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;

class Admin_Zhuce extends Component {
    constructor(){
        super();
        this.handleSubmit = (e) => {
            const { getFieldDecorator,getFieldsValue,resetFields,getFieldsError } = this.props.form;
            e.preventDefault();
            const {dispatch,changeIsShow} = this.props;          
            this.props.form.validateFieldsAndScroll((err, values) => {
                if(!err){
                    $.post("/zhuce",values,function(content){
                        const {result} = content;
                        if(result==0){
                            alert("注册失败，用户名已存在");
                        }
                        if(result==1){
                            alert("注册成功");
                            changeIsShow(true)
                        }
                    })
                }
            });
          }
    }
    render() {
        const { getFieldDecorator,getFieldsValue,resetFields,getFieldsError } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 4 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 4 },   
                sm: { span: 10 },
            },
        };
        const {denglu} = this.props;
        if(denglu){
            var yong
        }
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem label="用户名" {...formItemLayout}>
                    {getFieldDecorator('userName', {
                    rules: [
                        { 
                            required: true, message: '请输入用户名！'
                        }, 
                      ],
                    })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                    )}
                    </FormItem>
                    <FormItem label="密码" {...formItemLayout}>
                    {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码！' }],
                    })(
                    <Input 
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    type="password" 
                    placeholder="密码" />
                    )}
                    </FormItem>
                    <FormItem label="确认密码" {...formItemLayout}>
                    {getFieldDecorator('querenPassword', {
                    rules: [
                        { 
                            required: true, message: '请再次输入密码！' 
                        }, 
                        {
                            // 验证密码
                            validator:(rule,value,callback)=>{
                                const { getFieldValue } = this.props.form;
                                if(value&&value !== getFieldValue("password")){
                                    callback("两次输入不一致")
                                }
                                callback();
                            }
                    }],
                    })(
                    <Input 
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    type="password" 
                    placeholder="确认密码"
                    />
                    )}
                    </FormItem>
                    
                    <Button 
                    type="primary" 
                    htmlType="submit" 
                    className="login-form-button"
                    style={{"marginLeft":'100px'}}
                    >
                    注册
                    </Button>
                </Form>
            </div>
        )
    }
}
const WrappedRegistrationForm = Form.create()(Admin_Zhuce);
export default WrappedRegistrationForm;
