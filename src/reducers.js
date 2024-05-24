import { combineReducers } from "redux";


const counterReducer = (state = 0, action) =>{


    switch (action.type) {
        case 'INCREMENT':
            return state+1;
        
        case 'DECREMENT':
            return state-1;
    
        default:
            return state;
    }

    return state;
}



const rootReducer = combineReducers({
    counter: counterReducer
});


export default rootReducer;