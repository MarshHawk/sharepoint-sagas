import { combineReducers } from 'redux'
import actionTypes from '../constants/index'

const initialState = {
    isAuthorized: false,
    isAuthenticating: true
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                isAuthenticating: false
            };
        default: return state;
    };
}

const rootReducer = combineReducers({
     authReducer
})

export default rootReducer;