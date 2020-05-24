import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../constant/constants';

const initialState = {
    loginLoading: false,
    userLogin: false,
    userName: "",
}

export default function (state = initialState, action) {

    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                loginLoading: true,
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loginLoading: false,
                userLogin: true,
                userName: action.response.username
            };
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                userLogin: false,
                userName: ''
            };
        default:
            return state;
    }
};