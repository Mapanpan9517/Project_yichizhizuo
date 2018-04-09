import React, { Component } from 'react';
import {  Menu, Dropdown, message,Slider, Switch,DatePicker,Radio,Modal,Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

import moment from 'moment';
const Option = Select.Option;
const RadioGroup = Radio.Group;
const createForm = Form.create;
const FormItem = Form.Item;

class Ruku_Xinxiluru extends Component {
    constructor(){
        super();
        this.handleSubmit = (e) => {
            const { getFieldDecorator,getFieldsValue,resetFields,getFieldsError } = this.props.form;
            e.preventDefault();
            const {dispatch,changeXinxiLuruIsShow,zhucaixinxi} = this.props;
            this.props.form.validateFieldsAndScroll((err, values) => {
                
              if (!err) {
                    var time = moment.now();
                    var chuangjianshijian = moment(time).format("YYYY-MM-DD h:mm:ss");
                    dispatch({"type":"yuancailiao_Rukulist/addXinxi","Xinxi":{
                        ...values,
                        chuangjianshijian,
                        "gengxinshijian":""
                    }});

                    var arr = values.zhucai.split("|");
                    var kucunshuliang = parseInt(zhucaixinxi.filter(item=>item.mingcheng==arr[0]&&item.pinpai==arr[1])[0].kucunshuliang)+parseInt(values.shuliang);
                    dispatch({"type":"zhucaixinxilist/changeXinxi","Xinxi":{kucunshuliang},"ChangeBy":{
                        "mingcheng":arr[0],
                        "pinpai":arr[1]
                    }})
                    resetFields();
                    changeXinxiLuruIsShow(false);
              }
            });
          }
    }
    updateSelect(){
        const {zhucaixinxi} = this.props;
        if(zhucaixinxi){
            var arr = zhucaixinxi.map((item,index) => {  
                return <Option key={index} value={`${item.mingcheng}|${item.pinpai}`}>{item.mingcheng}|{item.pinpai}</Option>
            });
            return arr;
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
        this.updateSelect
       
        return (
            <div>
                <Modal
                title="原材料入库"
                visible={XinxiLuruIsShow}
                footer={null}
                onCancel={()=>{changeXinxiLuruIsShow(false)}}
                >
                    <Form onSubmit={this.handleSubmit}>
                            <FormItem
                                label="主材"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('zhucai', {
                                        rules: [
                                            {
                                                required: true, message: '本项为必填项，请完成',
                                            }
                                        ]
                                    })(<Select style={{ width: 120 }}>
                                        {this.updateSelect()}
                                  </Select>)
                                }
                            </FormItem>
                            <FormItem
                                label="批次"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('pici', {
                                        rules: [
                                            {
                                                required: true, message: '本项为必填项，请完成',
                                            }
                                        ]
                                    })(<Input />)
                                }
                            </FormItem>
                            <FormItem
                                label="单价"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('danjia', {
                                        rules: [
                                            {
                                                required: true, message: '本项为必填项，请完成',
                                            }
                                        ]
                                    })(<Input />)
                                }
                            </FormItem>
                            <FormItem
                                label="经销商"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('jingxiaoshang', {
                                        rules: [
                                            {
                                                required: true, message: '本项为必填项，请完成',
                                            }
                                        ]
                                    })(<Input />)
                                }
                            </FormItem>
                            <FormItem
                                label="经办人"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('jingbanren', {
                                        rules: [
                                            {
                                                required: true, message: '本项为必填项，请完成',
                                            }
                                        ]
                                    })(<Input />)
                                }
                            </FormItem>
                            <FormItem
                                label="数量"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('shuliang', {
                                        rules: [
                                            {
                                                required: true, message: '本项为必填项，请完成',
                                            }
                                        ]
                                    })(<Input />)
                                }
                            </FormItem>
                            <FormItem
                                label="入库时间"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('rukushijian', {
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
const WrappedRegistrationForm = Form.create()(Ruku_Xinxiluru);
export default WrappedRegistrationForm;
