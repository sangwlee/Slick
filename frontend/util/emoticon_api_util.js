export const createEmoticon = emoticon => {
  return $.ajax({
    method: 'POST',
    url: '/api/emoticons',
    data: {emoticon: emoticon}
  });
};
