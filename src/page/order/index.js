import React ,{Component} from "react";
import {Form,Card,Button,Table,Input,Icon,Select,DatePicker,Modal} from "antd";
import axios from "@/axios"
const FormItem=Form.Item;
const { Option } = Select;
const { RangePicker, MonthPicker } = DatePicker;

class Order extends Component{
	constructor(props){
		super(props)
		this.state={}
	}
	componentDidMount(){
		axios.ajax({url:'order/list'}).then(res=>{
			console.log(res);
			this.setState({
				data:res.data
			})
		})
	}
	onRowClick(record,index){
		console.log(record);
		console.log(index)
		Modal.warning({
			content:"是否跳到详情页面",
			okText:"确定",
			onOk:()=>{
				console.log(this.props.history.push('/Common/orderDetail'))
			}
		})
	}
	render(){
		    const columns=[
		    {
		        title:"城市id",
		        dataIndex:"id"
		    },{
		        title:"城市",
		        dataIndex:"city_name"
		    },{
		        title:"营运模式",
		        dataIndex:"op_mode",
				render(op_mode){
					return (op_mode==1?"自营模式":"第三方营业")
				}
		    },{
		        title:"授权加盟商",
		        dataIndex:"franchisee_name"
		    },{
		        title:"城市管理员",
		        dataIndex:"city_admin"
		    },{
		        title:"操作时间",
		        dataIndex:"updata_time"
		    }
		]
		return (
			<div>
			<Card title="订单管理">
					<FilterForm/>
					
				</Card>
				<Card><Table 
				columns={columns} 
				dataSource={this.state.data}
				rowKey={record => record.id}
				onRow={(record,index)=>{
					return {
						onClick: event => {
						this.onRowClick(record,index)
						} // 点击行
					}
					
				}}
				/></Card>
			</div>
			
					
		)
	}
}

class FilterForm extends Component{
	
	handleSubmit=e=>{
		e.preventDefault();
		this.props.form.validateFields( (err,values)=>{
			if(!err){
				console.log('received value of from ',values)
				console.log(values['end_time'].format('YYYY-MM-DD'),)
				this.setState({
					...values,
					"start_time":values['start_time'].format('YYYY-MM-DD'),
					"end_time":values['end_time'].format('YYYY-MM-DD')
				},()=>{
					console.log(this.state);
				})
				
			}
		})
	}
	restSubmit=()=>{
		 this.props.form.resetFields();
	}
	render(){
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
		    const usernameError = isFieldTouched('username') && getFieldError('username');
			const passwordError = isFieldTouched('password') && getFieldError('password');
			 const config = {
				rules: [{ type: 'object', required: true, message: 'Please select time!' }],
				};
		   const formItemLayout = {
				labelCol:{   //label标签占据列数
					span:8
				},
				wrapperCol:{ //Form表单占据列数
					span:16
				}
			}
		return (
			<Form layout="inline">
				<FormItem label="订单类型" >
					{
						getFieldDecorator('order_type',{
							initialValue: '',
						})(
							<Select style={{ width: 200 }}>
								<Option value="">全部</Option>
								<Option value="1">线上订单</Option>
								<Option value="2">线下订单</Option>
							</Select>
						)
					}
				</FormItem>
				<FormItem  label="用车城市">
						  {getFieldDecorator('user_city', {
							initialValue: '0',
						  })(
							<Select style={{ width: 200 }}>
								<Option value="0">北京</Option>
								<Option value="1">上海</Option>
								<Option value="2">天津</Option>
							</Select>
						  )}
				</FormItem>
				<FormItem label="开始时间">
					{getFieldDecorator('start_time',{...config
						
					})(
						<DatePicker  placeholder="选择开始时间"/>
						
					)}
				</FormItem>
					<FormItem label="结束时间">
					{getFieldDecorator('end_time',{...config
						
					})(
						<DatePicker format="YYYY-MM-DD HH:mm" placeholder="选择结束时间"/>
						
					)}
				</FormItem>
			   <FormItem  >
				       <Button type="primary" style={{marginLeft:10}} onClick={this.handleSubmit}>查询</Button>
				       <Button style={{marginLeft:15}} onClick={this.restSubmit}>重置</Button>
				</FormItem >
			</Form>
		)
	}
}
FilterForm=Form.create({})(FilterForm)
export default Order