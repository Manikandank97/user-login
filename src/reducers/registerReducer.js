import { REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from '../constant/constants';

const initialState = {
    registerLoading: false,
    registerSuccess: false,
    registerUserName: '',
}

export default function (state = initialState, action) {

    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                registerLoading: true,
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                registerLoading: false,
                registerSuccess: true,
                registerUserName: action.response.username,
            };
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                registerSuccess: false,
                registerUserName: ''
            };
        default:
            return state;
    }
}