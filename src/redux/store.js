import { createStore,applyMiddleware } from "redux";
import logger from 'redux-logger'
import rootReducer from "./roor-reducer";


const middleware = [logger]
// if(process.env.NODE_ENV ==='development'){
//     middleware.push(logger)
// }

const store = createStore(rootReducer,applyMiddleware(...middleware))



export default  store;