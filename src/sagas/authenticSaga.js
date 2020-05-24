import { put, call } from 'redux-saga/effects';
import { loginUserService, registerUserService } from '../services/authService';
import { LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from '../constant/constants';

export function* loginSaga(payload) {
    try {
        const response = yield call(loginUserService, payload);
        yield put({ type: LOGIN_USER_SUCCESS, response })

    } catch (error) {
        yield put({ type: LOGIN_USER_FAILURE, error })
    }
}

export function* registerSaga(payload) {
    try {
        const response = yield call(registerUserService, payload);
        yield put({ type: REGISTER_USER_SUCCESS, response })

    } catch (error) {
        yield put({ type: REGISTER_USER_FAILURE, error });
    }
}