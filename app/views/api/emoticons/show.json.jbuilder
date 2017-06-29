json.extract! @emoticon, :id, :user, :icon
json.message do
  json.extract! @emoticon.message, :id, :user_id, :channel_id, :content, :user, :emoticons
end
