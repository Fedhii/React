Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resources :benches, only: [:create, :index, :show]
    resources :reviews, only: [:create]
    resource :user, only: [:create]
    resource :session, only: [:show, :create, :destroy]
  end

  root "static_pages#root"
end
