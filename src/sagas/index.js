import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './authenticSaga';
import { LOGIN_USER, REGISTER_USER } from '../constant/constants';

export default function* rootSaga() {
  yield takeLatest(REGISTER_USER, registerSaga);
  yield takeLatest(LOGIN_USER, loginSaga);
}