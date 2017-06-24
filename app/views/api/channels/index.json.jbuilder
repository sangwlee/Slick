# json.set! @channels do |channel|
#   json.partial! './api/channels/channel', channel: channel
# end

@channels.each do |channel|
  json.set! channel.id do
    json.partial! './api/channels/channel', channel: channel
  end
end
