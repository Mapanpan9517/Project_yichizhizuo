import React, { Component } from 'react';
import { Slider, Switch,DatePicker,Radio,Modal,Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import moment from 'moment';
const Option = Select.Option;
const RadioGroup = Radio.Group;
const createForm = Form.create;
const FormItem = Form.Item;

class ZhucaiXinxi_XinxiLuru extends Component {
    constructor(){
        super();
        this.handleSubmit = (e) => {
            const { getFieldDecorator,getFieldsValue,resetFields,getFieldsError } = this.props.form;
            e.preventDefault();
            const {dispatch,changeXinxiLuruIsShow} = this.props;
            this.props.form.validateFieldsAndScroll((err, values) => {
              if (!err) {
                    var time = moment.now();
                    var chuangjianshijian = moment(time).format("YYYY-MM-DD h:mm:ss");

                    dispatch({"type":"zhucaixinxilist/addXinxi","Xinxi":{
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
                                label="品牌"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('pinpai', {
                                        rules: [
                                            {
                                                required: true, message: '本项为必填项，请完成',
                                            }
                                        ]
                                    })(<Input />)
                                }
                            </FormItem>
                            <FormItem
                                label="库存数量"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('kucunshuliang', {
                                        rules: [
                                            {
                                                required: true, message: '本项为必填项，请完成',
                                            }
                                        ]
                                    })(<Input />)
                                }
                            </FormItem>
                            <FormItem
                                label="注册号"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('zhucehao', {
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
const WrappedRegistrationForm = Form.create()(ZhucaiXinxi_XinxiLuru);
export default WrappedRegistrationForm;
