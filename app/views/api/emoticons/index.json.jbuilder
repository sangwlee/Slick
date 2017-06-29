@emoticons.each do |emoticon|
  json.set! emoticon.id do
    json.extract! emoticon, :id, :user_id, :channel_id, :icon
  end
end
