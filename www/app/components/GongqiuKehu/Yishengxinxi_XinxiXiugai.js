import React, { Component } from 'react';
import {DatePicker,Radio,Modal, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const RadioGroup = Radio.Group;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class Yishengxinxi_XinxiXiugai extends Component {
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
                    dispatch({"type":"yishengxinxilist/changeXinxi","Xinxi":{
                        ...values,
                        gengxinshijian
                    },"ChangeBy":{_id}});
                    resetFields();
                    changeXinxiXiugaiIsshow(false);
              }
            });
          }
    }
    updateSelect(){
        const {yiyuanxinxi} = this.props;
        if(yiyuanxinxi){
            var arr = yiyuanxinxi.map((item,index) => {  
                return <Option key={index} value={item.mingcheng}>{item.mingcheng}</Option>
            });
            return arr;
        }
    }
    show(){
        const {_id,yishengxinxi} = this.props;
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
        if(_id&&yishengxinxi){
            var nowYishengxinxi = yishengxinxi.filter(item=>item._id==_id)[0];
            var arr = [];
            for(var i in nowYishengxinxi){
                switch(i){
                    
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
                                initialValue:nowYishengxinxi[i]||""
                            })(<Input />)
                        }
                    </FormItem>);
                    break;
                    case "dianhua":
                    arr.push(<FormItem
                        label="电话号码"
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
                                initialValue:nowYishengxinxi[i]||""
                            })(<Input />)
                        }
                    </FormItem>);
                    break;
                    case "suoshuzhensuo":
                    arr.push(<FormItem
                        label="所属诊所"
                        key={i}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('suoshuzhensuo', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowYishengxinxi[i]||""
                            })(<Select style={{ width: 120 }}>
                                {this.updateSelect()}
                          </Select>)
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
const WrappedRegistrationForm = Form.create()(Yishengxinxi_XinxiXiugai);
export default WrappedRegistrationForm;