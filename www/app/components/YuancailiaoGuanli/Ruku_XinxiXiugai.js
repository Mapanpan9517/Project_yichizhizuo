import React, { Component } from 'react';
import {DatePicker,Radio,Modal, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const RadioGroup = Radio.Group;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class Ruku_XinxiXiugai extends Component {
    constructor(){
        super();
        this.handleSubmit = (e) => {
            const { getFieldDecorator,getFieldsValue,resetFields,getFieldsError } = this.props.form;
            e.preventDefault();
            const {dispatch,changeXinxiXiugaiIsshow,_id} = this.props;
            this.props.form.validateFieldsAndScroll((err, values) => {
              if (!err) {
                console.log({"Xinxi":values})
                    dispatch({"type":"yuancailiao_Rukulist/changeXinxi","Xinxi":values,_id});
                    resetFields();
                    changeXinxiXiugaiIsshow(false);
              }
            });
          }
    }
    show(){
        const { getFieldDecorator,resetFields } = this.props.form;
        const {_id,yuancailiao_Ruku} = this.props;
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
        if(_id&&yuancailiao_Ruku){
            var nowYuancailiao_Ruku = yuancailiao_Ruku.filter(item=>item._id==_id)[0];
            var arr = [];
            for(var i in nowYuancailiao_Ruku){
                switch(i){
                    case "zhucai":
                    arr.push(<FormItem
                        label="主材"
                        key={i}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('zhucai', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowYuancailiao_Ruku[i]
                            })(<Input />)
                        }
                    </FormItem>);
                    break;
                    case "pici":
                    arr.push(<FormItem
                        label="批次"
                        key={i}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('pici', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowYuancailiao_Ruku[i]
                            })(<Input />)
                        }
                    </FormItem>);
                    break;
                    case "danjia":
                    arr.push(<FormItem
                        label="单价"
                        key={i}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('danjia', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowYuancailiao_Ruku[i]
                            })(<Input />)
                        }
                    </FormItem>);
                    break;
                    case "jingxiaoshang":
                    arr.push(<FormItem
                        label="经销商"
                        key={i}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('jingxiaoshang', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowYuancailiao_Ruku[i]
                            })(<Input />)
                        }
                    </FormItem>);
                    break;
                    case "jingbanren":
                    arr.push(<FormItem
                        label="经办人"
                        key={i}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('jingbanren', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowYuancailiao_Ruku[i]
                            })(<Input />)
                        }
                    </FormItem>);
                    break;
                    case "shuliang":
                    arr.push(<FormItem
                        label="数量"
                        key={i}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('shuliang', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowYuancailiao_Ruku[i]
                            })(<Input />)
                        }
                    </FormItem>);
                    break;
                    case "rukushijian":
                    arr.push(<FormItem
                        label="入库时间"
                        key={i}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('rukushijian', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowYuancailiao_Ruku[i]
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
const WrappedRegistrationForm = Form.create()(Ruku_XinxiXiugai);
export default WrappedRegistrationForm;