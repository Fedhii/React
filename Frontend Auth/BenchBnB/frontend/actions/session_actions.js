import * as APIUtil from './../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USERGOUT";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = currentUser = ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors,
});

export const login = user => dispatch => (
    APIUtil.login(user)
        .then(user => dispatch(receiveUser(user)))
)

export const logout = () => dispatch => (
    APIUtil.logout()
        .then(user => dispatch(logoutCurrentUser()))
);

export const signup = user => dispatch => (
    API.signup(user)
        .then(user => dispatch(receiveUser(user)))
)