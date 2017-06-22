json.array! @users do |user|
  debugger
  json.partial! './api/users/user', user: user
end
