Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#index'
  get 'about', to: "pages#about"  #
  get 'experience', to: "pages#experience"  #
  get 'index', to: "pages#index"  #
  get 'skill', to: "pages#skill"  #

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
