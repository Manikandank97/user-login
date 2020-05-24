import { LOGIN_USER, REGISTER_USER } from '../constant/constants';

export const registerUserAction = (regData) => {
    return {
        type: REGISTER_USER,
        regData
    }
};

export const loginUserAction = (loginData) => {
    return {
        type: LOGIN_USER,
        loginData
    }
};