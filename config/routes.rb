Rails.application.routes.draw do
  root :to => "static_pages#root"
  resources :posts, only: [:create, :index, :show, :destroy, :update]
end
