class Api::ChannelsController < ApplicationController
  def index
    if params.include?(:user_id)
      channels = []

      Subscription
        .includes(:channel)
        .where(user_id: params[:user_id])
        .each {|subs| channels << subs.channel}

      @channels = channels
    else

      @channels = Channel.all
    end

    render json: @channels
  end

  def show
    @channel = Channel.find(params[:id])
    render json: @channel
  end

  def new
    @channel = Channel.new
  end

  def create
    @channel = Channel.new(channel_params)

    if @channel.save
      Pusher.trigger("channels", "channel_created", {
        channel: @channel
      })

      params[:channel][:members]
        .values.map {|user| user["id"]}
        .map {|id_s| id_s.to_i }
        .each do |user_id|

        Subscription.create({user_id: user_id, channel_id: @channel.id})
      end

      Pusher.trigger("channels", "subscriptions_changed", {})
      render json: @channel
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def update
    if (params[:channel][:unsubscribe])
      channel_id = params[:id].to_i
      user_id = params[:channel][:userId].to_i

      @subscription = Subscription.find_by(user_id: user_id, channel_id: channel_id)
      @subscription.destroy

      Pusher.trigger("channels", "subscriptions_changed", {})

      if Subscription.find_by(channel_id: channel_id) == nil
        Channel.find(channel_id).destroy
      end
    end

    if (params[:channel][:members])
      channel_id = params[:id].to_i
      user_id = params[:channel][:userId].to_i

      params[:channel][:members]
        .values.map {|user| user["id"]}
        .map {|id_s| id_s.to_i }
        .each do |user_id|


        Subscription.create({user_id: user_id, channel_id: channel_id})
        Pusher.trigger("channels", "subscriptions_changed", {})
      end
    end

    # debugger

    @channel = Channel.find(params[:id])

    if @channel.update(channel_params)
      render json: @channel
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @channel = Channel.find(params[:id])
    @channel.destroy
    render :index
  end

  private
  def channel_params
    # debugger
    params.require(:channel).permit(:name, :description, :kind, :members)
  end
end

#  name        :string           not null
#  description :string           not null
#  private     :boolean          default(FALSE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
