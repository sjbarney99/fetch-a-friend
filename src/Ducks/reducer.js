let initialState = {
    username: '',
    profilepic: ''
}

const FIND_USER = 'FIND_USER';

export const userVer = (username, profilepic) => {
    return {
        type: 'FIND_USER',
        payload: {
            username: username,
            profilepic: profilepic
        }
    }
}

const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case 'FIND_USER':
            return {
                ...state,
                username: payload.username,
                profilepic: payload.profilepic
            }
            default:
                return state
    }
}

export default reducer;