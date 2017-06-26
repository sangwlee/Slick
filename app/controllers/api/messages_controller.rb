class Api::MessagesController < ApplicationController
  def index
    messages = []

    if params.include?(:user_id)
      Message.where(user_id: params[:user_id]).each{|message| messages << message}
      @messages = messages
    elsif params.include?(:channel_id)
      messages = []
      Message.where(channel_id: params[:channel_id]).each{|message| messages << message}
      @messages = messages
    else
      @messages = Message.all
    end

    render json: @messages
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
        render json: @message
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def update
    @message = Message.find(params[:id])

    if @message.update(message_params)
      render json: @message
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def destroy
    @message = Message.find(params[:id])
    @message.destroy
    render :index
  end

  private
  def message_params
    params.require(:message).permit(:content, :kind, :user_id, :channel_id)
  end
end

#  id         :integer          not null, primary key
#  content    :string
#  kind       :string           not null
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
