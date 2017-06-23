json.set! @subscriptions do |subscription|
  json.partial! './api/subscriptions/subscription', subscription: subscription
end
