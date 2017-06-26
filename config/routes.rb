Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :messages, only: [:index, :create, :destroy, :update, :show]
    resources :subscriptions, only: [:index, :create, :destroy]

    resources :users, only: [:index, :new, :create, :update, :destroy, :show] do
      resources :messages, only: [:index]
      resources :channels, only: [:index]
    end

    resources :channels, only: [:index, :create, :update, :destroy, :show] do
      resources :users, only: [:index]
      resources :messages, only: [:index]
      resources :subscriptions, only: [:index]
    end
  end

  root "static_pages#root"
end
