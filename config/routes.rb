Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users
    resource :session
  end

  root "static_pages#root"
end
