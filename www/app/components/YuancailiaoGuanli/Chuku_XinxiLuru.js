import React, { Component } from 'react';
import {  InputNumber,Menu, Dropdown, message,Slider, Switch,DatePicker,Radio,Modal,Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

import moment from 'moment';
const Option = Select.Option;
const RadioGroup = Radio.Group;
const createForm = Form.create;
const FormItem = Form.Item;

class Chuku_XinxiLuru extends Component {
    constructor(){
        super();
        this.state={
            kucunshuliang:null
        }

        this.handleSubmit = (e) => {
            const { getFieldDecorator,getFieldsValue,resetFields,getFieldsError } = this.props.form;
            e.preventDefault();
            const {dispatch,changeChukuIsshow,_id,zhucaixinxi} = this.props;
            this.props.form.validateFieldsAndScroll((err, values) => {
                // console.log(values)
              if (!err) {
                    var time = moment.now();
                    var chuangjianshijian = moment(time).format("YYYY-MM-DD h:mm:ss");
                    dispatch({"type":"yuancailiao_Chukulist/addXinxi","Xinxi":{
                        ...values,
                        chuangjianshijian,
                        "gengxinshijian":""
                    }});

                    var arr = values.zhucai.split("|");
                    var kucunshuliang = parseInt(zhucaixinxi.filter(item=>item.mingcheng==arr[0]&&item.pinpai==arr[1])[0].kucunshuliang)-parseInt(values.shuliang);
                    dispatch({"type":"zhucaixinxilist/changeXinxi","Xinxi":{kucunshuliang},"ChangeBy":{
                        "mingcheng":arr[0],
                        "pinpai":arr[1]
                    }})
                    resetFields();
                    changeChukuIsshow(false);
              }
            });
          }
    }
    show(){
        const { getFieldDecorator,resetFields } = this.props.form;
        const {_id,yuancailiao_Ruku,zhucaixinxi} = this.props;
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
        
        if(_id&&yuancailiao_Ruku&&zhucaixinxi){
            var nowYuancailiao_Ruku = yuancailiao_Ruku.filter(item=>item._id==_id)[0];
            var arr = [];

            //库存数量计算
            var zhucaiBy = nowYuancailiao_Ruku["zhucai"].split("|");
            var kucunshuliang = zhucaixinxi.filter(item=>item.mingcheng==zhucaiBy[0]&&item.pinpai==zhucaiBy[1])[0].kucunshuliang;


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
                            })(<Select 
                                disabled = {true} 
                                style={{ width: 120 }}>                                        
                              </Select>)
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
                                initialValue:kucunshuliang
                            })(<Input
                                disabled = {true} 
                                style={{ width: 120 } }
                            />)
                        }
                    </FormItem>);
                    arr.push(<FormItem
                        label="出库数量"
                        key="chukushuliang"
                        {...formItemLayout}
                    >
                        {
                            getFieldDecorator('chukushuliang', {
                                rules: [
                                    {
                                        required: true, message: '本项为必填项，请完成',
                                    }
                                ]
                            })(<InputNumber
                                min={0}
                                max={parseInt(kucunshuliang)}
                              />)
                        }
                    </FormItem>);
                    break;
                }
            }            
            arr.push(<FormItem
                label="经办人"
                key="jingbanren"
                {...formItemLayout}
            >
                {
                    getFieldDecorator('jingbanren', {
                        rules: [
                            {
                                required: true, message: '本项为必填项，请完成',
                            }
                        ]
                    })(<Input/>)
                }
            </FormItem>);
            arr.push(<FormItem
                label="出库时间"
                key="chukushijian"
                {...formItemLayout}
            >
                {
                    getFieldDecorator('chukushijian', {
                        rules: [
                            {
                                required: true, message: '本项为必填项，请完成',
                            }
                        ]
                    })(<Input/>)
                }
            </FormItem>);
            return arr;
        }
    }
    render() {
        const { getFieldDecorator,getFieldsValue,resetFields,getFieldsError } = this.props.form;
        
        const {ChukuIsshow,changeChukuIsshow} = this.props;
        return (
            <div>
                <Modal
                title="原材料出库"
                visible={ChukuIsshow}
                footer={null}
                onCancel={()=>{changeChukuIsshow(false)}}
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
const WrappedRegistrationForm = Form.create()(Chuku_XinxiLuru);
export default WrappedRegistrationForm;
