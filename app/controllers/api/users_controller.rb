class Api::UsersController < ApplicationController
  def index
    if params.include?(:channel_id)
      users = []

      # debugger;
      @users = Channel.find(params[:channel_id]).users

      # Subscription
      #   .includes(:user)
      #   .where(channel_id: params[:channel_id])
      #   .each {|subs| users << subs.user}
      # @users = users
    else

      @users = User.all
    end
    #
    # render json: @users
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
      render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    # debugger

    if @user.update(user_params)
      # debugger;
      @user.channels.each do |channel|
        Pusher.trigger(channel.id.to_s, 'user_updated', {})
      end
      render json: @user
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
