import React, { Component } from 'react';
import {DatePicker,Radio,Modal, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const RadioGroup = Radio.Group;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class ChanpingDingyi_XinxiXiugai extends Component {
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
                    dispatch({"type":"chanpingdingyilist/changeXinxi","Xinxi":{
                        ...values,
                        gengxinshijian
                    },_id});
                    resetFields();
                    changeXinxiXiugaiIsshow(false);
              }
            });
          }
    }
    updateSelect(){
        const {chanpingfenlei} = this.props;
        if(chanpingfenlei){
            var arr = chanpingfenlei.map((item,index) => {  
                return <Option key={index} value={item.mingcheng}>{item.mingcheng}</Option>
            });
            return arr;
        }
    }
    updateRadio(){
        const {zhucaixinxi} = this.props;
        if(zhucaixinxi){
            var arr = zhucaixinxi.map((item,index) => {  
                return <Radio key={index} style={{"display":"block","marginTop":"10px"}} value={`${item.mingcheng}-${item.pinpai}`}>{item.mingcheng}-{item.pinpai}</Radio>
            });
            return arr;
        }
    }
    show(){
        const {_id,chanpingdingyi} = this.props;
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
        if(_id&&chanpingdingyi){
            var now = chanpingdingyi.filter(item=>item._id==_id)[0];
            var arr = [];
            for(var i in now){
                switch(i){
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
                                initialValue:now[i]||""
                            })(<Input />)
                        }
                    </FormItem>);
                    break;
                    case "fenlei":
                    arr.push(<FormItem
                        label="分类"
                        key={i}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('fenlei', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:now[i]||""
                            })(<Select style={{ width: 120 }}>
                                {this.updateSelect()}
                          </Select>)
                        }
                    </FormItem>);
                    break;
                    case "danwei":
                    arr.push(<FormItem
                        label="单位"
                        key={i}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('danwei', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:now[i]||""
                            })(<Select style={{ width: 120 }}>
                                <Option  value="颗">颗</Option>
                                <Option  value="件">件</Option>
                          </Select>)
                        }
                    </FormItem>);
                    break;
                    case "cailiao":
                    arr.push(<FormItem
                        label="材料"
                        key={i}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('cailiao', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:now[i]||""
                            })(<RadioGroup name="radiogroup">
                            {this.updateRadio()}
                          </RadioGroup>)
                        }
                    </FormItem>);
                    break;
                    case "jiage":
                    arr.push(<FormItem
                        label="价格"
                        key={i}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('jiage', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:now[i]||""
                            })(<Input />)
                        }
                    </FormItem>);
                    break;
                    case "shuoming":
                    arr.push(<FormItem
                        label="说明"
                        key={i}
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('shuoming', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:now[i]||""
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
                    {this.show()}
                    <Form onSubmit={this.handleSubmit}>
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
const WrappedRegistrationForm = Form.create()(ChanpingDingyi_XinxiXiugai);
export default WrappedRegistrationForm;