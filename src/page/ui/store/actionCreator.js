import * as actionInstance from "./actionType"
import axios from "@/axios"
const dataList=(payLoad)=>{
	console.log(actionInstance)
	return {
			type:actionInstance.TABLE_DATA,
			payLoad
		}
}
export const getTableData=()=>{
	return (dispatch)=>{
		   axios.ajax({url:'table/list',data:{}}).then(res=>{
		    console.log(res);
		    if(res.code==0){
		        res.result.map((v,i)=>{
		            v.key=i
		        })
				dispatch(dataList(res.result))
		    }
		    
		})
	}
}

