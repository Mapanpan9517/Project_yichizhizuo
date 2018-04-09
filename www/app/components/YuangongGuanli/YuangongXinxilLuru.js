import React, { Component } from 'react';
import { Slider, Switch,DatePicker,Radio,Modal,Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import { now } from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const RadioGroup = Radio.Group;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class Xinxilluru extends Component {
    constructor(props){
        super();
        this.handleSubmit = (e) => {
            const {dispatch,changeXinxiluruIsShow} = this.props;
            const { getFieldDecorator,getFieldsValue,resetFields,getFieldsError } = this.props.form;
            e.preventDefault();
            this.props.form.validateFieldsAndScroll((err, values) => {
              if (!err) {
                console.log({'Xinxi': values});
                changeXinxiluruIsShow(false);
                dispatch({"type":"yuangonglist/addXinxi","Xinxi":values});
                resetFields();
              }
            });
          }
    }
   
    render() {
        const {XinxiluruIsShow,changeXinxiluruIsShow} = this.props;
        
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
        // console.log(this.props)
        
        
        return (
            <div>
                <Modal
                title="员工信息录入"
                visible={XinxiluruIsShow}
                footer={null}
                onCancel={()=>{changeXinxiluruIsShow(false)}}
                >
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem
                            label="工号"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('gonghao', {
                                    rules: [
                                        {
                                            required: true, message: '本项为必填项，请完成',
                                        }
                                    ]
                                })(<Input />)
                            }
                        </FormItem>
                        <FormItem
                            label="姓名"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('xingming', {
                                    rules: [
                                        {
                                            required: true, message: '本项为必填项，请完成',
                                        }
                                    ]
                                })(<Input />)
                            }
                        </FormItem>
                        <FormItem
                            label="性别"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('xingbie', {
                                    rules: [
                                        {
                                            required: true, message: '本项为必填项，请完成',
                                        }
                                    ]
                                })( <RadioGroup>
                                        <Radio value="男">男</Radio>
                                        <Radio value="女">女</Radio>
                                    </RadioGroup>)
                            }
                        </FormItem>
                        <FormItem
                            label="年龄"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('nianling', {
                                    rules: [
                                        {
                                            required: true, message: '本项为必填项，请完成',
                                        }
                                    ]
                                })(<Slider max={70} min={18} />)
                            }
                        </FormItem>
                        <FormItem
                            label="出生日期"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('chushengriqi', {
                                    rules: [
                                        {
                                            required: true, message: '本项为必填项，请完成',
                                        }
                                    ]
                                })(<DatePicker/>)
                            }
                        </FormItem>
                        <FormItem
                            label="身份证号"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('shenfenzhenghao', {
                                    rules: [
                                        {
                                            required: true, message: '本项为必填项，请完成',
                                        }
                                    ]
                                })(<Input />)
                            }
                        </FormItem>
                        <FormItem
                            label="手机号"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('shoujihao', {
                                    rules: [
                                        {
                                            required: true, message: '本项为必填项，请完成',
                                        }
                                    ]
                                })(<Input />)
                            }
                        </FormItem>
                        
                        <FormItem
                            label="到岗时间"
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
const WrappedRegistrationForm = Form.create()(Xinxilluru);
export default WrappedRegistrationForm;
