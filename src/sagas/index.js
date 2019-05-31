import { take, call, put } from 'redux-saga/effects'
import { login } from '../apis/microsoftService';
//import { takeLatest } from 'redux-saga/effects'
import actionTypes from '../constants/index'

function* authorize() {
    try {
        yield call(login)
        //msal handles the token for us, otherwise we could put it in IndexDB
        yield put({ type: actionTypes.LOGIN_SUCCESS})
        //TODO: return a token because we likes control, precious
    } catch (error) {
        yield put({ type: actionTypes.LOGIN_ERROR, error })
    }

}

export function* loginFlow() {
    while (true) {
        yield take(actionTypes.LOGIN_REQUEST)
        yield call(authorize)
        //const token = yield call(authorize)
        //if (token) {
        //This is cool, we could store the token in IndexDB (or CACHE the widget in Redis) **if token
        yield take(actionTypes.LOGOUT) //
        //Then we could clear it or set some indicator of last cache date, so users could set the max cache interval, (wow or whatever?)
        //}
    }
}

export default loginFlow;