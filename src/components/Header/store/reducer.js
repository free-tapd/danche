import * as actionInstance from './actionType'
const initialState={
	userName:"河畔一角"
}
export default (state=initialState,action)=>{
	switch (action.type){
		case actionInstance.USER_NAME:
			return {...state,userName:action.payload}
		default:
			return state;
	}
}