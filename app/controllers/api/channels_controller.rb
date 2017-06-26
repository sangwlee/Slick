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
      params[:channel][:members]
        .values.map {|user| user["id"]}
        .map {|id_s| id_s.to_i }
        .each do |user_id|

          Subscription.create({user_id: user_id, channel_id: @channel.id})
          # debugger
      # params[:channel][:members].keys.map{|id| id.to_i }.each do |member|
      #   Subscription.new(member.id, @channel.id)
      end

      render json: @channel
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def update
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
