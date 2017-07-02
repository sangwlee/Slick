export const fetchAllUsers = () => {
  return $.ajax({
    method: 'get',
    url: 'api/users'
  });
};

export const fetchSingleUser = user_id => {
  return $.ajax({
    method: 'get',
    url: `api/users/${user_id}`
  });
};

export const fetchAllUsersOfChannel = channel_id => {
  return $.ajax({
    method: 'get',
    url: `api/channels/${channel_id}/users`
  });
};

export const createUser = user => {
  return $.ajax({
    method: 'post',
    url: 'api/users',
    data: {user}
  });
};

export const updateUser = formData => {
  return $.ajax({
    method: 'patch',
    url: `api/users/${formData.get('user[id]')}`,
    data: formData,
    contentType: false,
    processData: false,
  });
};

export const deleteUser = user_id => {
  return $.ajax({
    method: 'delete',
    url: `api/users/${user_id}`
  });
};
