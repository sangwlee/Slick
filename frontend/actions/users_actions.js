import * as UsersUtil from '../util/users_util';

export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";
export const RECEIVE_ALL_USERS_OF_CHANNEL = "RECEIVE_ALL_USERS_OF_CHANNEL";

// REGULAR ACTIONS
export const receiveUserErrors = errors => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  };
};

export const receiveAllUsers = users => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

export const receiveSingleUser = user => {
  return {
    type: RECEIVE_SINGLE_USER,
    user
  };
};

export const receiveAllUsersOfChannel = users => {
  return {
    type: RECEIVE_ALL_USERS_OF_CHANNEL,
    users
  };
};

// THUNK ACTION CREATOR
export const requestAllUsers = () => dispatch => {
  return UsersUtil.fetchAllUsers()
    .then(users => dispatch(receiveAllUsers(users)))
    .fail(err => dispatch(receiveUserErrors(err.responseJSON)));
};

export const requestSingleUser = user_id => dispatch => {
  return UsersUtil.fetchSingleUser(user_id)
    .then(user => dispatch(receiveSingleUser(user)))
    .fail(err => dispatch(receiveUserErrors(err.responseJSON)));
};

export const requestAllUsersOfChannel = channel_id => dispatch => {
  return UsersUtil.fetchAllUsersOfChannel(channel_id)
    .then(users => dispatch(receiveAllUsersOfChannel(users)))
    .fail(err => dispatch(receiveUserErrors(err.responseJSON)));
};

export const createUser = userData => dispatch => {
  return UsersUtil.createUser(userData)
    .then(user => dispatch(receiveSingleUser(user)))
    .fail(err => dispatch(receiveUserErrors(err.responseJSON)));
};

export const updateUser = (formData) => dispatch => {
  return UsersUtil.updateUser(formData)
    .fail(err => dispatch(receiveUserErrors(err.responseJSON)));
};

export const deleteUser = user_id => dispatch => {
  return UsersUtil.deleteUser(user_id)
    .fail(err => dispatch(receiveUserErrors(err.responseJSON)));
};
