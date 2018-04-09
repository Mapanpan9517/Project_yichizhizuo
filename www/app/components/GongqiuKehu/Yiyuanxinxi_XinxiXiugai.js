import React, { Component } from 'react';
import {DatePicker,Radio,Modal, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const RadioGroup = Radio.Group;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class Yiyuanxinxi_XinxiXiugai extends Component {
    constructor(){
        super();
        this.handleSubmit = (e) => {
            const { getFieldDecorator,getFieldsValue,resetFields,getFieldsError } = this.props.form;
            e.preventDefault();
            const {dispatch,changeXinxiXiugaiIsshow,_id} = this.props;
            this.props.form.validateFieldsAndScroll((err, values) => {
              if (!err) {
                // console.log({"Xinxi":values})
                    var time = moment.now();
                    var gengxinshijian = moment(time).format("YYYY-MM-DD h:mm:ss");
                    dispatch({"type":"yiyuanxinxilist/changeXinxi","Xinxi":{
                        ...values,
                        gengxinshijian
                    },"ChangeBy":{_id}});
                    resetFields();
                    changeXinxiXiugaiIsshow(false);
              }
            });
          }
    }
    show(){
        const {_id,yiyuanxinxi} = this.props;
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
        if(_id&&yiyuanxinxi){
            var nowYiyuanxinxi = yiyuanxinxi.filter(item=>item._id==_id)[0];
            var arr = [];
            for(var i in nowYiyuanxinxi){
                switch(i){
                    case "isshenhe":
                    arr.push(<FormItem
                        label="是否审核"
                        key={i}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('isshenhe', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowYiyuanxinxi[i]||""
                            })(<RadioGroup>
                                <Radio value="是">是</Radio>
                                <Radio value="否">否</Radio>
                            </RadioGroup>)
                        }
                    </FormItem>);
                    break;
                    case "mingcheng":
                    arr.push(<FormItem
                        label="名称"
                        key={i}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('mingcheng', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowYiyuanxinxi[i]||""
                            })(<Input />)
                        }
                    </FormItem>);
                    break;
                    case "lianxiren":
                    arr.push(<FormItem
                        label="联系人"
                        key={i}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('lianxiren', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowYiyuanxinxi[i]||""
                            })(<Input />)
                        }
                    </FormItem>);
                    break;
                    case "dianhua":
                    arr.push(<FormItem
                        label="电话"
                        key={i}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('dianhua', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowYiyuanxinxi[i]||""
                            })(<Input />)
                        }
                    </FormItem>);
                    break;
                    case "dizhi":
                    arr.push(<FormItem
                        label="地址"
                        key={i}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('dizhi', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowYiyuanxinxi[i]||""
                            })(<Input />)
                        }
                    </FormItem>);
                    break;
                    case "jieshao":
                    arr.push(<FormItem
                        label="介绍"
                        key={i}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('jieshao', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowYiyuanxinxi[i]||""
                            })(<Input />)
                        }
                    </FormItem>);
                    break;
                }
            }
            return arr;
        }
            

    }
    render() {
        const {XinxiXiugaiIsshow,changeXinxiXiugaiIsshow} = this.props;
        return (
            <div>
                <Modal
                title="信息修改"
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
const WrappedRegistrationForm = Form.create()(Yiyuanxinxi_XinxiXiugai);
export default WrappedRegistrationForm;