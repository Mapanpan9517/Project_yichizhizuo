import React, { Component } from 'react';
import { Slider, Switch,DatePicker,Radio,Modal,Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import moment from 'moment';
const Option = Select.Option;
const RadioGroup = Radio.Group;
const createForm = Form.create;
const FormItem = Form.Item;

class Yishengxinxi_XinxiLuru extends Component {
    constructor(){
        super();
        this.handleSubmit = (e) => {
            const { getFieldDecorator,getFieldsValue,resetFields,getFieldsError } = this.props.form;
            e.preventDefault();
            const {dispatch,changeXinxiLuruIsShow} = this.props;
            this.props.form.validateFieldsAndScroll((err, values) => {
                // console.log(values)
              if (!err) {
                    var time = moment.now();
                    var chuangjianshijian = moment(time).format("YYYY-MM-DD h:mm:ss");

                    dispatch({"type":"yishengxinxilist/addXinxi","Xinxi":{
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
        const {yiyuanxinxi} = this.props;
        if(yiyuanxinxi){
            var arr = yiyuanxinxi.map((item,index) => {  
                return <Option key={index} value={item.mingcheng}>{item.mingcheng}</Option>
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
                                label="电话号码"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('dianhua', {
                                        rules: [
                                            {
                                                required: true, message: '本项为必填项，请完成',
                                            }
                                        ]
                                    })(<Input />)
                                }
                            </FormItem>
                            
                            <FormItem
                                label="所属诊所"
                                {...formItemLayout}
                            >
                                {
                                    getFieldDecorator('suoshuzhensuo', {
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
const WrappedRegistrationForm = Form.create()(Yishengxinxi_XinxiLuru);
export default WrappedRegistrationForm;
