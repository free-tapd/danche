import { combineReducers } from 'redux'
import {reducer as headerReducer} from "@/components/Header/store"
import {reducer as tableReducer} from "@/page/ui/store"
export default combineReducers({
  header:headerReducer,
  table:tableReducer
  
})