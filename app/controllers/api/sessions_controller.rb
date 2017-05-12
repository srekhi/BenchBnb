class Api::SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login!(@user)
      render "api/shared/user"
    else
      render text: "Invalid user", status: 404
    end
  end

  def destroy
    if current_user.nil?
      render text: "Invalid user", status: 404
    else
      logout!(current_user)
      render json: {}
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
