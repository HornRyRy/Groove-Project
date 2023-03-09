Rails.application.routes.draw do
  resources :join_tables
  resources :playlists
  resources :songs, only: [:index, :show, :create]
  resources :users, only: [:show, :create, :index, :destroy] do
    resources :playlists, only: [:show, :create, :index]
  end
  resources :sessions, only: [:index]
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  #RJH - the below hello route verifies that cookies and sessions are working



  get '/hello', to: 'application#hello_world'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/authorized', to: 'users#show'



end
