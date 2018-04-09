import React, { Component } from 'react';
import {DatePicker,Radio,Modal, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const RadioGroup = Radio.Group;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class ChanpingFenlei_XinxiXiugai extends Component {
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
                    dispatch({"type":"chanpingfenleilist/changeXinxi","Xinxi":{
                        ...values,
                        gengxinshijian
                    },_id});
                    resetFields();
                    changeXinxiXiugaiIsshow(false);
              }
            });
          }
    }
    show(){
        const {_id,chanpingfenlei} = this.props;
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
        if(_id&&chanpingfenlei){
            var nowChanpingfenlei = chanpingfenlei.filter(item=>item._id==_id)[0];
            var arr = [];
            for(var i in nowChanpingfenlei){
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
                                initialValue:nowChanpingfenlei[i]||""
                            })(<Input />)
                        }
                    </FormItem>)
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
const WrappedRegistrationForm = Form.create()(ChanpingFenlei_XinxiXiugai);
export default WrappedRegistrationForm;