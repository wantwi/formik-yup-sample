import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
    User: {
        firstName:"",
        lastName:"",
        gender:"",
        phone:""
    }
};
const userReducer = (state = INITIAL_STATE,action) =>{
  
    switch (action.type) {

        case userActionTypes.ADD_USER:
           

        return {
            ...state,User: action.payload
        }
            
    
        default:
            return state;
           
    }
}

export default userReducer;