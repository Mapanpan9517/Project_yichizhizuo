import React, { Component } from 'react';
import {InputNumber,DatePicker,Radio,Modal, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class Dingdanxinxi_XinxiXiugai extends Component {
    constructor(){
        super();
        this.state={
            nowYiyuan:null
        }
        this.handleSubmit = (e) => {
            const { getFieldDecorator,getFieldsValue,resetFields,getFieldsError } = this.props.form;
            e.preventDefault();
            const {dispatch,changeXinxiXiugaiIsshow,_id} = this.props;
            this.props.form.validateFieldsAndScroll((err, values) => {
              if (!err) {
                // console.log({"Xinxi":values})
                    var time = moment.now();
                    var gengxinshijian = moment(time).format("YYYY-MM-DD h:mm:ss");
                    var jiaohuoshijian = moment(values["jiaohuoshijian"]).format("YYYY-MM-DD h:mm:ss");
                    dispatch({"type":"dingdanxinxilist/changeXinxi","Xinxi":{
                        ...values,
                        jiaohuoshijian,
                        gengxinshijian
                    },"ChangeBy":{_id}});
                    resetFields();
                    changeXinxiXiugaiIsshow(false);
              }
            });
          }
    }
    updateSelect_yiyuan(){
        const {yiyuanxinxi} = this.props;
        if(yiyuanxinxi){
            var arr = yiyuanxinxi.map((item,index) => {  
                return <Option key={index} value={item.mingcheng}>{item.mingcheng}</Option>
            });
            return arr;
        }
    }
    updateSelect_yisheng(){
        const {nowYiyuan} = this.state;
        if(nowYiyuan){
            const {yishengxinxi} = this.props;
            if(yishengxinxi){
                var arr = yishengxinxi.filter((item,index) => {  
                    return item["suoshuzhensuo"]==nowYiyuan
                }).map((item,index)=><Option key={index} value={item.xingming}>{item.xingming}</Option>);
                return arr;
            }
        }
    }
    updateSelect_chanping(){
        const {chanpingdingyi} = this.props;
        if(chanpingdingyi){
            var arr = chanpingdingyi.map((item,index) => {  
                return <Option key={index} value={item.mingcheng}>{item.mingcheng}</Option>
            });
            return arr;
        }
    }
    changeNowYiyuan(v){
        this.setState({
            nowYiyuan:v
        },function(){
            const {setFields} = this.props.form;
            setFields({"yishengxinxi":{
                value:""
            }})
            
        });
    }
    show(){
        const {_id,dingdanxinxi} = this.props;
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
        if(_id&&dingdanxinxi){
            var nowDingdanxinxi = dingdanxinxi.filter(item=>item._id==_id)[0];
            var arr = [];
            // console.log(nowDingdanxinxi)
            for(var i in nowDingdanxinxi){
                switch(i){                   
                    case "dingdanleixing":
                    arr.push(<FormItem
                        label="订单类型"
                        key="dingdanleixing"
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('dingdanleixing', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowDingdanxinxi[i]||""
                            })(<Select  disabled = {true} style={{ width: 120 }}>
                                <Option value="普通">普通</Option>
                            </Select>)
                        }
                    </FormItem>);
                    break;
                    case "dingdanzhuangtai":
                    arr.push(<FormItem
                        label="订单状态"
                        key="dingdanzhuangtai"
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('dingdanzhuangtai', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowDingdanxinxi[i]||""
                            })(<Select style={{ width: 120 }}>
                                <Option value="已下单">已下单</Option>
                                <Option value="已发货">已发货</Option>
                                <Option value="已收件">已收件</Option>
                                <Option value="加工中">加工中</Option>
                                <Option value="已出件">已出件</Option>
                                <Option value="已完成">已完成</Option>
                                <Option value="已归档">已归档</Option>
                            </Select>)
                        }
                    </FormItem>);
                    break;
                    
                    case "zhifujiage":
                    arr.push(<FormItem
                        label="支付价格"
                        key="zhifujiage"
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('zhifujiage', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowDingdanxinxi[i]||""
                            })(<InputNumber />)
                        }
                    </FormItem>);
                    break;
                    case "zhifuzhuangtai":
                    arr.push(<FormItem
                        label="支付状态"
                        key="zhifuzhuangtai"
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('zhifuzhuangtai', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowDingdanxinxi[i]||""
                            })(<Select style={{ width: 120 }}>
                                <Option value="未付款">未付款</Option>
                                <Option value="已付款">已付款</Option>
                            </Select>)
                        }
                    </FormItem>);
                    break;
                    case "shifoushidai":
                    arr.push(<FormItem
                        label="是否试戴"
                        key="shifoushidai"
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('shifoushidai', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowDingdanxinxi[i]||""
                            })(<RadioGroup>
                                <Radio value="是">是</Radio>
                                <Radio value="否">否</Radio>
                            </RadioGroup>)
                        }
                    </FormItem>);
                    break;
                    case "yiyuanxinxi":
                    arr.push(<FormItem
                        label="医院信息"
                        key="yiyuanxinxi"
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('yiyuanxinxi', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowDingdanxinxi[i]||""
                            })(<Select 
                            style={{ width: 120 }}
                            onSelect={(value)=>{this.changeNowYiyuan(value)}}
                            >
                                {this.updateSelect_yiyuan()}
                            </Select>)
                        }
                    </FormItem>);
                    break;
                    case "yishengxinxi":
                    arr.push(<FormItem
                        label="医生信息"
                        key="yishengxinxi"
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('yishengxinxi', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowDingdanxinxi[i]||""
                            })(<Select style={{ width: 120 }}>
                                {this.updateSelect_yisheng()}
                            </Select>)
                        }
                    </FormItem>);
                    break;
                    case "chanpin":
                    arr.push(<FormItem
                        label="产品"
                        key="chanpin"
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('chanpin', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowDingdanxinxi[i]||""
                            })(<Select style={{ width: 120 }}>
                                {this.updateSelect_chanping()}
                            </Select>)
                        }
                    </FormItem>);
                    break;
                    case "hewei":
                    arr.push(<FormItem
                        label="颌位"
                        key="hewei"
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('hewei', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowDingdanxinxi[i]||""
                            })(<Select style={{ width: 120 }}>
                                <Option value="上颌">上颌</Option>
                                <Option value="下颌">下颌</Option>
                                <Option value="全口">全口</Option>
                            </Select>)
                        }
                    </FormItem>);
                    break;
                    case "yawei":
                    arr.push(<FormItem
                        label="牙位"
                        key="yawei"
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('yawei', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowDingdanxinxi[i].split(",")||""
                            })(<CheckboxGroup options={ [
                                { value: 'A8' },
                                { value: 'A7' },
                                { value: 'A6' },
                                { value: 'A5' },
                                { value: 'A4' },
                                { value: 'A3' },
                                { value: 'A2' },
                                { value: 'A1' },
                                { value: 'B1' },
                                { value: 'B2' },
                                { value: 'B3' },
                                { value: 'B4' },
                                { value: 'B5' },
                                { value: 'B6' },
                                { value: 'B7' },
                                { value: 'B8' },
                                { value: 'C8' },
                                { value: 'C7' },
                                { value: 'C6' },
                                { value: 'C5' },
                                { value: 'C4' },
                                { value: 'C3' },
                                { value: 'C2' },
                                { value: 'C1' },
                                { value: 'D1' },
                                { value: 'D2' },
                                { value: 'D3' },
                                { value: 'D4' },
                                { value: 'D5' },
                                { value: 'D6' },
                                { value: 'D7' },
                                { value: 'D8' }
                                ]}/>)
                        }
                    </FormItem>);
                    break;
                    case "jiagongshuliang":
                    arr.push(<FormItem
                        label="加工数量"
                        key="jiagongshuliang"
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('jiagongshuliang', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:nowDingdanxinxi[i]||""
                            })(<Input />)
                        }
                    </FormItem>);
                    break;
                    case "jiaohuoshijian":
                    arr.push(<FormItem
                        label="交货时间"
                        key="jiaohuoshijian"
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('jiaohuoshijian', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ],
                                initialValue:moment(nowDingdanxinxi[i])||""
                            })(<DatePicker/>)
                        }
                    </FormItem>);
                    break;
                    
                            
                            <Button 
                            type="primary"
                            htmlType="submit"
                            >提交</Button>
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
                width={1000}
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
const WrappedRegistrationForm = Form.create()(Dingdanxinxi_XinxiXiugai);
export default WrappedRegistrationForm;