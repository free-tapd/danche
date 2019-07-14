import React, { Component } from 'react'
import {Card,Table} from "antd"
import axios from "../../axios"
class Tables extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        const dataSource=[
            {
                id:"0",
                userName:"tom",
                sex:"男",
                age:6,
                address:""
            }
        ]
        dataSource.map((v,i)=>{
            v.key=i
        })
        this.setState({
            dataSource
        })
        axios.ajax({url:'table/list',data:{}}).then(res=>{
            console.log(res);
            if(res.code==0){
                res.result.map((v,i)=>{
                    v.key=i
                })
                this.setState({
                    dataSource2:res.result
                })
            }
            
        })
    }
    onRowClick=(record,index)=>{
        let selectKey=[index];
        console.log(selectKey);
        console.log(record);
        
        
        this.setState({
            selectedRowKeys :selectKey,
            selectedRowItem:record
        })
    }
    render() { 
        const columns= [
            {
                title:"id",
                dataIndex:"id",
                
            } ,     {
                title:"用户名",
                dataIndex:"userName"
               
            } ,     {
                title:"性别",
                dataIndex:"sex",
                render(sex){
                    return sex==1?"男":"女"
                }
                
            } ,{
                title:"年龄",
                dataIndex:"age"
            },{
                title:"地址",
                dataIndex:"address"
            }
    ]
    const {selectedRowKeys} =this.state;
   const rowSelection={
       type:"radio",
       selectedRowKeys
   }
        return ( <div>
            <Card>
                <Table bordered={true} pagination={true} dataSource ={this.state.dataSource} columns={columns}>

                </Table>
            </Card> 
            <Card title="动态数据" style={{marginTop:10}}>
                <Table 
                bordered={true} pagination={true} 
                dataSource ={this.state.dataSource2} 
                columns={columns}
                rowSelection={rowSelection}
                onRow={(record,index)=>{
                    return {
                        onClick:()=>{
                            this.onRowClick(record,index)
                        }
                    }
                }}
                >

                </Table>
            </Card>

            <Card title="分页" style={{marginTop:10}}>
                <Table 
                bordered={true}
                 pagination={true} 
                dataSource ={this.state.dataSource2} 
                columns={columns}
                rowSelection={rowSelection}
                onRow={(record,index)=>{
                    return {
                        onClick:()=>{
                            this.onRowClick(record,index)
                        }
                    }
                }}
                >

                </Table>
            </Card>
        </div> );
    }
}
 
export default Tables;