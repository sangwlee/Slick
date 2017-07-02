export const createEmoticon = emoticonData => {
  return $.ajax({
    method: 'POST',
    url: '/api/emoticons',
    data: {emoticon: emoticonData}
  });
};

export const fetchAllEmoticonsOfChannel = channel_id => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${channel_id}/emoticons`
  });
};

export const deleteEmoticon = emoticon_id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/emoticons/${emoticon_id}`
  });
};
