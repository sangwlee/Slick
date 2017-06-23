json.set! @channels do |channel|
  json.partial! './api/channels/channel', channel: channel
end
