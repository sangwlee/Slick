export const fetchAllMessages = () => {
  return $.ajax({
    method: 'get',
    url: 'api/messages'
  });
};

export const fetchAllMessagesOfUser = user_id => {
  return $.ajax({
    method: 'get',
    url: `api/users/${user_id}/messages`
  });
};

export const fetchAllRepliesOfMessage = message_id => {
  return $.ajax({
    method: 'get',
    url: `api/messages/${message_id}/messages`
  });
};

export const fetchSingleMessage = message_id => {
  return $.ajax({
    method: 'get',
    url: `api/messages/${message_id}`
  });
};

export const fetchAllMessagesOfChannel = channel_id => {
  return $.ajax({
    method: 'get',
    url: `api/channels/${channel_id}/messages`
  });
};

export const createMessage = message => {
  return $.ajax({
    method: 'post',
    url: 'api/messages',
    data: {message}
  });
};

export const updateMessage = (message_id, message) => {
  return $.ajax({
    method: 'patch',
    url: `api/messages/${message_id}`,
    data: { message }
  });
};

export const deleteMessage = message_id => {
  return $.ajax({
    method: 'delete',
    url: `api/messages/${message_id}`
  });
};
