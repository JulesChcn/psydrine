Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get 'home', to: 'pages#home'
  get 'about', to: 'pages#about'
  get 'ebook', to: 'pages#ebook'
  get 'start_now', to: 'pages#start_now'
  get 'coaching', to: 'pages#coaching'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

