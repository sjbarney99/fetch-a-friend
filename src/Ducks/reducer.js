import {combineReducers} from 'redux';

const user = (state = {}, action) => {
    switch (action.type){
        case 'user':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({user})