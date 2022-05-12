import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    LOGIN_REQUEST,
    alertConstants
} from "./types";
import AuthService from "../api/auth";
import {history} from "../utils/history";
import {alertActions} from "./alert";
import {func} from "prop-types";



export const register = (username, email, password) => (dispatch) => {
    return AuthService.register(username, email, password).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });
            dispatch({
                type: alertConstants.ERROR,
                payload: response.data.message,
            });
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: REGISTER_FAIL,
            });
            dispatch({
                type: alertConstants.ERROR,
                payload: message,
            });
            return Promise.reject();
        }
    )

};
function login (username, password) {
    return dispatch => {
        console.log("321")

        console.log("das")
        AuthService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    }

    function request(user) { return { type: LOGIN_REQUEST, user } }
    function success(user) { return { type: LOGIN_SUCCESS, user } }
    function failure(error) { return { type: LOGIN_FAIL, error } }
};
export const logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({
        type: LOGOUT,
    });
};

export const authActions = {
     login,
    register,
    logout,
};
