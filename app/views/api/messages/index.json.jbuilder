# json.set! @messages do |message|
#   json.partial! './api/messages/message', message: message
# end

json.messages do
  @messages.each do |message|
    json.set! message.id do
      json.partial! './api/messages/message', message: message
    end
  end
end

if @replies
  json.replies do
    @replies.each do |reply|
      json.set! reply.id do
        json.partial! './api/messages/message', message: reply
      end
    end
  end
end
