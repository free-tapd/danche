import * as actionInstance from './actionType'
const initialState={
	list:[]
}
export default (state=initialState,action)=>{
	console.log(state)
	switch (action.type){
		case actionInstance.TABLE_DATA:
		console.log(action)
		console.log({list:action.payLoad})
			return {...state,list:action.payLoad}
		default:
			return state;
	}
}