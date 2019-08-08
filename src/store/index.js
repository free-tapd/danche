import { createStore, applyMiddleware, compose } from 'redux';
// import { init } from '@rematch/core'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import  reducer from "./reducer"
import { helloSaga } from '@/components/Saga/helloSaga'
const sagaMiddleware=createSagaMiddleware();
// const store = init({
// 	reducer
//   // models,
// })
// 

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
// - const store = createStore(reducer, /* preloadedState, */ compose(
    applyMiddleware(thunk,sagaMiddleware)
  ));
  sagaMiddleware.run(helloSaga);
export  default store