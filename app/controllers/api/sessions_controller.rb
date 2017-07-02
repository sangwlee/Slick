class Api::SessionsController < ApplicationController
  def create

    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user

      login(@user)
      render :show
    else
      render(json: ["Invalid username and/or password."], status: 401)
    end
  end

  def destroy
    if current_user
      current_user.reset_session_token!
      session[:session_token] = nil
      render(json: {})
    else
      render(json: ["Nobody is logged in."], status: 401)
    end
  end
end
