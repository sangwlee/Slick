class Api::SubscriptionsController < ApplicationController
  def index
    @subscriptions = Subscription.all
    render json: @subscriptions
  end

  def create
    @subscription = Subscription.new(subscription_params)
    # debugger
    if @subscription.save
      @user = User.find(subscription_params[:user_id])
      render json: @user
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  def destroy
    @subscription = Subscription.find(params[:id])
    @subscription.destroy
    render :index
  end

  private
  def subscription_params
    # debugger;
    params.require(:subscription).permit(:user_id, :channel_id)
  end
end

#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
