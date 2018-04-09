import React, { Component } from 'react';
import { Slider, Switch,DatePicker,Radio,Modal,Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import moment from 'moment';
const Option = Select.Option;
const RadioGroup = Radio.Group;
const createForm = Form.create;
const FormItem = Form.Item;

class ChanpingDingyi_XinxiLuru extends Component {
    constructor(){
        super();
        this.handleSubmit = (e) => {
            const { getFieldDecorator,getFieldsValue,resetFields,getFieldsError } = this.props.form;
            e.preventDefault();
            const {dispatch,changeXinxiLuruIsShow} = this.props;
            this.props.form.validateFieldsAndScroll((err, values) => {
              if (!err) {
                //   console.log(values)
                    var time = moment.now();
                    var chuangjianshijian = moment(time).format("YYYY-MM-DD h:mm:ss");

                    dispatch({"type":"chanpingdingyilist/addXinxi","Xinxi":{
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
        // console.log(zhucaixinxi)
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
                title="原材料入库"
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
                                label="分类"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('fenlei', {
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
                                label="单位"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('danwei', {
                                        rules: [
                                            {
                                                required: true, message: '本项为必填项，请完成',
                                            }
                                        ]
                                    })(<Select style={{ width: 120 }}>
                                        <Option  value="颗">颗</Option>
                                        <Option  value="件">件</Option>
                                  </Select>)
                                }
                            </FormItem>
                            <FormItem
                                label="材料"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('cailiao', {
                                        rules: [
                                            {
                                                required: true, message: '本项为必填项，请完成',
                                            }
                                        ]
                                    })(<RadioGroup name="radiogroup">
                                    {this.updateRadio()}
                                  </RadioGroup>)
                                }
                            </FormItem>
                            <FormItem
                                label="价格"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('jiage', {
                                        rules: [
                                            {
                                                required: true, message: '本项为必填项，请完成',
                                            }
                                        ]
                                    })(<Input />)
                                }
                            </FormItem>
                            <FormItem
                                label="说明"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('shuoming', {
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
const WrappedRegistrationForm = Form.create()(ChanpingDingyi_XinxiLuru);
export default WrappedRegistrationForm;
