import React, { Component } from 'react';
var moment = require("moment");

import { Modal,Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,DatePicker  } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

import {push} from "react-router-redux";

class MyForm extends Component {
    constructor(){
        super();
        this.state={
            tiaozhuanIsShow:false
        }
        this.handleSubmit = (e) => {
            const { getFieldDecorator,getFieldsValue,resetFields,getFieldsError } = this.props.form;
            e.preventDefault();
            const {dispatch} = this.props;
            this.props.form.validateFieldsAndScroll((err, values) => {
              if (!err) {
                    var obj = values;
                    obj.lurushijian = moment(Number(values.lurushijian._d)).format("YYYY年MM月DD日")
                    dispatch({"type":"chanpinglist/AddXinxi","Xinxi":obj})
                    resetFields();
                    this.changeIsShow(true);
              }
            });
          }
    }
    changeIsShow(v){
        this.setState({
            tiaozhuanIsShow:v
        })
    }
    render() {
        const { getFieldDecorator,getFieldsValue,resetFields,getFieldsError } = this.props.form;

		const formItemLayout = {
			labelCol: {
				xs: { span: 4 },
				sm: { span: 4 },
			},
			wrapperCol: {
				xs: { span: 4 },   
				sm: { span: 10 },
			},
        };
        const options = [{
            value: '固定类',
            label: '固定类',
            children: [{
                value: '贵金属烤瓷',
                label: '贵金属烤瓷',
            },{
                value: '金属全冠',
                label: '金属全冠',
            },{
                value: '普通烤瓷',
                label: '普通烤瓷',
            },{
                value: '嵌体',
                label: '嵌体',
            },{
                value: '全瓷类',
                label: '全瓷类',
            },{
                value: '桩核',
                label: '桩核',
            }],
          }, {
            value: '活动类',
            label: '活动类',
            children: [{
                value: '钢托类',
                label: '钢托类',
            },{
                value: '胶托类',
                label: '胶托类',
            },{
                value: '精密附件',
                label: '精密附件',
            },{
                value: '排牙',
                label: '排牙',
            },{
                value: '隐形义齿',
                label: '隐形义齿',
            }],
          },{
            value: '正畸类',
            label: '正畸类',
            children: [{
                value: '保持器',
                label: '保持器',
            },{
                value: '附件类',
                label: '附件类',
            },{
                value: '功能矫治器',
                label: '功能矫治器',
            },{
                value: '螺旋扩大器',
                label: '螺旋扩大器',
            },{
                value: '膜片类',
                label: '膜片类',
            }],
          },{
            value: '种植类',
            label: '种植类',
            children: [{
                value: '基台类',
                label: '基台类',
            },{
                value: '种植附件',
                label: '种植附件',
            },{
                value: '种植冠',
                label: '种植冠',
            }],
          }];
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                        <FormItem
                            label="名称"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('mingcheng', {
                                    rules: [ 
                                        {
                                            required: true, message: '本项为必填项，请完成',
                                        }
                                    ]
                                })(<Input />)
                            }
                        </FormItem>
                        <FormItem
                            label="类型"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('leixing', {
                                    rules: [
                                        {
                                            required: true, 
                                            message: 'Please select your habitual residence!'
                                            
                                        }
                                    ]
                                })(<Cascader options={options}/>)
                            }
                        </FormItem>
                        <FormItem
                            label="产品代码"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('chanpindaima', {
                                    rules: [
                                        // {
                                        // 	pattern:/^([\u4e00-\u9fa5]){2,7}$/ , message: '请输入正确的中文姓名',
                                        // }, 
                                        {
                                            required: true, message: '本项为必填项，请完成',
                                        }
                                    ]
                                })(<Input />)
                            }
                        </FormItem>
                        <FormItem
                            label="材料"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('cailiao', {
                                    rules: [
                                        {
                                            required: true, message: '本项为必填项，请完成',
                                        }
                                    ]
                                })(<Input />)
                            }
                        </FormItem>
                        <FormItem
                            label="保质期"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('baozhiqi', {
                                    rules: [
                                        {
                                            required: true, message: '本项为必填项，请完成',
                                        }
                                    ]
                                })(<Input />)
                            }
                        </FormItem>
                        <FormItem
                            label="价格"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('jiage', {
                                    rules: [
                                        {
                                            required: true, message: '本项为必填项，请完成',
                                        }
                                    ]
                                })(<Input />)
                            }
                        </FormItem>
                        <FormItem
                            label="录入时间"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('lurushijian', {
                                    rules: [
                                        {
                                            required: true, message: '本项为必填项，请完成',
                                        }
                                    ]
                                })(<DatePicker onChange={()=>{console.log(1)}} />)
                            }
                        </FormItem>

                        <Button 
                        type="primary"
                        htmlType="submit"
                        className="tijiaoButton"
                        >提交</Button>
                    </Form>
                    <Modal
                    visible={this.state.tiaozhuanIsShow}
                    className="tiaozhuan"
                    onOk={()=>{
                        this.changeIsShow(false);
                        this.props.dispatch(push("/ChanpingGuanli/ChanpingShezhi"))
                    }}
                    onCancel={()=>{this.changeIsShow(false)}}
                    >
                    <p>添加信息成功,是否跳转到信息界面?</p>
                    </Modal>
            </div>
        )
    }
}
const WrappedRegistrationForm = Form.create()(MyForm);
export default WrappedRegistrationForm;
