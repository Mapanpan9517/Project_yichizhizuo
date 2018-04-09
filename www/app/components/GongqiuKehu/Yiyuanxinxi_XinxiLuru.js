import React, { Component } from 'react';
import { Slider, Switch,DatePicker,Radio,Modal,Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import moment from 'moment';
const Option = Select.Option;
const RadioGroup = Radio.Group;
const createForm = Form.create;
const FormItem = Form.Item;

class Yiyuanxinxi_XinxiLuru extends Component {
    constructor(){
        super();
        this.handleSubmit = (e) => {
            const { getFieldDecorator,getFieldsValue,resetFields,getFieldsError } = this.props.form;
            e.preventDefault();
            const {dispatch,changeXinxiLuruIsShow} = this.props;
            this.props.form.validateFieldsAndScroll((err, values) => {
                // console.log(values)
              if (!err) {
                    var time = moment.now();
                    var chuangjianshijian = moment(time).format("YYYY-MM-DD h:mm:ss");

                    dispatch({"type":"yiyuanxinxilist/addXinxi","Xinxi":{
                        ...values,
                        chuangjianshijian,
                        "gengxinshijian":""
                    }});
                    resetFields();
                    changeXinxiLuruIsShow(false);
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
        const {XinxiLuruIsShow,changeXinxiLuruIsShow} = this.props;
        return (
            <div>

                <Modal
                title="信息录入"
                visible={XinxiLuruIsShow}
                footer={null}
                onCancel={()=>{changeXinxiLuruIsShow(false)}}
                >
                    <Form onSubmit={this.handleSubmit}>
                            <FormItem
                                label="是否通过审核"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('isshenhe', {
                                        rules: [
                                            {
                                                required: true, message: '本项为必填项，请完成',
                                            }
                                        ]
                                    })(<RadioGroup>
                                        <Radio value="是">是</Radio>
                                        <Radio value="否">否</Radio>
                                    </RadioGroup>)
                                }
                            </FormItem>
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
                                label="联系人"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('lianxiren', {
                                        rules: [
                                            {
                                                required: true, message: '本项为必填项，请完成',
                                            }
                                        ]
                                    })(<Input />)
                                }
                            </FormItem>
                            <FormItem
                                label="电话"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('dianhua', {
                                        rules: [
                                            {
                                                required: true, message: '本项为必填项，请完成',
                                            }
                                        ]
                                    })(<Input />)
                                }
                            </FormItem>
                            <FormItem
                                label="地址"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('dizhi', {
                                        rules: [
                                            {
                                                required: true, message: '本项为必填项，请完成',
                                            }
                                        ]
                                    })(<Input />)
                                }
                            </FormItem>
                            <FormItem
                                label="介绍"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('jieshao', {
                                        rules: [
                                            {
                                                required: true, message: '本项为必填项，请完成',
                                            }
                                        ]
                                    })(<Input />)
                                }
                            </FormItem>
                            
                            <Button 
                            type="primary"
                            htmlType="submit"
                            >提交</Button>
                        </Form>
                    </Modal> 
            </div>
        )
    }
}
const WrappedRegistrationForm = Form.create()(Yiyuanxinxi_XinxiLuru);
export default WrappedRegistrationForm;
