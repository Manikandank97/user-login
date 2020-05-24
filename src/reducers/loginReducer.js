import { LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../constant/constants';

export default function (state = [], action) {

    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return { ...state, login: true };
        case LOGIN_USER_FAILURE:
            return { ...state, login: false };
        default:
            return state;
    }
};