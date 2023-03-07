Rails.application.routes.draw do
  resources :searches, except: [:update]
  resources :users, only: [:show, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  #RJH - the below hello route verifies that cookies and sessions are working
  get '/hello', to: 'application#hello_world'

end
