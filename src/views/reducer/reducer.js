let initialState = {
    username: '',
    password: ''
}

const DEFINE_USER = 'DEFINE_USER';

export const userVer = (username, profilePic) => {
    return {
        type: DEFINE_USER,
        payload: {
            username: '',
            profilePic: profilePic
        }
    }
}
const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case DEFINE_USER:
            return {
                ...state,
                username: payload.username,
                profilePic: payload.profilePic
            }
            default:
                return state
    }
}

export default reducer