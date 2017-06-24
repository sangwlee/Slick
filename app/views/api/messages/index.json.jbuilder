# json.set! @messages do |message|
#   json.partial! './api/messages/message', message: message
# end

@messages.each do |message|
  json.set! message.id do
    json.partial! './api/messages/message', message: message
  end
end
