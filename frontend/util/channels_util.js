export const fetchAllChannels = () => {
  return $.ajax({
    method: 'get',
    url: 'api/channels'
  });
};

export const fetchSingleChannel = channel_id => {
  return $.ajax({
    method: 'get',
    url: `api/channels/${channel_id}`
  });
};

export const fetchAllChannelsOfUser = user_id => {
  return $.ajax({
    method: 'get',
    url: `api/users/${user_id}/channels`
  });
};

export const createChannel = channel => {
  return $.ajax({
    method: 'post',
    url: 'api/channels',
    data: {channel}
  });
};

export const updateChannel = (channel_id, channel) => {
  return $.ajax({
    method: 'patch',
    url: `api/channels/${channel_id}`,
    data: { channel }
  });
};

export const deleteChannel = channel_id => {
  return $.ajax({
    method: 'delete',
    url: `api/channels/${channel_id}`
  });
};

// Subscription utils
export const createSubscription = subscription => {
  return $.ajax({
    method: 'post',
    url: 'api/subscriptions',
    data: {subscription}
  });
};

export const deleteSubscription = subscription_id => {
  return $.ajax({
    method: 'delete',
    url: `api/subscriptions/${subscription_id}`
  });
};
