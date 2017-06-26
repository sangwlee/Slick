json.extract! user, :id, :username, :email, :photo_url, :firstname, :lastname
json.image_url asset_path(user.image.url)
