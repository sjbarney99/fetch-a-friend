import {combineReducers} from 'redux';

const user = (state = {}, action) => {
    switch (action.type){
        case 'user':
            return action.payload;
        default:
            return state;
    }
}
const park = (state = [], action) => {
    switch (action.type) {
        case 'parksObj':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({user, park})