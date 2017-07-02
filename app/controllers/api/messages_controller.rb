class Api::MessagesController < ApplicationController
  def index
    messages = []

    if params.include?(:user_id)
      Message.where(user_id: params[:user_id]).each{|message| messages << message}
      @messages = messages
    elsif params[:channel_id] != nil
      messages = []
      Message.where(channel_id: params[:channel_id]).each{|message| messages << message}
      @messages = messages

      @replies = Message.where(message: @messages)
    elsif params[:message_id] != nil
      messages = []
      Message.where(message_id: params[:message_id]).each{|message| messages <<message}
      @messages = messages
    else
      @messages = Message.all
    end

    render :index
  end

  def new
    @message = Message.new
  end

  def show
    @message = Message.find(params[:id])
  end

  def create
    @message = Message.new(message_params)

    if @message.save

      if @message.channel_id != nil
        @channel = @message.channel
        Pusher.trigger(@channel.id.to_s, 'message_published', {
          message: @message, channel: @channel
        })
        render json: @message
      elsif @message.channel_id == nil
        @message = Message.find(@message.message_id)
        render json: @message
      else
        render json: @message.errors.full_messages, status: 422
      end
    end
  end

  def update
    @message = Message.find(params[:id].to_i)
    if @message.update(message_params)
      render json: @message
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def destroy
    @message = Message.find(params[:id])
    @channel = @message.channel
    @message.destroy
    render json: @channel
  end

  private
  def message_params
    params.require(:message).permit(:content, :kind, :user_id, :channel_id, :message_id)
  end
end

#  id         :integer          not null, primary key
#  content    :string
#  kind       :string           not null
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
