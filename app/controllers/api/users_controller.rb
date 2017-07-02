class Api::UsersController < ApplicationController
  def index
    if params.include?(:channel_id)
      users = []

      @users = Channel.find(params[:channel_id]).users
    else

      @users = User.all
    end
  end

  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    @user = User.new(user_params)
    if @user.save

      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      @user.channels.each do |channel|
        Pusher.trigger(channel.id.to_s, 'user_updated', {})
      end
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    render :index
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :photo_url, :firstname, :lastname, :email, :image)
  end
end
