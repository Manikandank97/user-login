import { REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from '../constant/constants';

export default function (state = [], action) {
    let response = action.response;

    switch (action.type) {
        case REGISTER_USER_SUCCESS:
            return { ...state, response };
        case REGISTER_USER_FAILURE:
            return { ...state, response };
        default:
            return state;
    }
}