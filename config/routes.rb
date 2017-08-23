Rails.application.routes.draw do

  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users

  root to: 'pages#home'
  get 'home', to: 'pages#home'
  get 'about', to: 'pages#about'
  get 'ebook', to: 'pages#ebook'
  get 'start_now', to: 'pages#start_now'
  get 'coaching', to: 'pages#coaching'
  get 'index', to: 'posts#index'
  get 'new', to: 'posts#new'
  get 'edit', to: 'posts#edit'
  get 'show', to: 'posts#show'
  resources :posts

  # root to: "posts#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

