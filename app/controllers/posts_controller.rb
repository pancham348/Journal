class PostsController < ApplicationController

  
  def create
    @post = Post.new(post_params)
    @post.save 
    render json: @post
  end
  
  def index
    @posts = Post.all
    
    respond_to do |format|
      format.json {
        render json: @posts
      }
    end
  end
  
  def show
    @post = Post.find(params[:id])
    respond_to do |format|
      format.json {
        render json: @post
      }
    end
  end

  def destroy
     @post = Post.find(params[:id])
     @post.destroy
     render json: @post
  end
    
  def update
    @post = Post.find(params[:id])
    @post.update_attributes(post_params)
    render json: @post
  end
  
  private
  
  def post_params
    params.require(:post).permit([:title, :body])
  end
end
