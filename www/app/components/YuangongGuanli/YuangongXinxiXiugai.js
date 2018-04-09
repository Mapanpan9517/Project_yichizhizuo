import React, { Component } from 'react';
import {DatePicker,Radio,Modal, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const RadioGroup = Radio.Group;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class YuangongXinxiXiugai extends Component {
    constructor(){
        super();
        //提交
        this.handleSubmit = (e) => {
            const {dispatch,changeXinxiXiugaiIsshow,_id} = this.props;
            const { getFieldDecorator,resetFields } = this.props.form;
            e.preventDefault();
            this.props.form.validateFieldsAndScroll((err, values) => {
              if (!err) {
                changeXinxiXiugaiIsshow(false);
                dispatch({"type":"yuangonglist/changeXinxi","Xinxi":values,_id});
                resetFields();
              }
            });
          }
    }
    show(){
        const {_id,yuangong} = this.props;
        const { getFieldDecorator,resetFields } = this.props.form;

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
        if(_id&&yuangong){
            var nowYuangong = yuangong.filter(item=>item._id==_id)[0];
            var arr = [];
            for(var i in nowYuangong){

                switch(i){
                    case "gonghao":
                    arr.push(<FormItem
                            label="工号"
                            key={i}
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('gonghao', {
                                    rules: [
                                        {
                                            required: true, message: '本项为必填项，请完成',
                                        }
                                    ],
                                    initialValue:nowYuangong[i]
                                })(<Input />)
                            }
                        </FormItem>);
                    break;
                    case "xingming":
                    arr.push(<FormItem
                            label="姓名"
                            key={i}
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('xingming', {
                                    rules: [
                                        {
                                            required: true, message: '本项为必填项，请完成',
                                        }
                                    ],
                                    initialValue:nowYuangong[i]
                                })(<Input />)
                            }
                        </FormItem>);
                    break;
                    case "xingbie":
                    arr.push(<FormItem
                            label="性别"
                            key={i}
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('xingbie', {
                                    rules: [
                                        {
                                            required: true, message: '本项为必填项，请完成',
                                        }
                                    ],
                                    initialValue:nowYuangong[i]
                                })(<RadioGroup>
                                    <Radio value="男">男</Radio>
                                    <Radio value="女">女</Radio>
                                </RadioGroup>)
                            }
                        </FormItem>);
                    break;
                    case "nianling":
                    arr.push(<FormItem
                            label="年龄"
                            key={i}
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('nianling', {
                                    rules: [
                                        {
                                            required: true, message: '本项为必填项，请完成',
                                        }
                                    ],
                                    initialValue:nowYuangong[i]
                                })(<Input />)
                            }
                        </FormItem>);
                    break;
                    case "shenfenzhenghao":
                    arr.push(<FormItem
                            label="身份证号"
                            key={i}
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('shenfenzhenghao', {
                                    rules: [
                                        {
                                            required: true, message: '本项为必填项，请完成',
                                        }
                                    ],
                                    initialValue:nowYuangong[i]
                                })(<Input />)
                            }
                        </FormItem>);
                    break; 
                    case "daogangshijian":
                    arr.push(<FormItem
                            label="到岗时间"
                            key={i}
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('daogangshijian', {
                                    rules: [
                                        {
                                            required: true, message: '本项为必填项，请完成',
                                        }
                                    ]
                                })(<DatePicker/>)
                            }
                        </FormItem>);
                    break;    
                }   
            }
            return arr;
        }
    }
    render() {
        const {XinxiXiugaiIsshow,changeXinxiXiugaiIsshow,_id,yuangong} = this.props;
        return (
            <div>
                <Modal
                title="员工信息修改"
                visible={XinxiXiugaiIsshow}
                onOk={()=>{changeXinxiXiugaiIsshow(false)}}
                onCancel={()=>{changeXinxiXiugaiIsshow(false)}}
                footer={null}
                >
                    <Form onSubmit={this.handleSubmit}>
                    {this.show()}
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
const WrappedRegistrationForm = Form.create()(YuangongXinxiXiugai);
export default WrappedRegistrationForm;
