import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_LOGIN_ERRORS = "RECEIVE_LOGIN_ERRORS";
export const RECEIVE_SIGNUP_ERRORS = "RECEIVE_SIGNUP_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveLoginErrors = (errors) => ({
  type: RECEIVE_LOGIN_ERRORS,
  errors
});

export const receiveSignupErrors = (errors) => ({
  type: RECEIVE_SIGNUP_ERRORS,
  errors
});

export const login = (user) => dispatch => {
  return APIUtil.login(user).then(res => dispatch(receiveCurrentUser(res)),
    err => dispatch(receiveLoginErrors(err.responseJSON))
  );
};

export const logout = () => dispatch => (
  APIUtil.logout().then(res => dispatch(receiveCurrentUser(null)))
);

export const signup = (user) => dispatch => {
  return APIUtil.signup(user).then(res => dispatch(receiveCurrentUser(res)),
    err => dispatch(receiveSignupErrors(err.responseJSON))
  );
};
