export default{
    pagination(data,callback){
        let page={
            Onchange:(current)=>{
                callback()
            },
            Current:data.result.page,
            pageSize:data.result.page_size,
            total:data.result.total,
            showTotal:()=>{

            },
            showQuickJumper:""
        }
        return page
    }
}