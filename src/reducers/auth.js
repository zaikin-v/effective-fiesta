import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT, LOGIN_REQUEST,
} from "../actions/types";
let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            console.log('req')
            return {
                loggingIn: true,
                user: action.user
            };
        case LOGIN_SUCCESS:
            console.log("se")
            return {
                loggedIn: true,
                user: action.user
            };
        case LOGIN_FAIL:
            console.log("fas")
            return {};
        case LOGOUT:
            return {};
        default:
            return state
    }
}