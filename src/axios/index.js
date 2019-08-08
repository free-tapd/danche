import axios from "axios"
import { Modal } from "antd";
// let baseURL= "https://easy-mock.com/mock/5d28886a922a2f462926e7f5/mockapi"
let baseURL="https://www.easy-mock.com/mock/5d28886a922a2f462926e7f5/mockapi"

export default class Axios{
    static ajax(options){
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:"get",
                baseURL,
                timeout:5000,
                params:
                    (options.data &&options.data.params) ||""
                
            }).then(res=>{
                if(res.data.code==0){
                    resolve(res.data)
                }else{
                    Modal.info({
                        title:"提示",
                        content:res.data.message
                    })
                }
            }).catch(err=>{
                reject(err.data)
            })
        } );
    }
}