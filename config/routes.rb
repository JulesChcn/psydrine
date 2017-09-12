Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get 'home', to: 'pages#home'
  get 'coaching', to: 'pages#coaching'
  get 'ebook', to: 'pages#ebook'
  get 'start_now', to: 'pages#start_now'
  get 'about', to: 'pages#about'
  # get 'index', to: 'pages#index' #blog access

  root to: "posts#index"
  resources :posts

  resources "contacts", only: [:new, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
